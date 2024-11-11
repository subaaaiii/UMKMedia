import AdminSidebar from "../../components/global-component/admin-sidebar/AdminSidebar";
import TestimoniSection from "../../components/admin-dashboard/main-section/testimoni/TestimoniSection";

function DashboardUMKM() {
  return (
    <div className="flex">
      <AdminSidebar />
      <TestimoniSection />
    </div>
  );
}

export default DashboardUMKM;
