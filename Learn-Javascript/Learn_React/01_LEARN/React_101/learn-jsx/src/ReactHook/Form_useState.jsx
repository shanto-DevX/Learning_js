import { useState } from "react";

const Form_useState = () => {
  let [formObj, setFormObj] = useState({
    fName: "",
    lName: "",
    city: "",
    gender: "",
  });
  const InputOnChange = (property, value) => {
    setFormObj((prevObj) => ({
      ...prevObj,
      [property]: value,
    }));
  };

  /* const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    console.log(formObj); // Log the form data or handle it as needed
  }; */

  const fromSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formObj));
  };
  // -> 13:06
  return (
    <div className="container">
      <form onSubmit={fromSubmit}>
        {/* onSubmit={handleSubmit} */}
        <input
          onChange={(e) => {
            InputOnChange("fName", e.target.value);
          }}
          value={formObj.fName}
          type="text"
          placeholder="First Name"
        />{" "}
        <br />
        <input
          onChange={(e) => {
            InputOnChange("lName", e.target.value);
          }}
          value={formObj.lName}
          type="text"
          placeholder="Last Name"
        />{" "}
        <br />
        <select
          onChange={(e) => {
            InputOnChange("city", e.target.value);
          }}
          name=""
          id=""
          value={formObj.city}
        >
          <option value="">Choose City</option>
          <option value="Dhaka">Dhaka</option>
          <option value="NarayanGanj">NarayanGanj</option>
        </select>
        <br />
        <input
          onChange={(e) => {
            InputOnChange("gender", "Male");
          }}
          checked={formObj.gender === "Male"}
          type="radio"
          name="gender"
        />
        Male
        <input
          onChange={(e) => {
            InputOnChange("gender", "Female");
          }}
          checked={formObj.gender === "Female"}
          type="radio"
          name="gender"
        />
        Female
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form_useState;
