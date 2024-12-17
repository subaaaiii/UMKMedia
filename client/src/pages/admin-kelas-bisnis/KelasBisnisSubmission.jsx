import AdminSidebar from "../../components/global-component/admin-sidebar/AdminSidebar";
import KelasBisnisSubmission from "../../components/admin-kelas-bisnis/main-section/kelas-bisnis-handleSubmission/KelasBisnisSubmission";
import { useParams } from "react-router-dom";

function AdminKelasBisnis() {
    const { id } = useParams();
    return (
        <div className="md:flex">
            <AdminSidebar />
            <KelasBisnisSubmission id={id} />
        </div>
    );
}

export default AdminKelasBisnis;
