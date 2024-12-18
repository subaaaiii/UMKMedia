import RecentSubmission from "../../components/admin-kelas-bisnis/main-section/recent-submission/recentSubmission";
import AdminSidebar from "../../components/global-component/admin-sidebar/AdminSidebar";
import { useParams } from "react-router-dom";

function RecentSubmissionPage() {
    const { id } = useParams();
    return (
        <div className="md:flex">
            <AdminSidebar />
            <RecentSubmission />
        </div>
    );
}

export default RecentSubmissionPage;
