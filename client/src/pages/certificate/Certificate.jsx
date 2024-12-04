import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
import Certificate from "../../../src/Certificate";
import { useLocation } from "react-router-dom";
import {
    getVerified,
    setUser,
    setToken,
  } from "../../lib/redux-toolkit/feature/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase/firebase";

function Certificate_user() {
    const [kelas, setKelas] = useState([]);
    const location = useLocation();
    const kelasName = location.state?.kelasName || "No Data";
    const [dataUser, setDataUser] = useState(null);
    const { token, verified } = useSelector((state) => state.userSlice);
    const { user } = useSelector((state) => state.userSlice);
    const dispatch = useDispatch();

    const fetchKelas = async () => {
        const token = JSON.parse(localStorage.getItem("auth"));
        try {
            const response = await api.get(
                `${process.env.REACT_APP_API_BASE_URL}/userKelas/progress/last`,
                {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization: token,
                    },
                }
            );
            setKelas(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getUserData = async (token) => {
        console.log({ token });
        try {
          console.log({
            path: `${process.env.REACT_APP_API_BASE_URL}/user/one-user`,
          });
          const response = await api.get(
            `${process.env.REACT_APP_API_BASE_URL}/user/one-user`,
            {
              headers: {
                Authorization: token,
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            }
          );
          setDataUser(response.data.data);
          dispatch(setUser(response.data.data));
          dispatch(getVerified(response.data.data.verified));
          localStorage.setItem(
            "verified",
            JSON.stringify(response.data.data.verified)
          );
    
          console.log(response);
        } catch (error) {
          localStorage.removeItem("auth");
          dispatch(setUser(null));
          dispatch(setToken(null));
          signOut(auth);
          setDataUser(null);
    
          console.log(error);
        }
      };


    useEffect(() => {
        fetchKelas();
    }, []);

    console.log("Data user: ", user)

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("auth"))) {
          dispatch(setToken(JSON.parse(localStorage.getItem("auth"))));
          getUserData(JSON.parse(localStorage.getItem("auth")));
          console.log("jalan");
        } else {
          localStorage.removeItem("auth");
          setDataUser(null);
        }
    
        if (JSON.parse(localStorage.getItem("verified"))) {
          dispatch(getVerified(JSON.parse(localStorage.getItem("verified"))));
        } else {
          localStorage.removeItem("verified");
        }
        console.log({ token });
      }, [token, verified]);

    return (
        <div className="flex flex-col justify-center items-center shrink-0">
            <Certificate name={user.nama_lengkap} kelas={kelasName} />
        </div>
    );
}

export default Certificate_user;
