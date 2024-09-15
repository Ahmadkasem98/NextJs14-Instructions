import Link from "next/link";
import React from "react";

type Props = {};

const F4 = (props: Props) => {
  return (
    <div>
      <div>F4 Page</div>
      <Link href="/about" className="text-emerald-600 underline">
        About
      </Link>
    </div>
  );
};

export default F4;
