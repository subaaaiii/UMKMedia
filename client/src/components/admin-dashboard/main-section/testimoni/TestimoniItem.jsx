import { Link } from "react-router-dom";

function TestimoniItem({ el, index }) {
  return (
    <Link
      to="/admin/dashboard/testimoni/create"
      key={index}
      className="flex justify-start bg-whiteSmoke500 shadow-xl p-4"
    >
      <div className="w-1/5 border border-black">
        <img
          src={el.image}
          loading="lazy"
          alt="main"
          className={`object-contain aspect-square ${
            el.id === 0 ? "w-1/2" : "w-full"
          }`}
        />
      </div>
      <div className="w-4/5 px-6 flex flex-col items-start ">
        <h1 className="w-full line-clamp-1 text-[18px] font-bold mt-4 mb-2">
          {el.name}
        </h1>
        <p className="w-full text-sm line-clamp-6">{el.description}</p>
      </div>
    </Link>
  );
}

export default TestimoniItem;
