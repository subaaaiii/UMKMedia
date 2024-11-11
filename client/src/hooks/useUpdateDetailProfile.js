export const useUpdateDetailProfile = () => {
  const [data, setData] = useState([]);
  const [isLOading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  Swal.fire({
    title: "Apakah anda yakin?",
    text: "Data anda akan diubah secara permanent!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#0F1011",
    cancelButtonColor: "#d33",
    cancelButtonText: "Batal!",
    confirmButtonText: "Ya!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const formData = new FormData();
      formData.append("file", data.IMAGE);
      formData.append("nama_depan", data.NAMA_DEPAN);
      formData.append("nama_belakang", data.NAMA_BELAKANG);
      formData.append("username", data.USERNAME);
      formData.append("email", data.EMAIL);
      formData.append("biodata", data.BIODATA);
      console.log({ data });
      const token = JSON.parse(localStorage.getItem("auth"));
      try {
        const response = await api.put(
          `${process.env.REACT_APP_API_BASE_URL}/user/update`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: token,
            },
          }
        );
        getUserData();
        console.log(response);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Data anda berhasil di ubah",
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
  });
};
