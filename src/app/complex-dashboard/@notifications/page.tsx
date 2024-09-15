// parallel Routes

import Card from "../../../components/card";
import Link from "next/link";
import React from "react";

type Props = {};

const Notifications = (props: Props) => {
  return (
    <Card>
      <div>Notifications Page</div>
      <Link href="/complex-dashboard/archived" className="text-blue-600">
        Archived
      </Link>
    </Card>
  );
};

export default Notifications;
