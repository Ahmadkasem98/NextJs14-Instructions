// Dynamic Routes
// Navigation Link

import Link from "next/link";

type Props = {};

const Product = (props: Props) => {
  return (
    <div>
      <div>Main Product</div>
      <div>
        <Link href="/product/1">Product 1</Link>
      </div>
      <div>
        <Link href="/product/2">Product 2</Link>
      </div>
      <div>
        <Link href="/product/3">Product 3</Link>
      </div>
      <div>
        <Link href="/">Home Page</Link>
      </div>
      <div>
        <Link href="/about">About Page</Link>
      </div>
    </div>
  );
};

export default Product;
