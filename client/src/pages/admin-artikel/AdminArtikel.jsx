import AdminSidebar from "../../components/global-component/admin-sidebar/AdminSidebar";
import ArtikelMainSection from "../../components/admin-artikel/main-section/ArtikelMainSection";

function AdminArtikel() {
  return (
    <div className="md:flex">
      <AdminSidebar />
      <ArtikelMainSection />
    </div>
  );
}

export default AdminArtikel;
