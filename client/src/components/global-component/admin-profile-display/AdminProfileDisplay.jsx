import { reviewPic } from "../../../constants";

function AdminProfileDisplay({ datas }) {
  return (
    <div className="hidden md:flex border border-black items-center rounded-lg p-2 self-end cursor-pointer">
      <img
        src={reviewPic.rectangle103}
        className="w-[36px] h-[36px] "
        alt="profile"
      />
      {datas !== undefined ? (
        <p className="px-2 w-40 text-center font-bold text-xl">
          {datas.username}
        </p>
      ) : (
        <p className="px-2 w-40 text-center font-bold text-xl">Unknown</p>
      )}
    </div>
  );
}

export default AdminProfileDisplay;
