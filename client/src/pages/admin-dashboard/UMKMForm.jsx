import AdminSidebar from "../../components/global-component/admin-sidebar/AdminSidebar";
import UMKMFormSection from "../../components/admin-dashboard/main-section/umkm/UMKMFormSection";

function UMKMForm() {
  return (
    <div className="flex">
      <AdminSidebar />
      <UMKMFormSection />
    </div>
  );
}

export default UMKMForm;
