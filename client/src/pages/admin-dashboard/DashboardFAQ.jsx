import AdminSidebar from "../../components/global-component/admin-sidebar/AdminSidebar";
import FAQSection from "../../components/admin-dashboard/main-section/faq/FAQSection";

function DashboardUMKM() {
  return (
    <div className="flex">
      <AdminSidebar />
      <FAQSection />
    </div>
  );
}

export default DashboardUMKM;
