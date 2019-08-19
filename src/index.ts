import { User } from "./models/User";

const user = new User({name: "Oliver", age: 17});

console.log(user.get("name"));
console.log(user.get("age"));
