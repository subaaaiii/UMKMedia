import KelasBisnisCard from "./kelas-bisnis-card/KelasBisnisCarc";
import AdminHeader from "../../global-component/admin-header/AdminHeader";
import { useState, useEffect } from "react";
import { api } from "../../../api/api";
import { Link } from "react-router-dom";
import { BiTask } from "react-icons/bi";

function KelasBisnisMainSection() {
  const [kelasBisniss, setKelasBisniss] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  function searchChangeHandler(e) {
    setSearchKey(e.target.value);
  }

  useEffect(() => {
    const data = {
      kategori: [],
      level: [],
      harga: [],
    };
    api
      .post(`${process.env.REACT_APP_API_BASE_URL}/kelasBisnis/data`, data)
      .then((res) => {
        setKelasBisniss(res.data.dataKelas);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-full md:w-9/12 2xl:w-4/5 flex flex-col grow-0 px-10 md:px-28 py-8">
      <AdminHeader
        title="List Kelas Bisnis"
        showSearchBar
        searchKey={searchKey}
        searchChangeHandler={searchChangeHandler}
      />
      <div className="flex justify-end mb-8">
      <div className="bg-sky-700 rounded-md flex gap-1 items-center p-2">
                      <Link
                        to={`/admin/kelas-bisnis/recentsubmission`}
                         className="flex justify-center items-center gap-x-2 px-2 py-2 text-white text-md"
                      >
                        Manage Submission
                      </Link>
                      <BiTask className="text-white"/>
                    </div>
                
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-6 justify-items-center">
        <KelasBisnisCard star={0} isTambahKelasBaru />
        {kelasBisniss
          .filter((kelasBisnis) =>
            kelasBisnis.nama.toLowerCase().includes(searchKey.toLowerCase())
          )
          .map((kelasBisnis, index) => (
            <KelasBisnisCard
              key={kelasBisnis.id}
              el={kelasBisnis}
              index={index}
              star={kelasBisnis.kelas_ratings.reduce(
                (average, kelas_rating, index, { length }) => {
                  return average + kelas_rating.nilai / length;
                },
                0
              )}
            />
          ))}
      </div>
    </div>
  );
}

export default KelasBisnisMainSection;
