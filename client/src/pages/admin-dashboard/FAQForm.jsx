import AdminSidebar from "../../components/global-component/admin-sidebar/AdminSidebar";
import FAQFormSection from "../../components/admin-dashboard/main-section/faq/FAQFormSection";

function FAQForm() {
  return (
    <div className="flex">
      <AdminSidebar />
      <FAQFormSection />
    </div>
  );
}

export default FAQForm;
