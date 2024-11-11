import AdminSidebar from "../../components/global-component/admin-sidebar/AdminSidebar";
import ArtikelFormSection from "../../components/admin-artikel/main-section/artikel-form/ArtikelFormSection";
import { useParams } from "react-router-dom";

function ArtikelForm() {
  const { id } = useParams();

  return (
    <div className="md:flex">
      <AdminSidebar />
      <ArtikelFormSection id={id} />
    </div>
  );
}

export default ArtikelForm;
