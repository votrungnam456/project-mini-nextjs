const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-[100px] m-[10px] border-[1px] border-black border-solid flex justify-center items-center">
      {children}
    </div>
  );
};
export default Card;
