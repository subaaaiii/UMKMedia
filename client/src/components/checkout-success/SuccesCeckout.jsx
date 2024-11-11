import React from "react";
import { images } from "../../constants";
import ButtonBlack500 from "../global-component/button/button-black500/ButtonBlack500";
import { Link, useLocation  } from "react-router-dom";


function SuccessCheckout() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    return (
        <div className="lg:w-full w-full lg:h-[900px] lg:mb-[20px] mb-[20px] flex lg:flex flex-col items-center" style={{ backgroundColor:"#F0F0F0"}}>
            <img 
                src={images.SUCCESS} 
                alt="success"
                className="mt-[20px] mb-[20px]"
            />
            <h1 className="text-[22px] lg:text-[24px] font-bold text-center leading-[32px] lg:leading-[60px]  mb-[10px] lg:mb-[10px]">
               Pembayaran Berhasil!
            </h1>

            <div className="w-[400px] mb-[20px]">
                <p className="text-center text-[16px]" style={{color:'#3F4041'}}>
                 Kamu bisa langsung mempelajari materi kelas ini untuk tingkatkan skill kamu
                </p>
            </div>

            <Link to={`/tentang-kelas/${id}`}>  
                <ButtonBlack500 WIDTH={"w-[320px]"} HEIGHT={"h-[56px]"} TEXT_BUTTON={"Mulai Belajar"} />
            </Link>
        </div>
    );
}

export default SuccessCheckout;