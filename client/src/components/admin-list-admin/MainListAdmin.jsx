import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const MainListAdmin = () => {
  const [datas, setDatas] = useState([]);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem("token");
      await axios
        .get(`${process.env.REACT_APP_API_BASE_URL}/cms/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setDatas(res.data.data))
        .catch((err) => console.log(err));
    };
    const getAllUser = async () => {
      const token = localStorage.getItem("token");
      await axios
        .get(`${process.env.REACT_APP_API_BASE_URL}/cms/users`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUsers(res.data.data))
        .catch((err) => console.log(err));
    };
    getAllUser();

    getUser();
  }, []);

  const handleDelete = async (id) => {
    setUsers(users.filter((item) => item.id !== id));
    await axios
      .delete(`${process.env.REACT_APP_API_BASE_URL}/cms/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const handleSearch = ({ target }) => {
    setSearch(target.value);
  };

  // console.log(users);

  const roleName = (roleId) => {
    if (roleId === 1) {
      return "admin";
    } else if (roleId === 2) {
      return "super admin";
    } else if (roleId === 3) {
      return "user";
    } else if (roleId === null) {
      return "Unknown";
    }
  };

  return (
    <div className="w-4/6 2xl:w-4/5 flex flex-col grow-0 px-28 py-8">
      <div>
        <h3 className="text-2xl text-neutral-400 mb-2">{datas.roleName}</h3>
        <h2 className="text-3xl ">Hi, {datas.username}</h2>
        <div className="flex justify-between my-12">
          <p className="text-4xl font-semibold">Data Admin</p>
          <input
            type="text"
            className="w-[340px] border-2 border-neutral-400 bg-whiteSmoke500 rounded-lg py-1 px-2"
            placeholder="Cari"
            value={search}
            onChange={handleSearch}
          />
        </div>

        <button
          type="button"
          className="py-1 px-2 bg-greenWhatsapp border border-black rounded-lg"
        >
          <Link to={"/admin/list-admin/form-admin"}> + Tambah Data </Link>
        </button>

        <div className="overflow-x-auto mt-12">
          <table className="table table-xs ">
            <thead>
              <tr className="text-xl font-semibold text-black border-b border-black">
                <th></th>
                <th>Username Admin</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>

            {users &&
              users
                .filter((user) => user.roleId === 1 || user.roleId === 3)
                .filter((user) =>
                  user.username.toLowerCase().includes(search.toLowerCase())
                )
                .map((user, id) => {
                  return (
                    <tbody className="text-lg" key={user.id}>
                      <tr>
                        <th>{id + 1}</th>
                        <td>{user.username}</td>
                        <td>{roleName(user.roleId)}</td>
                        <td className="flex flex-row gap-2">
                          <button className="py-1 px-3 bg-orange-500 text-white">
                            <Link
                              to={`/admin/list-admin/form-edit-admin/${user.id}`}
                            >
                              Edit
                            </Link>
                          </button>
                          <button
                            type="submit"
                            onClick={() => handleDelete(user.id)}
                            className="py-1 px-2 bg-red-500 text-white"
                          >
                            Hapus
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainListAdmin;
