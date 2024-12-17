import React, { useEffect, useState } from "react";

function TugasForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    alert("Pesan Anda telah dikirim!");
  };

  return (
    <div className="flex justify-center items-center m-16 bg-gray-100 w-1/2">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Pengumpulan Tugas</h2>
        {/* First Name */}
        <div className="mb-4">
          <label className="block text-gray-700">First name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        {/* Last Name */}
        <div className="mb-4">
          <label className="block text-gray-700">Last name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-gray-700">Phone number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        {/* Message */}
        <div className="mb-4">
          <label className="block text-gray-700">Link File Tugas Anda</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="example.com"
            rows="4"
            className="w-full px-4 py-2 border rounded-md"
          ></textarea>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default TugasForm;
