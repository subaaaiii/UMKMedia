import { reviewPic, icon } from "../../../constants";
import AdminHeader from "../../global-component/admin-header/AdminHeader";
import ArtikelCard from "./artikel-card/ArtikelCard";
import { useState, useEffect } from "react";
import { api } from "../../../api/api";

function ArtikelMainSection() {
  const [artikels, setArtikels] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    api
      .get(`${process.env.REACT_APP_API_BASE_URL}/artikel/allArtikel`)
      .then((res) => {
        setArtikels(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function searchChangeHandler(e) {
    setSearchKey(e.target.value);
  }

  return (
    <div className="w-full md:w-9/12 2xl:w-4/5 flex flex-col grow-0 px-10 md:px-28 py-8">
      <AdminHeader
        title="List Artikel"
        showSearchBar
        searchKey={searchKey}
        searchChangeHandler={searchChangeHandler}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-6 justify-items-center">
        <ArtikelCard isCreateArtikel />
        {artikels
          .filter((artikel) =>
            artikel.judul.toLowerCase().includes(searchKey.toLowerCase())
          )
          .map((artikel) => (
            <ArtikelCard el={artikel} key={artikel.id} />
          ))}
      </div>
    </div>
  );
}

export default ArtikelMainSection;
