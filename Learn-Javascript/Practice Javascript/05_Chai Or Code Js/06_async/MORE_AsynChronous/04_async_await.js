/*
        |> async await
        *
 */

/* async function friendlyFucntion() {
  return `hello`;
}

console.log(friendlyFucntion()); */

const meeting = true;
const promise_meeting = new Promise((resolve, reject) => {
  if (!meeting) {
    const mettingCreate = {
      name: "Hello",
      date: "8-8-2024",
      time: "9:00",
    };
    resolve(mettingCreate);
  } else {
    reject(new Error(`Metting Already Scheduled`));
  }
});

const addToCalender = (mettingCreate) => {
  const calender = `${mettingCreate.name} has bean schduled on ${mettingCreate.date} at ${mettingCreate.time}`;

  return Promise.resolve(calender);
};

async function myMetting() {
  try {
    const mettingCreate = await promise_meeting;
    const calender = await addToCalender(mettingCreate);
    console.log(calender);
  } catch {
    console.log(`Error`);
  }
}

myMetting();
