import AdminSidebar from "../../components/global-component/admin-sidebar/AdminSidebar";
import DashboardMainSection from "../../components/admin-dashboard/main-section/DashboardMainSection";

function AdminDashboard() {
  return (
    <div className="flex">
      <AdminSidebar />
      <DashboardMainSection />
    </div>
  );
}

export default AdminDashboard;
