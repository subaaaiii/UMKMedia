import AdminSidebar from "../../components/global-component/admin-sidebar/AdminSidebar";
import TestimoniFormSection from "../../components/admin-dashboard/main-section/testimoni/TestimoniFormSection";

function TestimoniForm() {
  return (
    <div className="flex">
      <AdminSidebar />
      <TestimoniFormSection />
    </div>
  );
}

export default TestimoniForm;
