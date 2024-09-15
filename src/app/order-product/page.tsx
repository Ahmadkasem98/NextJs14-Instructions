"use client";

import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

function page({}: Props) {
  const router = useRouter();
  const goToLocaion = () => {
    console.log("test location");
    router.push("/about");
  };
  return (
    <div>
      <h3>product order</h3>
      <button
        onClick={() => goToLocaion()}
        className="bg-blue-300 text-white p-3 m-4 rounded-md"
      >
        go to
      </button>
    </div>
  );
}

export default page;
