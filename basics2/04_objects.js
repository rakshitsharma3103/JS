// const tinderUser = new Object()     // Singleton object          /*  These both lines have same output   */
const tinderUser = {}                  // Non Singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)   // Object.assign(target, source), so we can use {} also for better understanding otherwise it is not compulsory. If we do not give {} then value of obj2 and obj4 store in target obj1

const obj3 = {...obj1, ...obj2}   // mostly we used spread operator to combine these object, we also use it in combining array.
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Destructuring in Objects

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// Sometime when we need to call it multiple times so to make syntax look good we used below line to access object's key.
const {courseInstructor: instructor} = course 

// console.log(courseInstructor);
console.log(instructor);

// {                        // JSON Format
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
