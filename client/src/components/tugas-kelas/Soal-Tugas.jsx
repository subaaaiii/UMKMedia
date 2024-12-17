import React, { useEffect, useState } from "react";
import { api } from "../..//api/api";

function TugasForm({id}) {
  const defaultValues = {
    judul_tugas: "",
    deskripsi_tugas: "",
  };
  const [kelasBisnisDetail, setKelasBisnisDetail] = useState(defaultValues);

  useEffect(() => {
      if (id) {
        const data = {
          id: id,
        };
        api
          .post(`${process.env.REACT_APP_API_BASE_URL}/kelasBisnis/detail`, data)
          .then((res) => {
            const resData = res.data[0];
            setKelasBisnisDetail({
              judul_tugas: resData.kelas_tugas[0].judul,
              deskripsi_tugas: resData.kelas_tugas[0].deskripsi,
              
            });
          })
          .catch((err) => {

          });
      }
    }, [id]);
  return (
    <div className="m-24 bg-white p-8 rounded-lg shadow-lg w-2/3 flex justify-center">
      <div className="w-full">
        <div className="mb-4">
          <h1 className="text-xl font-bold">Judul Tugas</h1>
          <p>{kelasBisnisDetail.judul_tugas}</p>
        </div>
        <div className="mb-4">
          <h1 className="text-xl font-bold">Deskripsi Tugas</h1>
          {kelasBisnisDetail.deskripsi_tugas}
        </div>
        <div className="mb-4">
          <h1 className="text-xl font-bold">Link File Tugas Anda</h1>
        </div>
        <form action="">
          <div className="mb-4">
            <input
              type="text"
              name="linkTugas"
              placeholder="docs.google.com/document/example"
              className="w-1/3 px-4 py-2 border rounded-md"
            />
          </div>
          {/* Flexbox Centering */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/4 bg-black text-white py-2 rounded-md hover:bg-gray-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>

  );
}

export default TugasForm;
