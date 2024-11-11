import { clientPic } from "../../../../constants";
import AdminHeader from "../../../global-component/admin-header/AdminHeader";
import TestimoniItem from "./TestimoniItem";

const dummyEl = {
  id: "1",
  name: "Yesmalika",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices lectus quis tortor vehicula dapibus. Ut pulvinar eu arcu id mollis. Pellentesque sagittis mattis quam id condimentum. Suspendisse potenti. Suspendisse non augue euismod, volutpat lacus at, dignissim lectus. Pellentesque sagittis, dui ut gravida imperdiet, velit elit malesuada nulla, et porttitor mi quam nec dui. Nunc tempor quam non lectus euismod condimentum. Maecenas laoreet bibendum massa ut malesuada. Nunc imperdiet urna ante, nec viverra dui tempus in. Nulla ut tincidunt risus, eu dapibus eros. Proin sed pretium lacus. Praesent nunc nisi, porttitor vitae odio eu, tempus luctus justo. Nullam ac lobortis.",
  image: clientPic.yesaMalikaOri,
};

function TestimoniSection() {
  return (
    <div className="w-4/6 2xl:w-4/5 flex flex-col grow-0 px-28 py-8">
      <AdminHeader title="List Testimoni" showSearchBar />
      <div className="flex flex-col gap-4">
        <TestimoniItem el={dummyEl} />
        <TestimoniItem el={dummyEl} />
        <TestimoniItem el={dummyEl} />
      </div>
    </div>
  );
}

export default TestimoniSection;
