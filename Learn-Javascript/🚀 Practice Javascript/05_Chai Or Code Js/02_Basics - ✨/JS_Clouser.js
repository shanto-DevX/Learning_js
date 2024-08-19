function getCapital(capital) {
  return function (interest) {
    return (capital * interest) / 100;
  };
}

const BusinessStart = getCapital(100000);
console.log(BusinessStart);
const BusinessProfit = BusinessStart(25);
console.log(BusinessProfit);
