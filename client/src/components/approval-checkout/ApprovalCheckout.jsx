import React, { useEffect, useState } from "react";
import { images } from "../../constants";
import  { icon } from "../../constants";
import { Link, useParams } from "react-router-dom";
import { FaPlay, FaClock, FaClipboardCheck } from "react-icons/fa";
import { api } from "../../api/api";

function ApprovalCheckout() {

    const [checkout, setCheckout] = useState([]);
    const {id_kelas_bisnis} = useParams()

    const fetchCheckout = async () => {
        try {
         const token = JSON.parse(localStorage.getItem("auth"));
         const response = await api.get(
           `${process.env.REACT_APP_API_BASE_URL}/kelasTransaksi/${id_kelas_bisnis}`,
           {
             headers: {
               Accept: "application/json", "Content-Type": "application/Json",
               Authorization: token,
             },
           }
         )
          setCheckout(response.data.data);
           console.log(response);
      } catch (error) {
         console.log(error);
       }
      };
   
     useEffect(() => {
       fetchCheckout();
       
     }, []);
     console.log(checkout.checkout)
 
     useEffect(() => {
       console.log(checkout)
     },[checkout]);

    return (
        <div  key={checkout.id_kelas_bisnis} checkout={checkout} 
        className="lg:w-full w-full lg:h-[900px] lg:mb-[20px] mb-[20px] flex lg:flex flex-col items-center" style={{ backgroundColor:"#F0F0F0"}}>
            <h1 className="text-[22px] lg:text-[24px] font-bold text-center leading-[32px] lg:leading-[60px] lg:mt-[20px] mt-[20px] mb-[20px] lg:mb-[20px]">
                Menunggu Approval
            </h1>

            <div className="lg:w-[544px] w-[544px] h-[396px] lg:h-[396px]" style={{ boxShadow: '4px 6px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', border: '2px solid #DEDEDE'  }}>
                <img 
                src={images.approvalimage} 
                alt="approval"
                className="h-[220px] lg:h-[220px] w-[296px] lg:w-[296px] lg:ml-[120px] ml-[120px]" 
                />
                <div className="lg:ml-[40px] ml-[40px] lg:mt-[20px] mt-[20px]">
                    <p className="lg:text-[16px] text-[16px] text-center lg:text-center" style={{color: "#3F4041"}}>Tunggu sebentar ya, pembayaranmu sedang diperiksa <br /> oleh tim kami</p>
                </div>
                <Link to={`/checkout/${checkout?.id_kelas_bisnis}`}>
                    <div className="lg:ml-[30px] ml-[30px] lg:mt-[20px] mt-[20px]">
                        <p className="lg:text-[16px] text-[16px] text-center lg:text-center underline">Belum Melakukan Pembayaran?</p>
                    </div>
                </Link>
            </div>

            <div className="lg:w-[544px] w-[544px] lg:h-[256px] h-[256px] lg:mt-[20px] mt-[20px] " style={{ boxShadow: '4px 6px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', border: '2px solid #DEDEDE'  }}>
                    <div className="w-full lg:w-full lg:h-[60px] h-[60px] flex mt-[20px] lg:mt-[20px]" style={{borderBottom: '2px solid #DEDEDE'}}>
                        <div className="lg:w-full w-full lg:h-full h:full ml-[20px] lg:ml-[20px] flex">
                            <p className="lg:mt-[5px] mt-[5px] text-[16px] lg:text-[16px] font-medium">Detail Pembelian</p>
                                <div className="w-[148px] lg:w-[148px] lg:h-[36px] h-[36px] rounded-[6px] lg:ml-auto ml-auto lg:mr-[20px] mr-[20px] lg:flex flex " style={{border: '1px solid #0F1011'}}>
                                    <img 
                                        src={icon.COPY} 
                                        alt=""
                                        className="h-[15px] w-[15px] lg:h[15px] lg:w[15px] lg:mt-[8px] mt-[8px] ml-[5px] lg:ml-[5px]"
                                    />
                                    <p className="lg:mt-[4px] mt-[4px] lg:ml-[2px] ml-[2px] font-medium">
                                    {`ID#${checkout?.nomor_invoice?.slice(0, 10)}.`}
                                        </p>      
                                </div>
                        </div>
                    </div>
                    
                    <div className="lg:w-full w-full lg:h-[120px] h-[120px] lg:border-b-[2px] border-b-[2px]" >
                        <div className="flex lg:flex lg:ml-[20px] ml-[20px] ">
                            <img
                                src= {`${process.env.REACT_APP_SERVER_URL}images/kelas/${checkout.kelas_bisni?.image}`|| images.Linkedin}
                                alt= {checkout.kelas_bisni?.nama || "No Data"}
                                className="w-[121px] lg:w-[121px] lg:h-[88px] h-[88px] object-cover rounded-[5px] lg:mt-[15px] lg:ml-[5px] mt-[15px] ml-[5px]"
                            />
                            <div className="lg:ml-[15px] ml-[15px] mt-[15px] lg:mt-[15px]">
                                <h1 className="lg:text-[16px] text-[16px] font-medium">
                                {checkout.kelas_bisni?.nama || "No Data"}
                                </h1>
                                <div className="flex">
                                    <FaPlay className="h-[14px] lg:h-[14px] lg:w-[14px] mt-[16px] w-[14px] lg:mt-[16px]" style={{color:"#5E5F60"}} />
                                    <p className="lg:text-[14px] text-[14px] mt-[13px] ml-[5px] lg:mt-[13px] lg:ml-[5px]" style={{color:"#5E5F60"}}>36 Video</p>
                                    <FaClock className="h-[14px] lg:h-[14px] lg:w-[14px] w-[14px] mt-[16px] ml-[15px] lg:mt-[16px] lg:ml-[15px]" style={{color:"#5E5F60"}} />
                                    <p className="lg:text-[14px] text-[14px] mt-[13px] ml-[5px] lg:mt-[13px] lg:ml-[5px]" style={{color:"#5E5F60"}}>240 Menit</p>
                                    <FaClipboardCheck className="h-[14px] lg:h[14px] lg:w-[14px] w-[14px] mt-[16px] ml-[15px] lg:mt-[16px] lg:ml-[15px]" style={{color:"#5E5F60"}} />
                                    <p className="lg:text-[14px] text-[14px] mt-[13px] ml-[5px] lg:mt-[13px] lg:ml-[5px]" style={{color:"#5E5F60"}}>4 Kuis</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-[10px] lg:mt-[10px]  lg:w-full w-full h-full lg:h-full">
                        <div className="lg:flex ml-[20px] lg:ml-[20px] lg:mr-[20px] mr-[20px] flex">
                            <p className="lg:text-[16px] text-[16px] font-medium">Total Bayar</p>
                            <p className="lg:text-[16px] text-[16px] font-bold ml-auto lg:ml-auto lg:mr-[20px] mr-[20px]" style={{color:'#12517C'}}> 
                            {new Intl.NumberFormat("id-ID", {
                                            style: "currency",
                                            currency: "IDR",
                                        }).format(checkout.kelas_bisni?.harga)}
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    
    
    );
}

export default ApprovalCheckout;