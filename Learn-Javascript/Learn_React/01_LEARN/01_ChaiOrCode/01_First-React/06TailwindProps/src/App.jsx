import React from "react";
import Card from "./components/Card";
import MoreCard from "./components/MoreCard";

const App = () => {
  let myObj = [
    {
      imgURL:
        "https://images.pexels.com/photos/9069035/pexels-photo-9069035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "DevXShanto",
      designation: "UiUX Designer",
      pera: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti laborum ut est minus nostrum",
      btnText: "Learn More",
    },
    {
      imgURL:
        "https://images.pexels.com/photos/10583179/pexels-photo-10583179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "DevXShanto",
      designation: "UiUX Designer",
      pera: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti laborum ut est minus nostrum",
      btnText: "Learn More",
    },
    {
      imgURL:
        "https://images.pexels.com/photos/28268121/pexels-photo-28268121/free-photo-of-an-old-black-and-white-photo-of-the-ruins.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "DevXShanto",
      designation: "UiUX Designer",
      pera: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti laborum ut est minus nostrum",
      btnText: "Learn More",
    },
  ];

  let moreObj1 = {
    nameIs: "Shanto",
    desIs: "UI UX Designer",
  };

  return (
    <div className="h-lvh">
      <h1 className="bg-emerald-700 w-100 text-center block text-white font-bold p-4 rounded-full">
        React Props With Tailwind
      </h1>
      {/* Card 1 */}
      <div className="flex ">
        {myObj.map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </div>
      {/* Card 2 */}
      <div className="flex w-2/6">
        {/* <MoreCard nameIs="Shanto" desIs="UI UX Designer" /> */}
        <MoreCard data={moreObj1} />
      </div>
    </div>
  );
};

export default App;
