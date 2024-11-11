import { clientPic } from "../../../../constants";
import AdminHeader from "../../../global-component/admin-header/AdminHeader";
import UMKMCard from "./UMKMCard";

const dummyEl = {
  id: "1",
  name: "Yesmalika",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget lacus finibus, lacinia lorem vel, dignissim urna. Aenean diam lectus, sodales ac eleifend id, viverra.",
  image: clientPic.yesaMalika1,
};

function UMKMSection() {
  return (
    <div className="w-4/6 2xl:w-4/5 flex flex-col grow-0 px-28 py-8">
      <AdminHeader title="List UMKM" showSearchBar />
      <div className="grid grid-cols-4 gap-x-4 gap-y-6">
        <UMKMCard el={dummyEl} />
        <UMKMCard el={dummyEl} />
        <UMKMCard el={dummyEl} />
        <UMKMCard el={dummyEl} />
        <UMKMCard el={dummyEl} />
        <UMKMCard el={dummyEl} />
        <UMKMCard el={dummyEl} />
        <UMKMCard el={dummyEl} />
        <UMKMCard el={dummyEl} />
      </div>
    </div>
  );
}

export default UMKMSection;
