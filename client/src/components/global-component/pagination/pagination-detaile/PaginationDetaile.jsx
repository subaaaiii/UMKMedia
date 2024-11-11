import React from "react";
import ReactPaginate from "react-paginate";

function PaginationDetaile({
  handlePageClick,
  pageCount,
  marginBot,
  currentPage,
  dataFound,
  currentItems,
}) {
  return (
    <div
      className={`w-full  flex flex-col md:flex-row gap-[16px] justify-between items-center ${marginBot}`}
    >
      <div>
        <p className="text-[16px] font-light leading-[24px]">
          Menampilkan {currentItems.length || 0} dari {dataFound.length || 0}{" "}
          kelas tersedia
        </p>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        forcePage={currentPage}
        containerClassName={`flex justify-center  items-center `}
        previousLinkClassName="px-[14px] py-[6px]  h-[20px] w-[20px] flex justify-center items-center"
        nextLinkClassName="px-[14px] py-[6px] h-[20px] w-[20px] flex justify-center items-center"
        pageLinkClassName="w-[32px] h-[32px] px-[8px] py-[6px] flex justify-center items-center text-[14px] font-medium leading-[20px]"
        activeLinkClassName="w-[32px] h-[32px] px-[8px] py-[6px] bg-black500 flex justify-center items-center text-[14px] text-whiteSmoke500 rounded-[4px] font-medium leading-[20px]"
      />
    </div>
  );
}

export default PaginationDetaile;
