/* function claculateMoney(ticketSale) {
  if (0 <= ticketSale) {
    let ticketPrice = 120;
    let careTaker = 500;
    let totalStaf = 8;
    let totalStafLanch = totalStaf * 50;

    let totalTicketSale = ticketSale * ticketPrice;

    let dailyCost = careTaker + totalStafLanch;
    let afterAllCOst = totalTicketSale - dailyCost;
    console.log(`After all cost : ${afterAllCOst}`);
  } else {
    console.log(`Invalid Number`);
  }
} */

function claculateMoney(ticketSale) {
  if (0 <= ticketSale) {
    let ticketPrice = 120 * ticketSale;
    let careTaker = 500;
    let totalStaf = 8 * 50;

    let dailyCost = totalStaf + careTaker;

    let afterAllCOst = ticketPrice - dailyCost;
    console.log(`After all cost : ${afterAllCOst}`);
  } else {
    console.log(`Invalid Number`);
  }
}

claculateMoney(10);
