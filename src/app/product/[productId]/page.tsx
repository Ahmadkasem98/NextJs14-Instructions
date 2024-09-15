// Dynamic Routes

type Props = {
  params: { productId: string };
};

const ProductDetails = ({ params }: Props) => {
  return <div>Details about Product {params.productId}</div>;
};

export default ProductDetails;
