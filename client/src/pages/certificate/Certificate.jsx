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
    const location = useLocation();
    const kelasName = location.state?.kelasName || "No Data";

    const [kelas, setKelas] = useState([]);
    const [token, setToken] = useState("");
    const [user, setUser] = useState([]);

    const fetchToken = async () => {
        const token = JSON.parse(localStorage.getItem("auth"));
        setToken(token);
    };

    const fetchKelas = async () => {
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

    const fetchUser = async () => {
        try {
            const response = await api.get(
                `${process.env.REACT_APP_API_BASE_URL}/user/one-user`,
                {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization: token,
                    },
                }
            );
            setUser(response.data.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const initializeData = async () => {
            await fetchToken(); // Ambil token
        };
        initializeData();
    }, []);

    useEffect(() => {
        if (token) {
            fetchKelas(token);
            fetchUser(token);
            console.log("ini adalah ", user) // Ambil data kelas setelah token tersedia
        }
    }, [token]);


    useEffect(() => {
        fetchKelas();
    }, []);

    // console.log("Data user: ", user)

    // useEffect(() => {
    //     if (JSON.parse(localStorage.getItem("auth"))) {
    //       dispatch(setToken(JSON.parse(localStorage.getItem("auth"))));
    //       getUserData(JSON.parse(localStorage.getItem("auth")));
    //       console.log("jalan");
    //     } else {
    //       localStorage.removeItem("auth");
    //       setDataUser(null);
    //     }

    //     if (JSON.parse(localStorage.getItem("verified"))) {
    //       dispatch(getVerified(JSON.parse(localStorage.getItem("verified"))));
    //     } else {
    //       localStorage.removeItem("verified");
    //     }
    //     console.log({ token });
    //   }, [token, verified]);

    return (
        <div className="flex flex-col justify-center items-center shrink-0">
            <Certificate name={user.nama_lengkap} kelas={kelasName} />
        </div>
    );
}

export default Certificate_user;
