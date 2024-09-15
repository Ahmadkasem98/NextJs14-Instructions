import Link from "next/link";
import React from "react";

type Props = {};

const F1 = (props: Props) => {
  return (
    <div>
      <div>F1 Page</div>
      <Link href="f1/f2" className="text-emerald-600 underline">
        F2
      </Link>
    </div>
  );
};

export default F1;
