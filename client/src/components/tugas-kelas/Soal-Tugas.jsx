import React, { useEffect, useState } from "react";

function TugasForm() {

  return (
    <div className="m-24 bg-white p-8 rounded-lg shadow-lg w-2/3 flex justify-center">
      <div className="w-full">
        <div className="mb-4">
          <h1 className="text-xl font-bold">Judul Tugas</h1>
          <p>Identifikasi Model Bisnis dan Audiens</p>
        </div>
        <div className="mb-4">
          <h1 className="text-xl font-bold">Deskripsi Tugas</h1>
          <p>Buat Dokumen (1 Halaman) yang menjelaskan:</p>
          <ol className="list-[lower-alpha] ml-6">
            <li>Jenis marketplace yang ingin Anda bangun.</li>
            <li>Siapa target audiens Anda (pembeli dan penjual).</li>
            <li>Solusi apa yang marketplace Anda tawarkan untuk mereka.</li>
          </ol>
        </div>
        <div className="mb-4">
          <h1 className="text-xl font-bold">Link File Tugas Anda</h1>
        </div>
        <form action="">
          <div className="mb-4">
            <input
              type="text"
              name="linkTugas"
              placeholder="docs.google.com/document/example"
              className="w-1/3 px-4 py-2 border rounded-md"
            />
          </div>
          {/* Flexbox Centering */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/4 bg-black text-white py-2 rounded-md hover:bg-gray-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>

  );
}

export default TugasForm;
