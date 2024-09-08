const Hello = () => {
  let marks = 95;
  let language = ["Javascript", "php", "Python", "C", "C++"];
  return (
    <div>
      <h1>-------------------------------</h1>
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, iusto
        magni? Eius quae nihil quibusdam voluptates, dolorum tenetur adipisci
        minus suscipit ab sed eum possimus.
      </p>
      <div>
        <h1>Hello</h1>
        {(() => {
          if (marks >= 80 && marks <= 100) {
            return <h2>You Got a++</h2>;
          }
        })()}
      </div>
      <div>
        {language.map((item, i) => {
          return (
            <h1 key={i.toString()}>
              {i + 1}, {item}
            </h1>
          );
        })}
      </div>
      <h1>-------------------------------</h1>
    </div>
  );
};

export default Hello;
