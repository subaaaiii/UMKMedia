// Menggunakan halaman loading
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../../api/api";
import HeroSection from "../../../components/one-career-lowongan/HeroSection/HeroSection";
import DetailSection from "../../../components/one-career-lowongan/DetailSection/DetailSection";
import BarSection from "../../../components/one-career-lowongan/BarSection/BarSection";

function OneCareerLowongan() {
  const { id_lowongan } = useParams();
  const navigate = useNavigate();

  const [lowonganDetail, setLowonganDetail] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [isBarSectionVisible, setIsBarSectionVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrollingUp(scrollTop < (window.scrollY || window.pageYOffset));
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const getLowongan = async () => {
      try {
        const response = await api.get(`${process.env.REACT_APP_API_BASE_URL}/lowongan/${id_lowongan}`);
        setLowonganDetail(response.data.data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    if (id_lowongan) {
      getLowongan();
    }
  }, [id_lowongan]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isScrollingUpNow = scrollTop < (window.scrollY || window.pageYOffset);

      if (isScrollingUp !== isScrollingUpNow) {
        setIsScrollingUp(isScrollingUpNow);
        setIsBarSectionVisible(isScrollingUpNow);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrollingUp]);

  if (!lowonganDetail) {
    return <p>Loading...</p>; // You can use a loading component here
  }

  return (
    <div className="flex flex-col justify-center items-center shrink-0">
      <HeroSection lowongan={lowonganDetail} />
      <DetailSection lowongan={lowonganDetail} />
      {isMobile && <BarSection lowongan={lowonganDetail} />}
    </div>
  );
}

export default OneCareerLowongan;



// Menggunakan Local Storage
// import React , { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { api } from "../../../api/api";
// import HeroSection from "../../../components/one-career-lowongan/HeroSection/HeroSection";
// import DetailSection from "../../../components/one-career-lowongan/DetailSection/DetailSection";

// function OneCareerLowongan() {
//   const { id_lowongan } = useParams();
//   const navigate = useNavigate();

//   const storedLowonganDetail = JSON.parse(localStorage.getItem('lowonganDetail')) || [];
//   const [lowonganDetail, setLowonganDetail] = useState(storedLowonganDetail);

//   useEffect(() => {
//     getLowongan();
//   }, []);

//   const getLowongan = async () => {
//     try {
//       const response = await api.get(`${process.env.REACT_APP_API_BASE_URL}/lowongan/`+id_lowongan)
//       setLowonganDetail(response.data.data);
//     } catch (error) {
//       console.error("Error:", error.message);
//     }
//   };

//   useEffect(() => {
//     localStorage.setItem('lowonganDetail', JSON.stringify(lowonganDetail));
//   }, [lowonganDetail]);

//   return (
//     <div className="flex flex-col justify-center items-center shrink-0 ">
//         <HeroSection lowongan = {lowonganDetail}/>
//         <DetailSection lowongan = {lowonganDetail}/>
//     </div>
//   );
//   // return <div>{JSON.stringify(lowonganDetail)}</div>;
// }

// export default OneCareerLowongan;