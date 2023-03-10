const users = [
  {
    name: 'Bob the Builder',
    age: 45,
    email: 'bob@builder.com',
    isMarried: true,
    isAdmin: false,
  },
  {
    name: 'SpongeBob SquarePants',
    age: 20,
    email: 'spongebob@bikinibottom.com',
    isMarried: false,
    isAdmin: false,
  },
  {
    name: 'Harry Potter',
    age: 18,
    email: 'harry@hogwarts.com',
    isMarried: false,
    isAdmin: true,
  },
  {
    name: 'Winnie the Pooh',
    age: 30,
    email: 'winnie@hundredacrewood.com',
    isMarried: false,
    isAdmin: false,
  },
  {
    name: 'Captain Hook',
    age: 50,
    email: 'captainhook@neverland.com',
    isMarried: true,
    isAdmin: false,
  },
];

// gauti nauja masyva kuriame butu tik name,age,email,
// let usersCopy = [...users];
const smallerObjArr = users.map((uObj) => {
  const uObjCopy = { ...uObj };
  delete uObjCopy.isMarried;
  delete uObjCopy.isAdmin;
  return uObjCopy;
});

console.table(smallerObjArr);
console.table(users);
