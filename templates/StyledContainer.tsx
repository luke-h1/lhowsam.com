const StyledContainer = ({ children }) => {
  return (
    <div className="flex flex-col justify-center bg-white dark:bg-black px-8">
      {children}
    </div>
  );
};
export default StyledContainer;
