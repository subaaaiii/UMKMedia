import AdminSidebar from "../../components/global-component/admin-sidebar/AdminSidebar";
import UMKMSection from "../../components/admin-dashboard/main-section/umkm/UMKMSection";

function DashboardUMKM() {
  return (
    <div className="flex">
      <AdminSidebar />
      <UMKMSection />
    </div>
  );
}

export default DashboardUMKM;
