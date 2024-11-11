import AdminSidebar from "../../components/global-component/admin-sidebar/AdminSidebar";
import KelasBisnisMainSection from "../../components/admin-kelas-bisnis/main-section/KelasBisnisMainSection";

function AdminKelasBisnis() {
  return (
    <div className="md:flex">
      <AdminSidebar />
      <KelasBisnisMainSection />
    </div>
  );
}

export default AdminKelasBisnis;
