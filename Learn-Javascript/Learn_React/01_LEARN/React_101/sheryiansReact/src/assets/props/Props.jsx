import React from "react";
import PropsChild from "./PropsChild";
import CardChild from "./CardChild";
import P_Cards from "./P_Cards";

const Props = () => {
  // const user = "Shanto";

  const users = [
    {
      img: "https://picsum.photos/id/237/200/300",
      userName: "Shantosss",
      city: "Dhaka",
      profession: "Software Engenier",
    },
    {
      img: "https://picsum.photos/id/237/200/300",
      userName: "Shantosss",
      city: "Dhaka",
      profession: "Software Developer",
    },
    {
      img: "https://random-image-pepebigotes.vercel.app/api/random-image",
      userName: "Shantoss",
      city: "Dhaka",
      profession: "UI UX Designer",
    },
    {
      img: "https://random-image-pepebigotes.vercel.app/api/random-image",
      userName: "Shantos",
      city: "Dhaka",
      profession: "Web Developer",
    },
    {
      img: "https://random-image-pepebigotes.vercel.app/api/random-image",
      userName: "Shantos",
      city: "Dhaka",
      profession: "Web Developer",
    },
  ];

  /* user.forEach(function () {
    console.log("Hello");
  }); */
  /*   user.forEach(function (e) {
    console.log(e);
  }); */
  /*   user.map(function () {
    return "hey";
  }); */

  return (
    <div className="bg-blue-300 p-10 h-lvh ">
      {/* <PropsChild user={user} /> */}
      {/* <PropsChild user=" Saiful" /> */}
      {/* <PropsChild user=" islam" /> */}
      {/* <PropsChild user=" Shanto" /> */}

      {/* <CardChild user="Shanto" city="Dhana" /> */}
      {/* <div className="flex gap-6">
        {user.map(function (e, idx) {
          // return <h1>{e.userName}</h1>;
          return (
            <CardChild
              key={idx}
              userName={e.userName}
              city={e.city}
              prof={e.profession}
              photo={e.img}
            />
          );
        })}
      </div> */}
      {/* -------------------------------------- */}
      <div className="flex gap-5">
        {users.map(function (e) {
          return (
            <P_Cards
              img={e.img}
              name={e.userName}
              city={e.city}
              prof={e.profession}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Props;
