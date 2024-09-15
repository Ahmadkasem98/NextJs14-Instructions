// Nested Layout

export default function ProductDetailsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <div>Product Details Features</div>
    </>
  );
}
