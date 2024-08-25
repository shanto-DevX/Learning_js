/* 
    * |} Static Keyword
    |> ক্লাস থেকে কোন প্রোপারটি এক্সেস করতে চাইলে Static Keyword ব্যবহার করা যাবে, কোন Object তেরি না করে
    |> Shared Peroperties -> ক্লাসের মধ্যে কোন function বিভিন্ন্য যাগায় ব্যবহার করতে চাইলে  Static Keyword ব্যবহার করে সেইটা করা যায়
    |> Utility Fucntion -> from Validition 
    |> Memory Efficiency
*/

class person {
  static firstName = "saiful islam ";
  static lastName = "shanto";

  static getInfo() {
    return `my Name is ${this.firstName} ${this.lastName}`;
  }
}

/* let personObj = new person();
console.log(personObj);
console.log(personObj.getInfo()); */

console.log(person.firstName);
console.log(person.lastName);
console.log(person.getInfo());
