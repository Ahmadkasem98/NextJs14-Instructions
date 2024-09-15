import Card from "../../../../components/card";
import Link from "next/link";
import React from "react";

type Props = {};

const ArchivedNotifications = (props: Props) => {
  return (
    <Card>
      <Link href="/complex-dashboard" className="text-blue-600">
        Default
      </Link>
    </Card>
  );
};

export default ArchivedNotifications;
