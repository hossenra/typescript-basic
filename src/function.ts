// normal function
function add(num1: number, num2: number): number {
  return num1 + num2;
}

// add(2, 3);

// spread operator

const myFriends = ["Rahim", "Karim", "Selim", "Tetu"];
const newFriends = ["Rasni", "Hasina", "Joya"];

myFriends.push(...newFriends);
console.log(myFriends);

// rest parameter

const greetFriends = (...friends: string[]): void =>
  friends.forEach((friend) => console.log(`hi ${friend}`));

greetFriends("Karim", "Selim", "Rahim");

const addArrow = (num1: number, num2: number): number => num1 + num2;

const arr = [1, 4, 5];
const newArray = arr.map((elem: number) => elem * elem);

const person: {
  name: string;
  balance: number;
  addBalance(money: number): void;
} = {
  name: "Razibul",
  balance: 20,
  addBalance(money: number) {
    console.log(`My new Balance is ${this.balance + money}`);
  },
};
// array and object destructuring

const [bestfriend] = myFriends;
const myBestFriend = {
  fullName: "Sazzad",
  age: 32,
};

const { fullName } = myBestFriend;
