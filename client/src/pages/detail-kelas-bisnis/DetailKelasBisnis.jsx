import React, { useEffect, useMemo, useRef, useState } from "react";
import HeroSection from "../../components/detail-kelas-bisnis/hero-section/HeroSection";
import MainSection from "../../components/detail-kelas-bisnis/main-section/MainSection";
import { useParams } from "react-router";
import { api } from "../../api/api";
import { useDispatch } from "react-redux";
import { detailKelas } from "../../lib/redux-toolkit/feature/detail-kelas/detailKelasSlice";
import CheckoutKelasBisnisMobile from "../../components/detail-kelas-bisnis/main-section/checkout-kelas-bisnis-mobile/CheckoutKelasBisnisMobile";
import Swal from "sweetalert2";

function DetailKelasBisnis() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [dataDetail, setDataDetail] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isShowCheckOut, setIsShowCheckOut] = useState(false);
  const [star, setStar] = useState(0);
  const timeoutRef = useRef();

  // const [wishlist, setWishlist] = useState([]);
  // const [check, setCheck] = useState([]);
  const [status, setStatus] = useState();

  const fetchDetailKelas = useMemo(async () => {
    console.log("jalan");
    console.log({ id });
    try {
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/kelasBisnis/detail`,
        { id: Number(id) }
      );

      setDataDetail(response.data[0]);
      setStar(Number(response.data[0].kelas_bisni.total_nilai));
      dispatch(detailKelas(response.data));
      console.log(Number(response.data[0].kelas_bisni.total_nilai));
      checkStatusWishlist(response.data[0]);
    } catch (error) {
      console.log(error);
    }
    console.log("selesai");
  }, []);

  const token = JSON.parse(localStorage.getItem("auth"));
  const addWishlist = async () => {
    try {
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/kelasWishlist/changeWishlistBool`,
        {
          id_kelas_bisnis: dataDetail.id_kelas_bisnis,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      // setWishlist(response.data.data);
      setStatus(response.data.data.isRemove);
      if (status === true) {
        Swal.fire({
          title: "Info",
          text: "Berhasil Menambah Wishlist",
          icon: "success",
          confirmButtonColor: "#0F1011",
        });
      } else {
        Swal.fire({
          title: "Info",
          text: "Berhasil Menghapus Wishlist",
          icon: "success",
          confirmButtonColor: "#0F1011",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkStatusWishlist = async (data) => {
    console.log(data);
    try {
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/kelasWishlist/wishlist-status`,
        {
          id_kelas_bisnis: data.id,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      // setCheck(response.data.data);
      setStatus(response.data.data?.isRemove);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };

    // Tambahkan event listener pada mount komponen
    window.addEventListener("scroll", handleScroll);

    // Hapus event listener pada unmount komponen
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showCheckOut = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsShowCheckOut(true);
    timeoutRef.current = setTimeout(() => {
      setIsShowCheckOut(false);
    }, 2000);
  };

  useEffect(() => {
    showCheckOut();
  }, [scrollPosition]);

  return (
    <div
      onScroll={() => alert("scroll")}
      className="flex flex-col justify-center items-center shrink-0 "
    >
      <HeroSection
        dataDetail={dataDetail}
        star={star}
        addWishlist={addWishlist}
        // checkStatusWishlist={checkStatusWishlist}
        status={status}
      />
      <MainSection
        dataDetail={dataDetail}
        addWishlist={addWishlist}
        // checkStatusWishlist={checkStatusWishlist}
        status={status}
      />
      <div className="flex xl:hidden absolute bg-transparant pointer-events-none z-[50] top-0  w-full h-full ">
        <CheckoutKelasBisnisMobile
          dataDetail={dataDetail}
          isShowCheckOut={isShowCheckOut}
        />
      </div>
    </div>
  );
}

export default DetailKelasBisnis;
