// import axios from "axios";
// import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const Protect = ({ children }) => {
  const token = localStorage.getItem("token");
  // const [datas, setDatas] = useState([]);

  // useEffect(() => {
  //   const getProfile = async () => {
  //     const token = localStorage.getItem("token");
  //     await axios
  //       .get("http://localhost:1000/api/cms/profile", {
  //         headers: { Authorization: `Bearer ${token}` },
  //       })
  //       .then((res) => setDatas(res.data.data.access))
  //       .catch((err) => console.log(err));
  //   };
  //   getProfile();
  // }, []);

  // console.log(datas);
  if (token !== null) {
    return children;
  }
  if (token === null) {
    return <Navigate to="/restrict-page" />;
  }
};

export default Protect;
