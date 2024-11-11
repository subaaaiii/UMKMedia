import AdminProfileDisplay from "../admin-profile-display/AdminProfileDisplay";
import { icon } from "../../../constants";
import { useEffect, useState } from "react";
import axios from "axios";

function AdminHeader({ title, showSearchBar, searchKey, searchChangeHandler }) {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("token");
      await axios
        .get(`${process.env.REACT_APP_API_BASE_URL}/cms/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setDatas(res.data.data))
        .catch((err) => console.log(err));
    };

    getUser();
  }, []);
  return (
    <>
      <AdminProfileDisplay datas={datas}/>
      <div className="flex flex-col md:flex-row mb-8 md:my-12 justify-between items-center">
        <p className="text-2xl lg:text-4xl font-bold mb-4 md:mb-0">{title}</p>
        {showSearchBar && (
          <div className="w-full max-w-[400px] md:w-2/5 lg:w-1/3 h-full p-2 flex border border-black rounded-lg">
            <img src={icon.searchIcon} alt="search" />
            <input
              type="search"
              className="w-full pl-2 bg-transparent focus:outline-none"
              placeholder="Cari"
              value={searchKey}
              onChange={searchChangeHandler}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default AdminHeader;
