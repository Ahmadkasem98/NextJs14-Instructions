import React from "react";

type Props = {};

const PhotoLayout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <div>
      {modal}
      {children}
    </div>
  );
};

export default PhotoLayout;
