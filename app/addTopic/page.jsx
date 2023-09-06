import React from "react";

const page = () => {
  return (
    <form className="flex flex-col gap-3 ">
      <input
        className="border px-8 py-2 border-slate-500"
        type="text"
        placeholder="Topic Title"
      />
      <input
        className="border px-8 py-2 border-slate-500"
        type="text"
        placeholder="Topic Description"
      />
      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Add Topic
      </button>
    </form>
  );
};

export default page;
