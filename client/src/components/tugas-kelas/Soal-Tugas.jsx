import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { api } from "../../api/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { tugasSchema } from "./lib/tugasSchema.js";
import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";
import { CiEdit } from "react-icons/ci";

function TugasForm({ id }) {
  const { user } = useSelector((state) => state.userSlice);
  const navigate = useNavigate();
  const defaultValues = {
    judul_tugas: "",
    deskripsi_tugas: "",
  };
  const defaultValues1 = {
    link: "",
  };
  const {
      register,
      handleSubmit,
      reset,
      control,
      setValue,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(tugasSchema),
      defaultValues
    });

  const [isEditing, setIsEditing] = useState(false);
  const [submission, setSubmission] = useState(defaultValues1);
  const [kelasBisnisDetail, setKelasBisnisDetail] = useState(defaultValues);

  // Submit form handler
  const token = JSON.parse(localStorage.getItem("auth"));

  function showError(message) {
      Swal.fire({
        title: "Error",
        text: message || "Internal Server Error",
        icon: "error",
        confirmButtonColor: "#0F1011",
      });
    }
  
    const onSubmit = async (data) => {
      try {
        console.log(data)
        console.log("ini id kelas",id)
        await api.post(
          `${process.env.REACT_APP_API_BASE_URL}/kelasSubmission/create`,
          {
            link: data.linkTugas, id_kelas_detail: id
          }, {
            headers: {
              Authorization: token,
            },
          }
        );
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Perubahan Disimpan",
          text: "Silahkan Cek Dashboard",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.reload();
        });
      } catch (error) {
        showError(error.response?.data?.message);
      } finally {
        navigate("/profile/dashboard");
      }
    };

    const onUpdate = async (data) => {
      try {
        
        await api.put(
          `${process.env.REACT_APP_API_BASE_URL}/kelasSubmission/updateSubmission`,
          {
            link: data.linkTugas,
            id: submission.id
          }
        );
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Perubahan Disimpan",
          text: "Pastikan link dapat diakses",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.reload();
        });
      } catch (error) {
        showError(error.response?.data?.message);
      } finally {
        navigate("/profile/dashboard");
      }
    };

  function editClickHandler() {
    setIsEditing(true);
  }
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
          console.log("Error saat mengambil data detail tugas:", err);
        });
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      const data = { id_kelas: id };
      api
        .post(`${process.env.REACT_APP_API_BASE_URL}/kelasSubmission/submissionByUser`, data,{
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          
          const resData = res.data[0];
          setSubmission({
            id: resData.id,
            link: resData.link,
          });
        })
        .catch((err) => {
          console.log("Error saat mengambil data detail submission:", err);
        });
    }
  }, [id]);

  useEffect(() => {
    setValue("linkTugas", submission.link);
  }, [submission, setValue]);

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
          <p className=" whitespace-pre-wrap">{kelasBisnisDetail.deskripsi_tugas}</p>
        </div>

        {/* Form Input */}
        <form onSubmit={submission.id ? handleSubmit(onUpdate) : handleSubmit(onSubmit) }>
        
          <div className="mb-4">
            <h1 className="text-xl font-bold">Link File Tugas Anda</h1>
            <div className="flex gap-4 items-center">
            <input
              type="text"
              name="linkTugas"
              placeholder="docs.google.com/document/example"
              {...register("linkTugas")} // Update state saat input berubah
              className="w-1/3 px-4 py-2 border rounded-md"
              disabled={submission.id && !isEditing}
            />
            <div className="cursor-pointer bg-indigoDye500 p-2 rounded-md"><CiEdit fontSize="24px" onClick={editClickHandler}/></div>
            </div>
            <p className="mt-[4px] text-[12px] md:text-[14px] font-small leading-[10px]">*pastikan link dapat diakses</p>
             {errors.linkTugas && (
            <p className="mt-[4px] text-red-500 text-[12px] md:text-[14px] font-small leading-[10px]">{`${errors.linkTugas.message}`}</p>
          )}
          </div>
          
          {/* Flexbox Centering */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/4 bg-black text-white py-2 rounded-md hover:bg-gray-800 cursor-pointer"
              disabled={submission.id && !isEditing}
            >
              {submission.id ? "Update" : "Submit" }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TugasForm;
