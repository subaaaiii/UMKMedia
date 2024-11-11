import { icon } from "../../../../constants";
import { useState, useRef } from "react";
import AdminHeader from "../../../global-component/admin-header/AdminHeader";

function FAQFormSection() {
  return (
    <div className="w-4/6 2xl:w-4/5 flex flex-col grow-0 px-28 py-8">
      <AdminHeader title="Tambah Partner Bisnis" />
      <form action="">
        <div className="my-4">
          <p className="font-bold">Pertanyaan</p>
          <input
            type="text"
            className="my-2 w-1/2 h-8 px-2 bg-transparent border border-gray-400 rounded-md"
          />
        </div>
        <div className="my-4">
          <p className="font-bold">Jawaban</p>
          <textarea className="resize-none my-2 w-1/2 h-24 px-2 py-2 bg-transparent border border-gray-400 rounded-md" />
        </div>
      </form>
    </div>
  );
}

export default FAQFormSection;
