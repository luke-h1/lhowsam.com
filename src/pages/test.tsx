const TestPage = () => {
  return (
    <div>
      <button
        onClick={() => {
          throw new Error('hi');
        }}
        type="button"
      >
        click me
      </button>
    </div>
  );
};
export default TestPage;
