import { icon, kelasBisnisPic } from "../../../../constants";
import { Link } from "react-router-dom";

function UMKMCard({ el, index }) {
  return (
    <Link
      to="/admin/dashboard/umkm/create"
      key={index}
      className="w-[358px] md:w-[232px] h-[360px] flex flex-col items-center justify-start overflow-hidden rounded-[10px] bg-whiteSmoke500 shadow-customSm"
    >
      <div className="w-full h-[176px] ">
        <img
          src={el.image}
          loading="lazy"
          alt="main"
          className={`object-contain ${
            el.id === 0 ? "w-1/2 h-1/2" : "w-full h-full"
          }`}
        />
      </div>
      <div className="w-full px-4 flex flex-col items-start">
        <h1 className="line-clamp-1 text-[18px] font-bold mt-4 mb-2">
          {el.name}
        </h1>
        <p className="text-sm line-clamp-5">{el.description}</p>
      </div>
    </Link>
  );
}

export default UMKMCard;
