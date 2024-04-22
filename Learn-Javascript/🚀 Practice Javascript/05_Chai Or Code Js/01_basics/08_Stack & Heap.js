// * Stack & Heap

/* 
    *=> Premetive DataType
        |> Number       => Number
        |> String       => String
        |> Bollean      => Bollean
        |> null         => Object
        |> undefiend    => undefiend
        |> bigInt       => bigint
        |> Symbol       => Symbol
    
    *=> Non Premetive / Reference Type
        |> Array        => Object
        |> Function     => function / function Object
        |> object       => object
*/

/* 
    * Stack & Heap Menory
    -> Stack
    |> Stack Use Premetive Types
    |> Stack Send Variable Copy Value

    -> Heap
    |> Heap Use Non-Premetive Types
    |> Heap send Variable Referance / Original of Value

*/

/* 
    -> Stack :- এখানে ভেরিএবল কপি হয়। 
    let nameIs = "Saiful Islam Shanto";
    let fullName = nameIs;
    fullName = "SHanto";

    console.log(nameIs);
    console.log(fullName); 
*/

/* 
    -> Heap :- এখানে অরিজিনাল ডাটা পরিবতন হয়। 
    let user1 = {
    name: "Shanto",
    Id: 1234,
    Email: "helloOne@gmail.com",
    };

    let user2 = user1;

    console.log(user1);
    console.log(user2);

    user2.Id = 4567;
    console.log(user1);
    console.log(user2);
*/


