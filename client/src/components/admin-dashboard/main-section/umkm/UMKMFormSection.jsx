import { icon } from "../../../../constants";
import { useState, useRef } from "react";
import AdminHeader from "../../../global-component/admin-header/AdminHeader";

function UMKMFormSection() {
  const logoRef = useRef();

  function uploadLogoClickHandler() {
    logoRef.current.click();
  }

  return (
    <div className="w-4/6 2xl:w-4/5 flex flex-col grow-0 px-28 py-8">
      <AdminHeader title="Tambah UMKM" />
      <form action="">
        <div className="my-4">
          <p className="font-bold">Nama UMKM</p>
          <input
            type="text"
            className="my-2 w-1/2 h-8 px-2 bg-transparent border border-gray-400 rounded-md"
          />
        </div>
        <div className="my-4">
          <p className="font-bold">Logo</p>
          <input
            type="file"
            accept="image/*"
            ref={logoRef}
            className="hidden"
          />
          <button
            type="button"
            onClick={uploadLogoClickHandler}
            className="flex flex-col justify-center aspect-video mt-2 mb-6 px-2 w-1/3 border border-gray-400 rounded-md bg-transparent"
          >
            <img
              src={icon.iconUpload}
              alt="upload"
              className="h-1/6 max-h-6 aspect-w-1 aspect-h-1 border-solid self-end"
            />
            <p className="h-2/3 w-full self-center flex items-center justify-center pb-4">
              upload a picture
            </p>
          </button>
        </div>
        <div className="my-4">
          <p className="font-bold">Deskripsi</p>
          <textarea className="resize-none my-2 w-1/2 h-24 px-2 py-2 bg-transparent border border-gray-400 rounded-md" />
        </div>
      </form>
    </div>
  );
}

export default UMKMFormSection;
