kiloToMiles = (kilo) => {
  return kilo * 0.621371;
};

MilesToKilo = (Miles) => {
  return Miles * 1.609344;
};

let kiloIs = kiloToMiles(2);
console.log(`${kiloIs.toFixed(2)} kilometer`);

let MilesIs = MilesToKilo(2);
console.log(`${MilesIs.toFixed(2)} Miles`);
