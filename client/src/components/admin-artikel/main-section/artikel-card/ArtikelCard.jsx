import { icon, newsPic } from "../../../../constants";
import { Link } from "react-router-dom";

function ArtikelCard({ el, isCreateArtikel }) {
  return (
    <Link
      to={
        isCreateArtikel
          ? "/admin/artikel/create"
          : `/admin/artikel/edit/${el.id}`
      }
      key={isCreateArtikel ? 0 : el.id}
      className="w-[358px] md:w-[232px] h-[436px] aspect-5/2 md:aspect-9/16 flex md:flex-col overflow-hidden rounded-[10px] bg-whiteSmoke500 shadow-customSm relative"
    >
      <img
        src={isCreateArtikel ? icon.iconAdd : `${el.images_link}`}
        alt="news"
        className={`${
          isCreateArtikel
            ? "object-co mt-8 mx-auto h-1/3"
            : "object-cover h-2/3"
        }`}
      />
      <div className="h-3/6 absolute bottom-0 w-full bg-neutral-600 text-white p-3">
        <p className="text-xs font-extralight">
          {isCreateArtikel
            ? "Tanggal"
            : new Date(el.tanggal).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
        </p>
        <p className="font-bold my-1 line-clamp-2 min-h-[48px]">
          {isCreateArtikel ? "Tambahkan Artikel Baru" : el.judul}
        </p>
        <p className="text-xs font-thin line-clamp-5">
          {isCreateArtikel ? "Deskripsi" : el.deskripsi}
        </p>
      </div>
    </Link>
  );
}

export default ArtikelCard;
