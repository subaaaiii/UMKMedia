import React from "react";
import AdminSidebar from "../../components/global-component/admin-sidebar/AdminSidebar";
import MainFormAdmin from "../../components/admin-list-admin/MainFormAdmin";

const FormAdmin = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <MainFormAdmin />
    </div>
  );
};

export default FormAdmin;
