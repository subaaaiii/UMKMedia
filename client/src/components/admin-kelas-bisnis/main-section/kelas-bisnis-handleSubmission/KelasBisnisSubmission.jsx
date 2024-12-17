import { useState, useRef, useEffect, useMemo } from "react";
import { api } from "../../../../api/api";

function KelasBisnisSubmission({ id }) {
  const [submissions, setSubmissions] = useState([]);
  // const [kelasBisnisDetail, setKelasBisnisDetail] = useState(defaultValues);

  const getSubmissionData = async (e) => {// Mencegah reload halaman
    try {
      const response = await api.post(
        `${process.env.REACT_APP_API_BASE_URL}/kelasSubmission/submissionById`,
        {
          id_kelas_detail: id, // Menambahkan id_kelas ke body
        }
      );
      setSubmissions(response.data);
      console.log("ini adalah re ", response.data);
    } catch (error) {
      console.error("Error saat menyimpan", error);
    }
  };

  const handleChangeStatus = async (submissionId, currentStatus) => {
    try {
      const newStatus = currentStatus === 1 ? 0 : 1; // Toggle status: 0 => 1, 1 => 0
      const response = await api.put(
        `${process.env.REACT_APP_API_BASE_URL}/kelasSubmission/updateStatus`,
        {
          id: submissionId,
          is_accepted: newStatus
        }
      );

      if (response.data.success) {
        // Update status di state setelah perubahan berhasil
        setSubmissions(prevSubmissions =>
          prevSubmissions.map(submission =>
            submission.id === submissionId
              ? { ...submission, is_accepted: newStatus }
              : submission
          )
        );
        alert("Status berhasil diubah!");
      } else {
        alert("Gagal mengubah status.");
      }
    } catch (error) {
      console.error("Error saat mengubah status", error);
      alert("Gagal mengubah status. Coba lagi.");
    }
  };

  useEffect(() => {
    getSubmissionData();
  }, [])

  return (
    <div className="w-full md:w-9/12 2xl:w-4/5 flex flex-col grow-0 md:px-28 py-8 md:mt-12">
      <div>
        <h1 className="text-2xl font-bold mb-6">Daftar Submission</h1>
      </div>
      <div>
        {submissions.length === 0 ? (
          <p className="text-center text-gray-500">Data tidak ditemukan</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto bg-white border border-gray-300 rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-6 text-left font-semibold text-gray-700">No.</th>
                  <th className="py-3 px-6 text-left font-semibold text-gray-700">ID User</th>
                  <th className="py-3 px-6 text-left font-semibold text-gray-700">Link Tugas</th>
                  <th className="py-3 px-6 text-left font-semibold text-gray-700">Submitted at</th>
                  <th className="py-3 px-6 text-left font-semibold text-gray-700">Status</th>
                  <th className="py-3 px-6 text-left font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((submission, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-6">{index + 1}</td>
                    <td className="py-3 px-6">{submission.id_user}</td>
                    <td className="py-3 px-6">{submission.link}</td>
                    <td className="py-3 px-6">{submission.createdAt}</td>
                    <td className="py-3 px-6">
                      {submission.is_accepted ? (
                        <span className="text-green-500 font-semibold">Diterima</span>
                      ) : (
                        <span className="text-red-500 font-semibold">Belum Diterima</span>
                      )}
                    </td>
                    <td className="py-3 px-6 text-center">
                      {/* Example action button */}
                      <button
                        onClick={() => handleChangeStatus(submission.id, submission.is_accepted)}
                        className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
                      >
                        Ubah Status
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );

}

export default KelasBisnisSubmission;
