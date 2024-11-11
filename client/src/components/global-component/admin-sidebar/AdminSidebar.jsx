import { useEffect, useState } from "react";
import { icon, logo } from "../../../constants";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const menus = [
  {
    icon: icon.iconHome,
    label: "Dashboard",
    route: "/admin/dashboard",
    access: "dashboard",
    roleName: "",
  },
  {
    icon: icon.iconCourse,
    label: "Kelas Bisnis",
    route: "/admin/kelas-bisnis",
    access: "kelas-bisnis",
    roleName: "",
  },
  {
    icon: icon.iconArticle,
    label: "Artikel",
    route: "/admin/artikel",
    access: "artikel",
    roleName: "",
  },
  {
    icon: icon.person,
    label: "List Admin",
    route: "/admin/list-admin",
    access: "list-admin",
    roleName: "admin_super",
  },
];

function AdminSidebar() {
  const navigate = useNavigate();
  const [datas, setDatas] = useState([]);
  const [role, setRole] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const getProfile = async () => {
      const token = localStorage.getItem("token");
      await axios
        .get(`${process.env.REACT_APP_API_BASE_URL}/cms/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          const arr = res.data.data.access;
          setDatas(arr);
          setRole(res.data.data.roleName);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    };
    getProfile();
  }, []);

  // console.log(location.pathname.split("/")[2]);

  useEffect(() => {
    if (!loading) {
      if (datas.includes(path) || ["dashboard", "list-admin"].includes(path)) {
        console.log("silahkan");
      } else {
        navigate("/restrict-page");
      }
    }
  }, [loading, datas, path, navigate]);

  function iconClickHandler() {
    navigate("/admin");
  }

  function activeNavHandler({ isActive }) {
    return {
      fontWeight: isActive ? "700" : "300",
      border: isActive ? "1px solid black" : "",
      boxShadow: isActive
        ? "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
        : "",
      borderRadius: isActive ? "0.5rem" : "",
    };
  }

  return (
    <aside className="w-full md:w-3/12 2xl:w-1/5 md:h-screen md:sticky md:top-0 flex flex-col items-center bg-whiteSmoke500 border-b-2 border-black md:border md:border-gray-300 shadow-md rounded-3xl md:rounded-none">
      <img
        onClick={iconClickHandler}
        className="w-20 md:w-[100px] aspect-square mt-6 md:my-8 shrink-0 cursor-pointer"
        src={logo.growlab}
        alt="growlab"
      />
      <div className="w-full px-4 flex md:block justify-around">
        {menus
          .filter((item) => role.includes(item.roleName))
          .filter((item) => role !== item.access)
          .filter(
            (item) =>
              datas.includes(item.access) ||
              ["dashboard", "list-admin"].includes(item.access)
          )
          .map((menu) => (
            <NavLink
              to={menu.route}
              key={menu.label}
              className="flex flex-row justify-center items-center m-4 py-2 px-4 md:px-0"
              style={activeNavHandler}
            >
              <img
                className="w-[24px] md:w-4 lg:w-[24px]"
                src={menu.icon}
                alt={menu.label}
              />
              <p className="hidden md:block ml-2 basis-1/2 text-sm lg:text-base">
                {menu.label}
              </p>
              <img
                className="hidden md:block -rotate-90"
                src={icon.chevronSmallDownLight}
                alt="arrow"
              />
            </NavLink>
          ))}
        <NavLink
          to="/cms/login"
          onClick={() => localStorage.removeItem("token")}
          key={"Logout"}
          className="flex flex-row justify-center items-center m-4 py-2 px-4 md:px-0"
          style={activeNavHandler}
        >
          <img
            className="w-[24px] md:w-4 lg:w-[24px]"
            src={icon.logout}
            alt={"Logout"}
          />
          <p className="hidden md:block ml-2 basis-1/2 text-sm lg:text-base">
            {"Logout"}
          </p>
          <p></p>
          <img
            className="hidden md:block -rotate-90"
            src={icon.chevronSmallDownLight}
            alt="arrow"
          />
        </NavLink>
      </div>
    </aside>
  );
}

export default AdminSidebar;
