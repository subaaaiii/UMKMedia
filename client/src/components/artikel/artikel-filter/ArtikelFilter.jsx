import React from "react";

function ArtikelFilter() {
  const tmpDataKategori = [
    {
      title: "Berita",
    },
    {
      title: "Event",
    },
    {
      title: "Wawasan",
    },
    {
      title: "Tips",
    },
    {
      title: "Komunitas",
    },
  ];

  return (
    <div className="mt-[160px] max-w-[1080px] w-full flex flex-col justify-center items-center">
      <nav className="flex w-full justify-start items-center ">
        <ul className="flex gap-[16px]">
          <li className="flex justify-center items-center">
            <button className="px-[48px] py-[16px] rounded-[10px] border-[1px] border-black500 ">
              <p className="text-[16px] font-medium leading-[24px]">Semua</p>
            </button>
          </li>
          {tmpDataKategori?.map((el, index) => (
            <li key={index} className="flex justify-center items-center">
              <button className="px-[48px] py-[16px] rounded-[10px] border-[1px] border-black500 ">
                <p className="text-[16px] font-medium leading-[24px]">
                  {el.title}
                </p>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default ArtikelFilter;
