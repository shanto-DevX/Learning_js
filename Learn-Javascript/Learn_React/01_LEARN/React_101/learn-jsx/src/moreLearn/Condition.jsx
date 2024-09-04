const Condition = () => {
  let age = 18;
  return <div>{age <= 18 ? "You Can Voted" : "You Can't Vote"}</div>;
};

export default Condition;
