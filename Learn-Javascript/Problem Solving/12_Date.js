/* const date = new Date();
date.getTime();
date.getFullYear();
date.getDay();
date.getTimezoneOffset();
console.log(date); */

/* const formatDate = (date = new Date()) => {
  const days = date.getDate() + 1;
  const month = date.getMonth();
  const years = date.getFullYear();

  return `${days}/${month}/${years}`;
};

console.log(formatDate()); */

let formateDate = (date = new Date()) => {
  const days = date.getDate() + 1;
  const month = date.getMonth();
  const year = date.getFullYear();

  //   return `${days}/${month}/${year}`;
  return `${days}-${month}-${year}`;
};

console.log(formateDate());


