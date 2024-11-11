import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditAdmin = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
    roleId: "",
    access: "",
  });
  const token = localStorage.getItem("token");
  const [akses, setAkses] = useState([]);
  const items = ["kelas-bisnis", "artikel"];
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      await axios
        .get(`${process.env.REACT_APP_API_BASE_URL}/cms/user/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          const data = res.data.data;
          let role = data.roleId;
          const result =
            role === 1
              ? "admin"
              : role === 2
              ? "superadmin"
              : role === 3
              ? "user"
              : "Unknown";

          setInput({
            username: data.username,
            roleId: result,
            access: data.access.split(" "),
          });
          setAkses(data.access.split(" "));
        })
        .catch((err) => console.log(err));
    };

    getUser();
  }, [id, token]);
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    const { value, checked } = e.target;
    if (checked) {
      setAkses([...akses, value]);
    } else {
      setAkses(akses.filter((item) => item !== value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    input.access = akses.join(" ");

    let roleName;
    switch (input.roleId.toLowerCase()) {
      case "admin":
        roleName = 1;
        break;
      case "super admin":
        roleName = 2;
        break;
      case "user":
        roleName = 3;
        break;

      default:
        alert("masukan role admin, super admin, atau user");
        break;
    }
    input.roleId = roleName;
    let { username, password, roleId, access } = input;

    await axios
      .put(
        `${process.env.REACT_APP_API_BASE_URL}/cms/users/${id}`,
        {
          username,
          password,
          roleId,
          access,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => navigate("/admin/list-admin"))
      .catch((err) => alert(err));
  };

  const handleDelete = async (id) => {
    // setUsers(users.filter((item) => item.id !== id));
    await axios
      .delete(`${process.env.REACT_APP_API_BASE_URL}/cms/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        navigate("/admin/list-admin");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-4/6 2xl:w-4/5 flex flex-col grow-0 px-28 py-8">
      <div>
        <h3 className="text-2xl text-neutral-400 mb-2">Super Admin</h3>
        <h2 className="text-3xl ">Hi, Super Admin</h2>

        <form action="" onSubmit={handleSubmit}>
          <div className="flex gap-6 mt-8">
            <button
              type="submit"
              className="py-1 px-3 bg-greenWhatsapp border border-black rounded-md font-semibold"
            >
              Simpan
            </button>
            <button
              type="submit"
              onClick={() => handleDelete(id)}
              className="py-1 px-3  border border-black rounded-md font-semibold"
            >
              Hapus Data
            </button>
          </div>
          <div className="mt-8 mb-4">
            <label htmlFor="" className="font-semibold text-xl">
              Username Admin
            </label>
            <input
              type="text"
              className="w-full py-1 px-3 border border-zinc-400 rounded-md bg-whiteSmoke500 my-2"
              placeholder="example@gmail.com"
              name="username"
              value={input.username}
              onChange={handleChange}
            />
          </div>
          <div className=" mb-4">
            <label htmlFor="" className="font-semibold text-xl">
              Password
            </label>
            <input
              type="password"
              className="w-full py-1 px-3 border border-zinc-400 rounded-md bg-whiteSmoke500 my-2"
              placeholder="********"
              name="password"
              value={input.password}
              onChange={handleChange}
            />
          </div>
          <div className=" mb-4">
            <label htmlFor="" className="font-semibold text-xl">
              Role
            </label>
            <input
              type="text"
              className="w-full py-1 px-3 border border-zinc-400 rounded-md bg-whiteSmoke500 my-2"
              placeholder="Admin or User"
              value={input.roleId}
              name="roleId"
              onChange={handleChange}
            />
          </div>
          <fieldset>
            <legend className="text-xl font-semibold my-2">Akses</legend>

            {items.map((item, id) => (
              <div className="flex gap-2 my-1" key={id}>
                <input
                  type="checkbox"
                  id={item}
                  name="access"
                  value={item}
                  checked={akses.includes(item)}
                  onChange={handleChange}
                />
                <label for={item} className="text-lg">
                  {item}
                </label>
              </div>
            ))}
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default FormEditAdmin;
