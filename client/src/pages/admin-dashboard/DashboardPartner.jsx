import AdminSidebar from "../../components/global-component/admin-sidebar/AdminSidebar";
import PartnerSection from "../../components/admin-dashboard/main-section/partner/PartnerSection";

function DashboardUMKM() {
  return (
    <div className="flex">
      <AdminSidebar />
      <PartnerSection />
    </div>
  );
}

export default DashboardUMKM;
