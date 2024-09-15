"use Client";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: { productId: string; reviewId: string };
};

const ReviewDetails = ({ params }: Props) => {
  function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
  }
  console.log(params);

  const random = getRandomInt(2);
  if (random == 1) {
    throw new Error("Error loading review");
  }
  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      Review {params.reviewId} for product {params.productId}
    </div>
  );
};

export default ReviewDetails;
