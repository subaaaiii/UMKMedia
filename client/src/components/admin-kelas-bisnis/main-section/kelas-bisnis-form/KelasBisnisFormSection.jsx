import { icon } from "../../../../constants";
import { useState, useRef, useEffect } from "react";
import AdminHeader from "../../../global-component/admin-header/AdminHeader";
import { api } from "../../../../api/api";
import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";
import { zodResolver } from "@hookform/resolvers/zod";
import { kelasBisnisSchema } from "./lib/kelasBisnisSchema";
import { Spinner } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function KelasBisnisFormSection({ id }) {
  const [isEditing, setIsEditing] = useState(false);
  const [bannerImage, setBannerImage] = useState(null);
  const [pemateriImage, setPemateriImage] = useState(null);
  const [isSubmitting, setIsSubmiting] = useState(false);
  const [tingkatKesulitanOptions, setTingkatKesulitanOptions] = useState([]);
  const [kelasKategoriOptions, setKelasKatgoriOptions] = useState([]);
  const defaultValues = {
    nama: "",
    tingkatKesulitan: "",
    kelasKategori: "",
    harga: "0",
    imageBanner: "",
    linkBanner: "",
    imageMentor: "",
    namaPemateri: "",
    jabatan: "",
    perusahaan: "",
    deskripsiPemateri: "",
    linkFotoPemateri: "",
    deskripsi: "",
    judul_tugas: "",
    deskripsi_tugas: "",
    materis: [
      {
        materi: "",
        link: "",
        deskripsi: "",
      },
    ],
  };
  const [kelasBisnisDetail, setKelasBisnisDetail] = useState(defaultValues);
  const [materisForm, setMaterisForm] = useState([
    {
      materi: "",
      link: "",
      deskripsi: "",
    },
  ]);
  const bannerRef = useRef();
  const pemateriRef = useRef();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(kelasBisnisSchema),
    defaultValues
  });

  const redirectToDashboard = () => {
    navigate("/admin/kelas-bisnis");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const imageDataUrl = event.target.result;
        setBannerImage(imageDataUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleFilePemateriChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const imageDataUrl = event.target.result;
        setPemateriImage(imageDataUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  function showError(message) {
    Swal.fire({
      title: "Error",
      text: message || "disini",
      icon: "error",
      confirmButtonColor: "#0F1011",
    });
  }

  useEffect(() => {
    api
      .post(`${process.env.REACT_APP_API_BASE_URL}/kelasBisnis/level`)
      .then((res) => {
        setTingkatKesulitanOptions(
          res.data.data.map((level) => ({
            value: Number(level.id),
            label: level.nama,
          }))
        );
      })
      .catch((err) => {
        showError(err);
      });
  }, []);

  useEffect(() => {
    api
      .post(`${process.env.REACT_APP_API_BASE_URL}/kelasBisnis/kategori`)
      .then((res) => {
        setKelasKatgoriOptions(
          res.data.data.map((kategori) => ({
            value: Number(kategori.id),
            label: kategori.nama,
          }))
        );
      })
      .catch((err) => {
        showError(err);
      });
  }, []);

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
            nama: resData.kelas_bisni.nama,
            tingkatKesulitan: resData.kelas_bisni.kelas_level.id.toString(),
            tingkatKesulitanNama: resData.kelas_bisni.kelas_level.nama,
            kelasKategori: resData.kelas_bisni.kelas_kategori.id.toString(),
            kelasKategoriNama: resData.kelas_bisni.kelas_kategori.nama,
            harga: resData.kelas_bisni.harga.toString(),
            imageBanner: resData.kelas_bisni.image,
            linkBanner: resData.kelas_bisni.images_link,
            namaPemateri: resData.kelas_mentors[0].nama,
            jabatan: resData.kelas_mentors[0].jabatan,
            perusahaan: resData.kelas_mentors[0].perusahaan,
            deskripsiPemateri: resData.kelas_mentors[0].deskripsi,
            imageMentor: resData.kelas_mentors[0].image,
            linkFotoPemateri: resData.kelas_mentors[0].images_link,
            deskripsi: resData.deskripsi,
            judul_tugas: resData.kelas_tugas[0].judul,
            deskripsi_tugas: resData.kelas_tugas[0].deskripsi,
            materis: resData.kelas_materis.map((kelas_materi) => {
              return { ...kelas_materi };
            }),
          });
        })
        .catch((err) => {
        showError(err);
        });
    }
  }, [id]);

  useEffect(() => {
    setValue("nama", kelasBisnisDetail.nama);
    setValue("tingkatKesulitan", kelasBisnisDetail.tingkatKesulitan);
    setValue("kelasKategori", kelasBisnisDetail.kelasKategori);
    setValue("harga", kelasBisnisDetail.harga);
    setValue("namaPemateri", kelasBisnisDetail.namaPemateri);
    setValue("jabatan", kelasBisnisDetail.jabatan);
    setValue("perusahaan", kelasBisnisDetail.perusahaan);
    setValue("deskripsiPemateri", kelasBisnisDetail.deskripsiPemateri);
    setValue("deskripsi", kelasBisnisDetail.deskripsi);
    setValue("judul_tugas", kelasBisnisDetail.judul_tugas);
    setValue("deskripsi_tugas", kelasBisnisDetail.deskripsi_tugas);
    kelasBisnisDetail.materis.forEach((materi, index) => {
      setValue(`materis[${index}].materi`, materi.materi);
      setValue(`materis[${index}].link`, materi.link);
      setValue(`materis[${index}].deskripsi`, materi.deskripsi);
    });    
    setBannerImage(kelasBisnisDetail.linkBanner);
    setPemateriImage(kelasBisnisDetail.linkFotoPemateri);
    setMaterisForm(kelasBisnisDetail.materis);
  }, [kelasBisnisDetail, setValue]);

  function tambahMateriHandler() {
    setMaterisForm((prevMaterisForm) => [
      ...prevMaterisForm,
      {
        materi: "",
        link: "",
        deskripsi: "",
      },
    ]);
  }

  function hapusMateriHandler(index) {
    setMaterisForm((prevMaterisForm) => {
      const updatedMaterisForm = prevMaterisForm.filter(
        (_, idx) => idx !== index
      );
      return updatedMaterisForm;
    });

    if (!kelasBisnisDetail.materis && id) {
      setKelasBisnisDetail((prevDetail) => {
        const updatedMateris = [
          ...prevDetail.materis.slice(0, index),
          ...prevDetail.materis.slice(index + 1),
          { materi: "", link: "", deskripsi: "" },
        ];
        return {
          ...prevDetail,
          materis: updatedMateris,
        };
      });
    }

    if (materisForm.length === 1) {
      setValue(`materis[0].materi`, "");
      setValue(`materis[0].link`, "");
      setValue(`materis[0].deskripsi`, "");
      return;
    }
    for (let i = index + 1; i < materisForm.length; i++) {
      setValue(`materis[${i - 1}].materi`, materisForm[i].materi);
      setValue(`materis[${i - 1}].link`, materisForm[i].link);
      setValue(`materis[${i - 1}].deskripsi`, materisForm[i].deskripsi);
    }
    setValue(`materis[${materisForm.length - 1}].materi`, "");
    setValue(`materis[${materisForm.length - 1}].link`, "");
    setValue(`materis[${materisForm.length - 1}].deskripsi`, "");
  }

  function handleMateriChange(e, index, field) {
    const { value } = e.target;
    setMaterisForm((prevMaterisForm) => {
      const updatedMaterisForm = [...prevMaterisForm];
      updatedMaterisForm[index][field] = value;
      return updatedMaterisForm;
    });
  }

  function uploadBannerClickHandler() {
    bannerRef.current.click();
  }

  function uploadFotoPemateriClickHandler() {
    pemateriRef.current.click();
  }

  function editClickHandler() {
    setIsEditing(true);
  }

  function saveClickHandler() {
    setIsEditing(false);
  }

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("linkBanner", data.linkBanner);
    formData.append("kelasKategori", data.kelasKategori);
    formData.append("linkFotoPemateri", data.linkFotoPemateri);
    formData.append("nama", data.nama);
    formData.append("harga", data.harga);
    formData.append("tingkatKesulitan", data.tingkatKesulitan);
    formData.append("namaPemateri", data.namaPemateri);
    formData.append("jabatan", data.jabatan);
    formData.append("perusahaan", data.perusahaan);
    formData.append("deskripsiPemateri", data.deskripsiPemateri);
    formData.append("deskripsi", data.deskripsi);
    formData.append("judul_tugas", data.judul_tugas);
    formData.append("deskripsi_tugas", data.deskripsi_tugas);
    data.materis.forEach((data, index) => {
      formData.append(`materis[${index}].materi`, data.materi);
      formData.append(`materis[${index}].link`, data.link);
      formData.append(`materis[${index}].deskripsi`, data.deskripsi);
    });
    console.log(formData)
    const token = localStorage.getItem("token");
    try {
      setIsSubmiting(true);
      await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/kelasBisnis/postData`,
        formData,{
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Kelas Baru Telah Ditambahkan",
        text: "Silahkan Cek Dashboard",
        showConfirmButton: false,
        timer: 1500,
      });
      reset(defaultValues);
      setKelasBisnisDetail(defaultValues);
    } catch (error) {
      showError(error.response?.data?.message);
    } finally {
      setIsSubmiting(false);
    }
  };

  const onUpdate = async (data) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("kelasKategori", data.kelasKategori);
    formData.append("linkBanner", data.linkBanner);
    formData.append("linkFotoPemateri", data.linkFotoPemateri);
    formData.append("nama", data.nama);
    formData.append("harga", data.harga);
    formData.append("tingkatKesulitan", data.tingkatKesulitan);
    formData.append("namaPemateri", data.namaPemateri);
    formData.append("jabatan", data.jabatan);
    formData.append("perusahaan", data.perusahaan);
    formData.append("deskripsiPemateri", data.deskripsiPemateri);
    formData.append("deskripsi", data.deskripsi);
    formData.append("judul_tugas", data.judul_tugas);
    formData.append("deskripsi_tugas", data.deskripsi_tugas);
    data.materis.forEach((data, index) => {
      formData.append(`materis[${index}].materi`, data.materi || "");
      formData.append(`materis[${index}].link`, data.link || "");
      formData.append(`materis[${index}].deskripsi`, data.deskripsi || "");
    });
    const token = localStorage.getItem("token");
    try {
      setIsSubmiting(true);
      await api.patch(
        `${process.env.REACT_APP_API_BASE_URL}/kelasBisnis/postData`,
        formData,{
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
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
      setIsSubmiting(false);
      saveClickHandler();
    }
  };
  
  function deleteClickHandler() {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Anda tidak akan dapat mengembalikan data ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
    }).then(async (hasil) => {
      if (hasil.isConfirmed) {
        const token = localStorage.getItem("token");
        try {
          setIsSubmiting(true);
          await api.delete(
            `${process.env.REACT_APP_API_BASE_URL}/kelasBisnis/postData/${id}`,{
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Kelas Telah Dihapus",
            text: "Silahkan Cek Dashboard",
            showConfirmButton: false,
            timer: 1500,
          });
          redirectToDashboard();
        } catch (error) {
          showError(error.response?.data?.message);
        } finally {
          setIsSubmiting(false);
        }
      }
    });
  }

  return (
    <div className="w-full md:w-9/12 2xl:w-4/5 flex flex-col grow-0 px-10 md:px-28 py-8">
      <AdminHeader title={id ? "" : "Tambah Kelas Bisnis"} />
      <form
        onSubmit={id ? handleSubmit(onUpdate) : handleSubmit(onSubmit)}
      >
        <div className="flex gap-x-2">
          {id && !isEditing && (
            <button
              type="button"
              className="flex justify-center items-center gap-x-2 px-2 py-2 border border-black rounded-md"
              onClick={editClickHandler}
            >
              <img
                src={icon.iconEdit1}
                alt="edit"
                className="w-3 sm:w-4 aspect-square"
              />
              <p className="text-xs sm:text-base font-bold">
                Edit Kelas Bisnis
              </p>
            </button>
          )}
          {id && isEditing && (
            <button
              className="flex justify-center items-center gap-x-2 px-2 py-2 border border-black rounded-md bg-green-400"
              type="submit"
            >
              {isSubmitting ? (
                <Spinner color="black" />
              ) : (
                <img
                  src={icon.iconSave}
                  alt="save"
                  className="w-3 sm:w-4 aspect-square"
                />
              )}
              <p className="text-xs sm:text-base font-bold">
                {isSubmitting ? "Loading..." : "Simpan"}
              </p>
            </button>
          )}
          {id && (
            <button
              type="button"
              className="flex justify-center items-center gap-x-2 px-2 py-2 border border-black rounded-md"
              onClick={deleteClickHandler}
            >
              <img
                src={icon.iconDelete}
                alt="delete"
                className="w-3 sm:w-4 aspect-square"
              />
              <p className="text-xs sm:text-base font-bold">
                Hapus Kelas Bisnis
              </p>
            </button>
          )}
        </div>
        <div className="my-4">
          <p className="font-bold">Nama Kelas Bisnis</p>
          <input
            type="text"
            name="nama"
            {...register("nama")}
            className="my-2 w-1/2 min-w-[256px] h-8 px-2 bg-transparent border border-gray-400 rounded-md"
            disabled={id && !isEditing}
          />
          {errors.nama && (
            <p className="mt-[4px] text-red-500 text-[12px] md:text-[14px] font-small leading-[10px]">{`${errors.nama.message}`}</p>
          )}
        </div>
        <div className="my-4">
          <p className="font-bold">Tingkat Kesulitan</p>
          <select
            className="my-2 w-1/4 min-w-[192px] h-8 px-2 bg-transparent border border-gray-400 rounded-md disabled:opacity-100"
            name="tingkatKesulitan"
            disabled={id && !isEditing}
            {...register("tingkatKesulitan")}
          >
            {id ? (
              <option disabled>{kelasBisnisDetail.tingkatKesulitanNama}</option>
            ) : (
              <option value="" disabled>
                Pilih Tingkat Kesulitan
              </option>
            )}
            {tingkatKesulitanOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.tingkatKesulitan && (
            <p className="mt-[4px] text-red-500 text-[12px] md:text-[14px] font-small leading-[10px]">{`${errors.tingkatKesulitan.message}`}</p>
          )}
        </div>
        <div className="my-4">
          <p className="font-bold">Kategori Kelas</p>
          <select
            className="my-2 w-1/4 min-w-[192px] h-8 px-2 bg-transparent border border-gray-400 rounded-md disabled:opacity-100"
            name="kelasKategori"
            disabled={id && !isEditing}
            {...register("kelasKategori")}
          >
            {id ? (
              <option disabled>{kelasBisnisDetail.kelasKategoriNama}</option>
            ) : (
              <option value="" disabled>
                Pilih Kategori Kelas
              </option>
            )}
            {kelasKategoriOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.kelasKategori && (
            <p className="mt-[4px] text-red-500 text-[12px] md:text-[14px] font-small leading-[10px]">{`${errors.kelasKategori.message}`}</p>
          )}
        </div>
        <div className="my-4">
          <p className="font-bold">Harga Kelas</p>
          <div className="flex items-center mt-2 mb-6 w-1/4 min-w-[192px] h-8 border border-gray-400 rounded-md">
            <span className="mx-2">Rp</span>
            <input
              type="number"
              name="harga"
              {...register("harga")}
              className="bg-transparent w-full mr-2 focus:outline-none"
              disabled={id && !isEditing}
            />
          </div>
          {errors.harga && (
            <p className="mt-[4px] text-red-500 text-[12px] md:text-[14px] font-small leading-[10px]">{`${errors.harga.message}`}</p>
          )}
        </div>
        <div className="my-4">
          <p className="font-bold">Gambar Banner</p>
          <Controller
            name="linkBanner"
            control={control}
            render={({ field }) => (
              <>
                <input
                  onChange={(e) => {
                    field.onChange(e.target.files[0]);
                    handleFileChange(e);
                  }}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  ref={bannerRef}
                />
              </>
            )}
          />
          <button
            type="button"
            onClick={uploadBannerClickHandler}
            className={`flex flex-col justify-center aspect-video mt-2 mb-6 w-1/3 min-w-[192px] border border-gray-400 rounded-md bg-transparent ${
              !id ? "px-2" : ""
            }`}
            disabled={id && !isEditing}
          >
            {(!id && !bannerImage) ||
            (id &&
              kelasBisnisDetail.imageBanner === null &&
              bannerImage == null) ? (
              <>
                <img
                  src={icon.iconUpload}
                  alt="upload"
                  className="h-1/6 max-h-6 aspect-w-1 aspect-h-1 border-solid self-end"
                />
                <p className="h-2/3 w-full self-center flex items-center justify-center pb-4">
                  upload a picture
                </p>
              </>
            ) : (
              <img src={bannerImage} alt="banner" className="object-cover" />
            )}
          </button>
          {errors.linkBanner && (
            <p className="mt-[4px] text-red-500 text-[12px] md:text-[14px] font-small leading-[10px]">{`${errors.linkBanner.message}`}</p>
          )}
        </div>
        <div className="my-4">
          <p className="font-bold">Deskripsi Kelas</p>
          <textarea
            name="deskripsi"
            {...register("deskripsi")}
            className="resize-none my-2 w-1/2 min-w-[256px] h-24 px-2 py-2 bg-transparent border border-gray-400 rounded-md"
            disabled={id && !isEditing}
          />
          {errors.deskripsi && (
            <p className="mt-[4px] text-red-500 text-[12px] md:text-[14px] font-small leading-[10px]">{`${errors.deskripsi.message}`}</p>
          )}
        </div>
        
        <div className="my-4">
          <p className="font-bold">Nama Pemateri</p>
          <input
            type="text"
            name="namaPemateri"
            {...register("namaPemateri")}
            className="my-2 w-1/3 min-w-[256px] h-8 px-2 bg-transparent border border-gray-400 rounded-md"
            disabled={id && !isEditing}
          />
          {errors.namaPemateri && (
            <p className="mt-[4px] text-red-500 text-[12px] md:text-[14px] font-small leading-[10px]">{`${errors.namaPemateri.message}`}</p>
          )}
        </div>
        <div className="my-4">
          <p className="font-bold">Jabatan Pemateri</p>
          <input
            type="text"
            name="jabatan"
            {...register("jabatan")}
            className="my-2 w-1/3 min-w-[256px] h-8 px-2 bg-transparent border border-gray-400 rounded-md"
            disabled={id && !isEditing}
          />
          {errors.jabatan && (
            <p className="mt-[4px] text-red-500 text-[12px] md:text-[14px] font-small leading-[10px]">{`${errors.jabatan.message}`}</p>
          )}
        </div>
        <div className="my-4">
          <p className="font-bold">Perusahaan Pemateri</p>
          <input
            type="text"
            name="perusahaan"
            {...register("perusahaan")}
            className="my-2 w-1/3 min-w-[256px] h-8 px-2 bg-transparent border border-gray-400 rounded-md"
            disabled={id && !isEditing}
          />
          {errors.perusahaan && (
            <p className="mt-[4px] text-red-500 text-[12px] md:text-[14px] font-small leading-[10px]">{`${errors.perusahaan.message}`}</p>
          )}
        </div>
        <div className="my-4">
          <p className="font-bold">Foto Pemateri</p>
          <Controller
            name="linkFotoPemateri"
            control={control}
            render={({ field }) => (
              <>
                <input
                  onChange={(e) => {
                    field.onChange(e.target.files[0]);
                    handleFilePemateriChange(e);
                  }}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  ref={pemateriRef}
                />
              </>
            )}
          />
          <button
            type="button"
            onClick={uploadFotoPemateriClickHandler}
            className={`flex flex-col justify-center aspect-square mt-2 mb-6 w-1/5 min-w-[144px] border border-gray-400 rounded-md bg-transparent ${
              !id ? "px-2" : ""
            }`}
            disabled={id && !isEditing}
          >
            {(id &&
              kelasBisnisDetail.imageMentor === null &&
              pemateriImage == null) ||
            (!id && !pemateriImage) ? (
              <>
                <img
                  src={icon.iconUpload}
                  alt="upload"
                  className="h-1/6 max-h-5 aspect-w-1 aspect-h-1 border-solid self-end"
                />
                <p className="h-2/3 w-full self-center flex items-center justify-center pb-4">
                  upload a picture
                </p>
              </>
            ) : (
              <img src={pemateriImage} alt="banner" className="object-cover" />
            )}
          </button>
          {errors.linkFotoPemateri && (
            <p className="mt-[4px] text-red-500 text-[12px] md:text-[14px] font-small leading-[10px]">{`${errors.linkFotoPemateri.message}`}</p>
          )}
        </div>
        <div className="my-4">
          <p className="font-bold">Deskripsi Pemateri</p>
          <textarea
            name="deskripsiPemateri"
            {...register("deskripsiPemateri")}
            className="resize-none my-2 w-1/2 min-w-[256px] h-24 px-2 py-2 bg-transparent border border-gray-400 rounded-md"
            disabled={id && !isEditing}
          />
          {errors.deskripsiPemateri && (
            <p className="mt-[4px] text-red-500 text-[12px] md:text-[14px] font-small leading-[10px]">{`${errors.deskripsiPemateri.message}`}</p>
          )}
        </div>
        <p className="font-bold my-4">List Materi</p>
        {materisForm.length === 0 && tambahMateriHandler()}
        <div className="my-4">
          <p className="font-bold">Judul Materi</p>
          {materisForm.map((materi, index) => (
            <div key={index}>
              <div className="flex items-center my-2 w-1/2 min-w-[256px] h-8 border border-gray-400 rounded-md">
                <span className="mx-4">{index + 1}.</span>
                <input
                  type="text"
                  name={`materis[${index}].materi`}
                  {...register(`materis[${index}].materi`)}
                  onChange={(e) => handleMateriChange(e, index, "materi")}
                  className="bg-transparent w-full mr-2 focus:outline-none"
                  disabled={id && !isEditing}
                />
                <button
                  type="button"
                  onClick={() => hapusMateriHandler(index)}
                  className="mx-4 focus:outline-none"
                  disabled={id && !isEditing}
                >
                  <img
                    src={icon.iconDelete}
                    alt="delete"
                    className="w-6 aspect-square"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={tambahMateriHandler}
          type="button"
          className="flex items-center my-2 w-1/2 min-w-[256px] h-8 border border-gray-400 rounded-md px-4"
          disabled={id && !isEditing}
        >
          + <span className="mx-2">Tambah Materi</span>
        </button>
        <div className="my-4">
          <p className="font-bold">Link Video Materi</p>
          {materisForm.map((materi, index) => (
            <div key={index}>
              <div className="flex items-center my-2 w-1/2 min-w-[256px] h-8 border border-gray-400 rounded-md">
                <span className="mx-4">{index + 1}.</span>
                <input
                  type="text"
                  name={`materis[${index}].link`}
                  {...register(`materis[${index}].link`)}
                  onChange={(e) => handleMateriChange(e, index, "link")}
                  className="bg-transparent w-full mr-2 focus:outline-none"
                  disabled={id && !isEditing}
                />
              </div>
              {errors.materis &&
                errors.materis[index] &&
                errors.materis[index].link && (
                  <p className="mt-[4px] text-red-500 text-[12px] md:text-[14px] font-small leading-[10px]">
                    {errors.materis[index].link.message}
                  </p>
                )}
            </div>
          ))}
        </div>
        <div className="my-4">
          <p className="font-bold">Deskripsi Materi</p>
          {materisForm.map((materi, index) => (
            <div
              key={index}
              className="flex items-start my-2 w-1/2 min-w-[256px] border border-gray-400 rounded-md"
            >
              <span className="mx-4 my-2">{index + 1}.</span>
              <textarea
                name={`materis[${index}].deskripsi`}
                {...register(`materis[${index}].deskripsi`)}
                onChange={(e) => handleMateriChange(e, index, "deskripsi")}
                className="resize-none mr-2 w-full h-24 pr-2 py-2 bg-transparent rounded-md focus:outline-none"
                disabled={id && !isEditing}
              />
            </div>
            
          ))}
          {errors.materis &&
          errors.materis.map((error, idx) => (
            error.deskripsi && (
              <p
                key={idx}
                className="mt-[4px] text-red-500 text-[12px] md:text-[14px] font-small leading-[10px]"
              >
                {error.deskripsi.message}
              </p>
            )
          ))}
        </div>
        <div className="my-4">
          <p className="font-bold">Judul Tugas</p>
          <input
            type="text"
            name="judul_tugas"
            {...register("judul_tugas")}
            className="my-2 w-1/3 min-w-[256px] h-8 px-2 bg-transparent border border-gray-400 rounded-md"
            disabled={id && !isEditing}
          />
          {errors.judul_tugas && (
            <p className="mt-[4px] text-red-500 text-[12px] md:text-[14px] font-small leading-[10px]">{`${errors.judul_tugas.message}`}</p>
          )}
        </div>
        <div className="my-4">
          <p className="font-bold">Deskripsi tugas</p>
          <textarea
            name="deskripsi_tugas"
            {...register("deskripsi_tugas")}
            className="resize-none my-2 w-1/2 min-w-[256px] h-24 px-2 py-2 bg-transparent border border-gray-400 rounded-md"
            disabled={id && !isEditing}
          />
          {errors.deskripsi_tugas && (
            <p className="mt-[4px] text-red-500 text-[12px] md:text-[14px] font-small leading-[10px]">{`${errors.deskripsi_tugas.message}`}</p>
          )}
        </div>
        <div
          className={`my-4 w-1/2 min-w-[256px] justify-center flex mb-[80px] ${
            id ? "hidden" : "block"
          }`}
        >
          <button
              type="submit"
              disabled={isSubmitting}
              className="p-[10px] w-[123px] flex justify-center border border-black rounded-[10px] gap-2 text-[18px] font-medium leading-[28px] shrink-0 hover:bg-black hover:text-white"
            >
              {isSubmitting ? <Spinner color="black" /> : null}
              {isSubmitting ? "Loading..." : "Submit"}
            </button>
        </div>
      </form>
    </div>
  );
}

export default KelasBisnisFormSection;
