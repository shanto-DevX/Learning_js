/*
 * কোন একটি ফাংশন ব্যবহার করে,ওই function এর যে নাম  ধরে যেই অব্জেক্ট তেরি করবো সেইটা হচ্ছে Constractor এর মাধ্যমে অব্জেক্ট তেরি করা
 */

function person() {
  this._name = "Shanto";
  this.age = 24;
  this.city = "narayanganj";
  this.isLogin = true;

  this.getName = () => {
    return `my Name is ${this._name} & my City is ${this.city}`;
  };
}

// let personInfo = new person();
let personInfo = new person();
console.log(personInfo);
console.log(personInfo._name);
console.log(personInfo.getName());
