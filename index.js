let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 10 elements

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let radius = 7;
const pi = 3.14;

let area = radius * radius * pi;
console.log("Area of circle:", area);

let name = "Aaron";
let age = 20;

console.log(typeof name);
console.log(typeof age);

console.log(`My name is ${name} and I am ${age} years old.`);
console.log(`I was born in ${2025 - age}`);

console.log("1" == 1);
console.log(1 == true);
console.log("false" == false);
console.log("false" == true);

if ("false") console.log("Hello false!");

console.log("1" === 1);
console.log(1 === true);
console.log("true" === true);

for (let i = 0; i < 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

function happyPrint(string) {
  console.log("😀: " + string);
}

function sadPrint(string) {
  console.log("😢: " + string);
}

function add(a, b, callback) {
  let ans = a + b;
  callback(ans);
}

add(5, 10, happyPrint);
add(11, 12, sadPrint);

function printDate() {
  console.log(new Date().toLocaleTimeString());
}

setInterval(printDate, 1000);

let arr2 = [-5, 16, 33, 42, 103, 344];
console.log(arr2.includes(-5));

arr2.push(11);
console.log(arr2);

let lastItem = arr2.pop();
console.log(lastItem, arr2);

arr2.unshift(22);
console.log(arr2);

let firstItem = arr2.shift();
console.log(firstItem, arr2);

let reversed = arr2.reverse();
console.log(reversed);
console.log(arr2.join("-"));

let arr3 = [12, 33, 4, 5, -4, 8, 19, 25];

function double(num) {
  return num * 2;
}

let doubledArr = arr3.map(double);
console.log(doubledArr);

function isOdd(num) {
  return num % 2 !== 0;
}

let odds = arr3.filter(isOdd);
console.log(odds);

function has5Factor(ele) {
  return ele % 5 === 0;
}

let hasFiveFactor = arr3.some(has5Factor);
console.log(hasFiveFactor);

function intCompare(a, b) {
  return a - b;
}

let ascending = arr3.sort(intCompare);
console.log(ascending);

function createPerson(name, height, weight) {
  return { name: name, height: height, weight: weight };
}

function calcBMI(weight, height) {
  return weight / (height * height);
}

function avgBMI(people) {
  let sum = 0;
  for (let person of people) {
    sum += calcBMI(person.weight, person.height);
  }
  return sum / people.length;
}

let people = [
  createPerson("Sally", 2.5, 60),
  createPerson("Ben", 3, 81),
  createPerson("Shelly", 1.7, 50)
];

console.log(avgBMI(people));




let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript: [
    {
      course: 'INFO 1603',
      grades: [89, 34, 67]
    },
    {
      course: 'INFO 1601',
      grades: [89, 34, 67]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript: [
    {
      course: 'INFO 1601',
      grades: [100, 89, 79]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript: [
    {
      course: 'INFO 1600',
      grades: [89, 34, 67]
    }
  ]
};

const students = [bob, sally, paul];


function getAverageGrade(student, course) {
  const courseInfo = student.transcript.find(item => item.course === course);
  
  if (!courseInfo) {
    return -1; 
  }
  
  const grades = courseInfo.grades;
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  return total / grades.length;
}


function getAssignmentMark(student, course, num) {
  const courseInfo = student.transcript.find(item => item.course === course);
  
  if (!courseInfo || num < 1 || num > courseInfo.grades.length) {
    return -1; 
  }
  
  return courseInfo.grades[num - 1];
}


function averageAssessment(students, courseName, assignment) {
  let totalGrade = 0;
  let count = 0;
  
  for (const student of students) {
    const courseInfo = student.transcript.find(item => item.course === courseName);
    
    if (courseInfo && assignment >= 1 && assignment <= courseInfo.grades.length) {
      totalGrade += courseInfo.grades[assignment - 1];
      count++;
    }
  }
  
  if (count === 0) {
    return -1; 
  }
  
  return totalGrade / count;
}

console.log(getAverageGrade(bob, 'INFO 1603')); 
console.log(getAssignmentMark(bob, 'INFO 1603', 2)); 
console.log(averageAssessment(students, 'INFO 1603', 2)); 
