import React from "react";
import AdminSidebar from "../../components/global-component/admin-sidebar/AdminSidebar";
import MainListAdmin from "../../components/admin-list-admin/MainListAdmin";

const ListAdmin = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <MainListAdmin />
    </div>
  );
};

export default ListAdmin;
