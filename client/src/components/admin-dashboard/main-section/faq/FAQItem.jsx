import { Link } from "react-router-dom";

function FAQItem({ el, index }) {
  return (
    <Link
      to="/admin/dashboard/faq/create"
      key={index}
      className="flex justify-start bg-whiteSmoke500 shadow-xl"
    >
      <div className="w-full px-6 flex flex-col items-start my-4">
        <h1 className="w-full text-[18px] font-bold mb-2">
          {index}. {el.question}
        </h1>
        <p className="w-full text-sm line-clamp-6 font-light ">{el.answer}</p>
      </div>
    </Link>
  );
}

export default FAQItem;
