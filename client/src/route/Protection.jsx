import React, { useEffect, useState } from "react";
import Navbar from "../components/global-component/navbar/Navbar";
import Footer from "../components/global-component/footer/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import NavbarMobile from "../components/global-component/navbar-mobile/NavbarMobile";
import { images, logo } from "../constants";
import Unverified from "../components/global-component/unverified/Unverified";

function Protection({
  children,
  publicSide = false,
  userOnly = false,
  adminOnly = false,
}) {
  const { user, verified } = useSelector((state) => state.userSlice);
  const navigate = useNavigate();
  const tokenFromRedux = useSelector((state) => state.userSlice.token);
  const [readyToRender, setReadyToRender] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  useEffect(() => {
    const verify =
      Boolean(JSON.parse(localStorage.getItem("verified"))) || false;

    if (verify) setIsVerified(verify);
    else setIsVerified(false);

    setReadyToRender(false);
    const token = JSON.parse(localStorage.getItem("auth"));
    console.log({ publicSide, userOnly, adminOnly });

    // if (publicSide && token && !userOnly && !adminOnly) {
    //   navigate("/");
    // } else if ((!token && userOnly) || adminOnly) {
    //   navigate("/");
    // }
    console.log({ token });
    setReadyToRender(true);
  }, [publicSide, userOnly, adminOnly, tokenFromRedux, verified]);
  console.log({ publicSide, userOnly, adminOnly });

  return readyToRender ? (
    publicSide || userOnly ? (
      <>
        {/* <div className="w-screen hidden lg:flex"> */}
        <Navbar />
        {!isVerified && user && <Unverified />}
        {/* </div> */}
        {/* <div className="w-screen relative flex lg:hidden">
          <NavbarMobile />
        </div> */}
        {children}
        <Footer />
      </>
    ) : (
      children
    )
  ) : null;
}

export default Protection;
