import React, { useEffect } from "react";
import SidebarDetailprofile from "../../components/global-component/sidebar-detail-profile/SidebarDetailProfile";

function UbahProfile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" flex flex-col w-full   justify-center items-center ">
      <SidebarDetailprofile />
    </div>
  );
}

export default UbahProfile;
