"use client";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
const RemoveBtn = ({ id }) => {
  const router = useRouter();
  const removeTopic = async () => {
    if (confirm("Remove Topic?")) {
      await fetch(`/api/topics?id=${id}`, {
        method: "DELETE",
      });
      router.refresh();
    }
  };
  return (
    <button onClick={removeTopic} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;
