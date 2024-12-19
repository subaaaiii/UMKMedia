import { partnerLogo } from "../../../../constants";
import AdminHeader from "../../../global-component/admin-header/AdminHeader";
import PartnerCard from "./PartnerCard";

const dummyEl = [
  {
    id: 1,
    name: "Modalku",
    link: "www.modalku.co.id",
    image: partnerLogo.modalku,
  },
  {
    id: 2,
    name: "Datapinter",
    link: "www.datapinter.co.id",
    image: partnerLogo.Datapinter,
  },
  {
    id: 3, // Mengubah id yang duplikat menjadi unik
    name: "Kalodata",
    link: "www.kalodata.co.id",
    image: partnerLogo.Kalodata,
  },
];

function PartnerSection() {
  return (
    <div className="w-4/6 2xl:w-4/5 flex flex-col grow-0 px-28 py-8">
      <AdminHeader title="List Partner" showSearchBar />
      <div className="grid grid-cols-4 gap-x-4 gap-y-6">
        {dummyEl.map((partner) => (
          <PartnerCard key={partner.id} el={partner} />
        ))}
      </div>
    </div>
  );
}

export default PartnerSection;
