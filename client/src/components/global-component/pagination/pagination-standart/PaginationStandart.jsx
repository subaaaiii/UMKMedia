import React from "react";
import ReactPaginate from "react-paginate";

function PaginationStandart({
  handlePageClick,
  pageCount,
  marginBot,
  currentPage,
}) {
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        forcePage={currentPage}
        containerClassName={`flex justify-center items-center ${marginBot}`}
        previousLinkClassName="px-[14px] py-[6px]  h-[20px] w-[20px] flex justify-center items-center"
        nextLinkClassName="px-[14px] py-[6px] h-[20px] w-[20px] flex justify-center items-center"
        pageLinkClassName="w-[32px] h-[32px] px-[8px] py-[6px] flex justify-center items-center text-[14px] font-medium leading-[20px]"
        activeLinkClassName="w-[32px] h-[32px] px-[8px] py-[6px] bg-black500 flex justify-center items-center text-[14px] text-whiteSmoke500 rounded-[4px] font-medium leading-[20px]"
      />
    </>
  );
}

export default PaginationStandart;
