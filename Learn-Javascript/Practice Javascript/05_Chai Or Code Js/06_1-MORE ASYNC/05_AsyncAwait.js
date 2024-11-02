async function abcData() {
  let Apis = await fetch("https://randomuser.me/api/");
  let ans = await Apis.json();
  console.log(ans);
}

abcData();
