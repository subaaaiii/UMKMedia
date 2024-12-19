import { clientPic } from "../../../../constants";
import AdminHeader from "../../../global-component/admin-header/AdminHeader";
import UMKMCard from "./UMKMCard";

// Data dummy untuk testing
const dummyData = [
  {
    id: "1",
    name: "Afkar Jeans",
    description:
      "Menyediakan berbagai pilihan celana jeans berkualitas tinggi dengan harga terjangkau.",
    image: clientPic.client01,
  },
  {
    id: "2",
    name: "Asinin Aja",
    description:
      "Produsen keripik asin gurih dengan bahan alami dan cita rasa autentik.",
    image: clientPic.client02,
  },
  {
    id: "3",
    name: "Barokah Herbal Center",
    description:
      "Toko herbal yang menawarkan produk kesehatan berbahan alami dan terpercaya.",
    image: clientPic.client03,
  },
];

function UMKMSection() {
  return (
    <div className="w-full 2xl:w-4/5 flex flex-col px-8 sm:px-12 lg:px-28 py-8">
      {/* Header */}
      <AdminHeader title="List UMKM" showSearchBar />

      {/* UMKM Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {dummyData.map((el) => (
          <UMKMCard key={el.id} el={el} />
        ))}
      </div>
    </div>
  );
}

export default UMKMSection;
