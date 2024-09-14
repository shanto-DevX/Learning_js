import HeroImages from "./HeroImages";

const Hero = (props) => {
  return (
    <div>
      <h1>Hello Hero Section</h1>
      <HeroImages />

      {/* <h1>{props.title}</h1> */}
      {/* <h2>{props.des}</h2> */}

      {/* <h3>Name : {props.item["name"]}</h3>
      <h3>Learning : {props.item["learning"]}</h3>
      <h3>City : {props.item["city"]}</h3>

      <ul>
        <li>Learn: {props.helloInfos["learn"]}</li>
        <li>parent: {props.helloInfos["parent"]}</li>
        <li>Child: {props.helloInfos["child"]}</li>
      </ul> */}

      {/* * Props using function */}
      <button onClick={props.btnClick}>Click On This BTN</button>
      <br />
      <br />
      <button onClick={props.btnSum}>Click For SUm</button>
      {/* <button onClick={props.forLoops}>Click For SUm</button> */}
      <ul>
        <li>{props.forLoops}</li>
      </ul>

      {/* Responding To Events */}
    </div>
  );
};

export default Hero;
