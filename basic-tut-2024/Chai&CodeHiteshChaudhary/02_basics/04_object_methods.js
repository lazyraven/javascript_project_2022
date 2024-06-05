// const tinderUser = new Object()
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "nisha",
      lastname: "choudhary",
    },
  },
};

console.log(regularUser.fullname?.userfullname.firstname); //(?.) it'll represent we have fullname field aur not that itll further go
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 }

// Important
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = { ...obj1, ...obj2 }; // spread operator
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "h@gmail.com",
  },
];

users[1].email;
// console.log(tinderUser);

// Important
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// Important
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));// Important
// console.log(tinderUser.hasOwnProperty('isLogged'));// Important

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "nisha",
};

// course.courseInstructor

// destructuring
const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "nisha",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// https://randomuser.me/
[{}, {}, {}];
