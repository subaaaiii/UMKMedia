import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding,faBriefcase,faUserCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Section_2_lowongan(props) {
  const navigate = useNavigate();

  const handleContainerClick = () => {
    // Navigate to your desired route upon container click
    navigate("/career-lowongan/" + props.lowongan.id);
  };

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString("id-ID", options);
    return formattedDate;
  }
  
  // Menampilkan data sesuai batas lamar
  const today = new Date();
  const deadlineDate = new Date(props.lowongan.batas_lamar);
  const isDeadlineValid = today <= deadlineDate;
  if (!isDeadlineValid) {
    return null; 
  }
  
  return (
    <div>
      <div className="p-4 w-full flex justify-center">
        <div className="grid grid-cols-5 md:grid-cols-3 rounded-md border-none p-6 cursor-pointer lg:w-[980px] md:w-[735px]" onClick={handleContainerClick} style={{ boxShadow: "2px 2px 12px 0px #0101011A" }}>
          <div className="md:col-span-2 col-span-4 border-none text-[#3F4041]">
            <div className="grid grid-cols-1 divide-y">
              <div className="font-bold text-[22px] border-none">{props.lowongan.nama_lowongan_pekerjaan}</div>
              <div className="font-semibold text-[#12517C] text-[16px] border-none">{props.lowongan.departemen.nama_departemen_pekerjaan}</div>
              <div className="border-none">
                <div className="flex md:items-center gap-3 mt-5 text-[#3F4041] md:w-full">
                  <div className="flex flex-col md:flex-row md:flex-wrap md:items-center gap-3">
                    <div className="flex items-center gap-3" style={{ color: '#3F4041' }}>
                      <FontAwesomeIcon icon={faBriefcase} style={{ color: '#919192' }} />
                      {props.lowongan.periode_pekerjaan.nama_periode_perkerjaan}
                      <FontAwesomeIcon icon={faBuilding} style={{ color: '#919192' }} />
                      {props.lowongan.tipe_pekerjaan.nama_tipe__perkerjaan}
                    </div>
                    <div className="flex items-center justify-start gap-3" style={{ color: '#3F4041' }}>
                      <FontAwesomeIcon icon={faUserCircle} style={{ color: '#919192' }} />
                      {props.lowongan.jenjang_pekerjaan.nama_jenjang__pekerjaan}
                    </div>
                    <div className="col-span-2 text-left mb-2 md:mb-0 md:hidden flex">
                      <span>Batas Lamar: <br></br> <p className="font-semibold inline">{formatDate(props.lowongan.batas_lamar)}</p> </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 col-span-1 items-center h-full border-none lg:text-[16px] text-[#3F4041] mt-2 mb-4 md:my-0">
            <div className="md:flex hidden"></div>
            <div className="md:col-span-2 text-left mb-2 md:mb-0 md:flex hidden">
              <span>Batas Lamar: <br></br> <p className="font-semibold inline">{formatDate(props.lowongan.batas_lamar)}</p> </span>
            </div>
            <div className="col-span-1 flex flex-col justify-center items-end border-none text-[#3F4041] md:flex ">
              <button className="focus:outline-none">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Section_2_lowongan;
