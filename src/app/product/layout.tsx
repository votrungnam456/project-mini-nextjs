export default function layoutProductList({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      {/* {modal} */}
      {children}
    </div>
  );
}
