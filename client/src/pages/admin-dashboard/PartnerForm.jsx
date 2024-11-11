import AdminSidebar from "../../components/global-component/admin-sidebar/AdminSidebar";
import PartnerFormSection from "../../components/admin-dashboard/main-section/partner/PartnerFormSection";

function PartnerForm() {
  return (
    <div className="flex">
      <AdminSidebar />
      <PartnerFormSection />
    </div>
  );
}

export default PartnerForm;
