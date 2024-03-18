const HorizontalScrollCards = ({ children }) => {
  return (
    <div className="flex p-0 pb-4 space-x-4 overflow-x-auto md:p-4 md:pb-0">{children}</div>
  );
};

export default HorizontalScrollCards;
