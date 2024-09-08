const Loop = () => {
  const city = ["Dhaka", "New York", "Dilhi"];
  return (
    <div>
      <h1>Loop In Js</h1>
      <ul>
        {city.map((item, i) => {
          return <li key={i.toString()}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Loop;
