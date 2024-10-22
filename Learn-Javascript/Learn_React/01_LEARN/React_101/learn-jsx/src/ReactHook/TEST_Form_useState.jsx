import { useState } from "react";

const TEST_Form_useState = () => {
  // Create a Objects
  let [formObj, setFormObj] = useState({
    fName: "",
    lName: "",
    city: "",
    gender: "",
  });

  const inputChange = (property, value) => {
    setFormObj((prevObj) => ({
      ...prevObj,
      [property]: value,
    }));
  };

  const fromSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formObj));
    console.log(formObj);
  };

  return (
    <div>
      <div className="container">
        <h1>Test From</h1>
        <form onSubmit={fromSubmit}>
          <input
            onChange={(e) => {
              inputChange("fName", e.target.value);
            }}
            value={formObj.fName}
            type="text"
            placeholder="First Name"
          />{" "}
          <br />
          <input
            onChange={(e) => {
              inputChange("lName", e.target.value);
            }}
            value={formObj.lName}
            type="text"
            placeholder="Last Name"
          />{" "}
          <br />
          <select
            onChange={(e) => {
              inputChange("city", e.target.value);
            }}
            value={formObj.city}
            name=""
            id=""
          >
            <option value="">Choose City</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chandpur">Chandpur</option>
            <option value="Narayanganj">Narayanganj</option>
          </select>
          <br />
          <div>
            <input
              onChange={(e) => {
                inputChange("gender", "Male");
              }}
              checked={formObj.gender === "Male"}
              type="radio"
              name="Male"
              id=""
            />{" "}
            Male
            <input
              onChange={(e) => {
                inputChange("gender", "female");
              }}
              checked={formObj.gender === "Female"}
              type="radio"
              name="Female"
              id=""
            />{" "}
            Female
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TEST_Form_useState;
