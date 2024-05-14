/*
 * https://x.com/EmyLascan?t=cezyrQSpQMFAz9D3H6jXrw&s=09
 * এইখান থেকে সুধু ইউজার নেমটা বের করা হবে।
 */

/* let xUrl = "https://x.com/EmyLascan?t=cezyrQSpQMFAz9D3H6jXrw&s=09";
let findUserName = xUrl.split("?");
console.log(findUserName);

let userName = findUserName[0].split("/");
console.log(`User Name iS : ${userName[3]}`); */

// let xUrl = "https://x.com/EmyLascan?t=cezyrQSpQMFAz9D3H6jXrw&s=09";
let xUrl = "https://twitter.com/JohnnyKyorov";
let findUserName = xUrl.split("/");
// let userName = findUserName[0].split("/");
let userName = findUserName[3];

console.log(findUserName);
// console.log(userName[3]);
console.log(userName);
