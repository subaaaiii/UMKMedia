import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { api } from "../../api/api";

function TugasForm({ id }) {
  const { user } = useSelector((state) => state.userSlice);
  const defaultValues = {
    judul_tugas: "",
    deskripsi_tugas: "",
  };

  const [kelasBisnisDetail, setKelasBisnisDetail] = useState(defaultValues);
  const [linkTugas, setLinkTugas] = useState(""); // State untuk menyimpan nilai input

  // Submit form handler
  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah reload halaman
    console.log("isi dari user ", user)
    try {
      const data = {
        id_user: user.user_pribadi.id_user, // Ubah sesuai dengan user login
        id_kelas_detail: id, // Ubah sesuai dengan ID kelas
        link: linkTugas, // Nilai input dari state
      };

      // Kirim data ke backend menggunakan Axios
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/kelasSubmission/create`,
        data
      );

      // Beri feedback jika berhasil
      alert(response.data.message || "Tugas berhasil disubmit!");
      setLinkTugas(""); // Reset input form setelah berhasil submit

    } catch (error) {
      console.error("Error saat menyimpan tugas:", error);
      alert("Gagal menyimpan tugas. Silakan coba lagi.");
    }
  };

  // Fetch data saat komponen dimount
  useEffect(() => {
    if (id) {
      const data = { id: id };

      api
        .post(`${process.env.REACT_APP_API_BASE_URL}/kelasBisnis/detail`, data)
        .then((res) => {
          const resData = res.data[0];
          setKelasBisnisDetail({
            judul_tugas: resData.kelas_tugas[0].judul,
            deskripsi_tugas: resData.kelas_tugas[0].deskripsi,
            id: resData.kelas_tugas[0].id
          });
        })
        .catch((err) => {
          console.error("Error saat mengambil data detail tugas:", err);
        });
    }
  }, [id]);

  return (
    <div className="m-24 bg-white p-8 rounded-lg shadow-lg w-2/3 flex justify-center">
      <div className="w-full">
        {/* Judul Tugas */}
        <div className="mb-4">
          <h1 className="text-xl font-bold">Judul Tugas</h1>
          <p>{kelasBisnisDetail.judul_tugas}</p>
        </div>

        {/* Deskripsi Tugas */}
        <div className="mb-4">
          <h1 className="text-xl font-bold">Deskripsi Tugas</h1>
          <p>{kelasBisnisDetail.deskripsi_tugas}</p>
        </div>

        {/* Form Input */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <h1 className="text-xl font-bold">Link File Tugas Anda</h1>
            <input
              type="text"
              name="linkTugas"
              placeholder="docs.google.com/document/example"
              value={linkTugas}
              onChange={(e) => setLinkTugas(e.target.value)} // Update state saat input berubah
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
