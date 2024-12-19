import { clientPic } from "../../../../constants";
import AdminHeader from "../../../global-component/admin-header/AdminHeader";
import TestimoniItem from "./TestimoniItem";

const dummyEl = [
  {
    id: "1",
    name: "Asinin Aja",
    description:
      "Produk berkualitas dengan pelayanan terbaik. Sangat memuaskan!",
    image: clientPic.client02,
  },
  {
    id: "2",
    name: "Afkar Jeans",
    description:
      "Jeans yang nyaman dan stylish, cocok untuk segala suasana.",
    image: clientPic.client01,
  },
  {
    id: "3",
    name: "Barokah Herbal Center",
    description:
      "Produk herbal yang sangat membantu, benar-benar bermanfaat untuk kesehatan.",
    image: clientPic.client03,
  },
];

function TestimoniSection() {
  return (
    <div className="w-4/6 2xl:w-4/5 flex flex-col grow-0 px-28 py-8">
      <AdminHeader title="List Testimoni" showSearchBar />
      <div className="flex flex-col gap-4">
        {dummyEl.map((item) => (
          <TestimoniItem key={item.id} el={item} />
        ))}
      </div>
    </div>
  );
}

export default TestimoniSection;
