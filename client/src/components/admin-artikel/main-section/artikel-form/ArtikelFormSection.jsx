import { icon } from "../../../../constants";
import { useState, useRef, useEffect, useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { artikelSchema } from "./lib/artikelSchema";
import Swal from "sweetalert2";
import { Spinner } from "@chakra-ui/react";
import { api } from "../../../../api/api";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../../../global-component/admin-header/AdminHeader";

function ArtikelFormSection({ id }) {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [banner, setBanner] = useState(null);
  const [existingArtikel, setExistingArtikel] = useState(null);
  const [kategoriOptions, setKategoriOptions] = useState([]);
  const bannerRef = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm({
    resolver: zodResolver(artikelSchema),
  });

  useEffect(() => {
    api
      .get(`${process.env.REACT_APP_API_BASE_URL}/artikel/navbar`)
      .then((res) => {
        setKategoriOptions(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (id) {
      api
        .get(`${process.env.REACT_APP_API_BASE_URL}/artikel/${id}`)
        .then((res) => {
          const data = res.data.data;
          const tanggal = new Date(data.tanggal);
          const formattedDate = `${tanggal.getFullYear()}-${(
            tanggal.getMonth() + 1
          )
            .toString()
            .padStart(2, "0")}-${tanggal
            .getDate()
            .toString()
            .padStart(2, "0")}`;
          setExistingArtikel({
            judul: data.judul,
            penerbit: data.penerbit,
            tanggal: formattedDate,
            image_link: data.images_link,
            deskripsi: data.deskripsi,
            id_kategori: data.Kategori.id.toString(),
            nama_kategori: data.Kategori.nama_kategori,
            link: data.link,
          });
          setBanner(`${data.images_link}`);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  useEffect(() => {
    if (existingArtikel) {
      reset({
        judul: existingArtikel.judul,
        penerbit: existingArtikel.penerbit,
        tanggal: existingArtikel.tanggal,
        deskripsi: existingArtikel.deskripsi,
        kategori: existingArtikel.id_kategori,
        link: existingArtikel.link,
      });
    }
  }, [existingArtikel, reset]);

  function uploadBannerClickHandler() {
    bannerRef.current.click();
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageDataUrl = event.target.result;
        setBanner(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  function editClickHandler() {
    setIsEditing((prevIsEditing) => !prevIsEditing);
  }

  async function submitHandler(data, isCreating) {
    const formData = new FormData();
    formData.append("judul", data.judul);
    formData.append("deskripsi", data.deskripsi);
    formData.append("penerbit", data.penerbit);
    formData.append("tanggal", data.tanggal);
    formData.append("file", data.banner);
    formData.append("link", data.link);
    formData.append("id_kategori", data.kategori);

    try {
      let response;
      if (isCreating) {
        response = await api.post(
          `${process.env.REACT_APP_API_BASE_URL}/artikel/create`,
          formData
        );
      } else {
        response = await api.put(
          `${process.env.REACT_APP_API_BASE_URL}/artikel/${id}`,
          formData
        );
      }
      Swal.fire({
        position: "center",
        icon: "success",
        title: isCreating
          ? "Artikel Baru Telah Ditambahkan"
          : "Perubahan Telah Disimpan",
        showConfirmButton: false,
        timer: 1500,
      });
      if (isCreating) {
        navigate("/admin/artikel");
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.response.data.error || "Terjadi kesalahan",
        icon: "error",
        confirmButtonColor: "#0F1011",
      });
      console.log(error);
    } finally {
      if (!isCreating) {
        editClickHandler();
      }
    }
  }

  function deleteClickHandler() {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Anda tidak akan dapat mengembalikan data ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
    }).then(async (res) => {
      if (res.isConfirmed) {
        try {
          await api.delete(
            `${process.env.REACT_APP_API_BASE_URL}/artikel/${id}`
          );
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Kelas Telah Dihapus",
            text: "Silahkan Cek Dashboard",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/admin/artikel");
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: error.response.data.error || "Terjadi kersalahan",
            icon: "error",
            confirmButtonColor: "#0F1011",
          });
        }
      }
    });
  }

  return (
    <div className="w-full lg:w-4/6 2xl:w-4/5 flex flex-col grow-0 px-4 lg:px-28 py-8">
      <AdminHeader title={id ? "" : "Tambah Artikel"} />
      <form
        encType="multipart/form-data"
        onSubmit={
          id
            ? handleSubmit((data) => {
                submitHandler(data, false);
              })
            : handleSubmit((data) => {
                submitHandler(data, true);
              })
        }
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
              <p className="text-xs sm:text-base font-bold">Edit Artikel</p>
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
              <p className="text-xs sm:text-base font-bold">Hapus Artikel</p>
            </button>
          )}
        </div>
        <div className="my-4">
          <p className="font-bold">Judul Artikel</p>
          <input
            {...register("judul")}
            type="text"
            className="my-2 w-1/2 min-w-[256px] h-8 px-2 bg-transparent border border-gray-400 rounded-md"
            disabled={id && !isEditing}
          />
          {errors.judul && (
            <p className="mt-[4px] text-red-500 text-[12px] md:text-[14px] font-small leading-[10px]">
              {errors.judul.message}
            </p>
          )}
        </div>
        <div className="my-4">
          <p className="font-bold">Penerbit Artikel</p>
          <input
            {...register("penerbit")}
            type="text"
            className="my-2 w-1/4 min-w-[192px] h-8 px-2 bg-transparent border border-gray-400 rounded-md disabled:opacity-100"
            disabled={id && !isEditing}
          />
          {errors.penerbit && (
            <p className="mt-[4px] text-red-500 text-[12px] md:text-[14px] font-small leading-[10px]">
              {errors.penerbit.message}
            </p>
          )}
        </div>
        <div className="my-4">
          <p className="font-bold">Kategori</p>
          <select
            className="my-2 w-1/4 min-w-[192px] h-8 px-2 bg-transparent border border-gray-400 rounded-md disabled:opacity-100"
            name="kategori"
            disabled={id && !isEditing}
            {...register("kategori")}
          >
            {kategoriOptions.map((option) => (
              <option key={option.id} value={option.id.toString()}>
                {option.nama_kategori}
              </option>
            ))}
          </select>
          {errors.kategori && (
            <p className="mt-[4px] text-red-500 text-[12px] md:text-[14px] font-small leading-[10px]">
              {`${errors.kategori.message}`}
            </p>
          )}
        </div>
        <div className="my-4">
          <p className="font-bold">Tanggal</p>
          <input
            {...register("tanggal")}
            type="date"
            className="my-2 w-1/4 min-w-[192px] h-8 px-2 bg-transparent border border-gray-400 rounded-md disabled:opacity-100"
            disabled={id && !isEditing}
          />
          {errors.tanggal && (
            <p className="mt-[4px] text-red-500 text-[12px] md:text-[14px] font-small leading-[10px]">
              {errors.tanggal.message}
            </p>
          )}
        </div>
        <div className="my-4">
          <p className="font-bold">Link</p>
          <input
            {...register("link")}
            type="text"
            className="my-2 w-1/2 min-w-[256px] h-8 px-2 bg-transparent border border-gray-400 rounded-md"
            disabled={id && !isEditing}
          />
          {errors.link && (
            <p className="mt-[4px] text-red-500 text-[12px] md:text-[14px] font-small leading-[10px]">
              {errors.link.message}
            </p>
          )}
        </div>
        <div className="my-4">
          <p className="font-bold">Gambar Banner</p>
          <Controller
            name="banner"
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
            {(!id && !banner) || (id && !banner) ? (
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
              <img src={banner} alt="banner" className="object-cover" />
            )}
          </button>
        </div>
        <div className="my-4">
          <p className="font-bold">Isi Artikel</p>
          <textarea
            {...register("deskripsi")}
            className="resize-none my-2 w-1/2 min-w-[256px] h-24 px-2 py-2 bg-transparent border border-gray-400 rounded-md"
            disabled={id && !isEditing}
          />
          {errors.deskripsi && (
            <p className="mt-[4px] text-red-500 text-[12px] md:text-[14px] font-small leading-[10px]">
              {errors.deskripsi.message}
            </p>
          )}
        </div>
        {!id && (
          <div className="my-4 w-1/2 min-w-[256px] justify-center flex mb-[80px]">
            <button
              type="submit"
              disabled={isSubmitting}
              className="p-[10px] w-[123px] flex justify-center border border-black rounded-[10px] gap-2 text-[18px] font-medium leading-[28px] shrink-0 hover:bg-black hover:text-white"
            >
              {isSubmitting ? <Spinner color="black" /> : null}
              {isSubmitting ? "Loading..." : "Submit"}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default ArtikelFormSection;
