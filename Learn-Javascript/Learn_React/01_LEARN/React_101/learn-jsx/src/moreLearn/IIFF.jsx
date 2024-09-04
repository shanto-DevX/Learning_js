const IIFF = () => {
  let marks = 90;
  return (
    <div>
      {(() => {
        if (marks > 80 && marks < 100) {
          return <h1>You get A+</h1>;
        }
      })()}
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default IIFF;
