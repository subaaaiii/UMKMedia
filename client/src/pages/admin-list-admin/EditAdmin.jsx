import React from "react";
import AdminSidebar from "../../components/global-component/admin-sidebar/AdminSidebar";
import FormEditAdmin from "../../components/admin-list-admin/FormEditAdmin";

const EditAdmin = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <FormEditAdmin />
    </div>
  );
};

export default EditAdmin;
