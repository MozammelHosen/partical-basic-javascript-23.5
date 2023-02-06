// 1. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো।

// String Type Variables
const name = "Mozammel";
const name2 = "Hosen";
const fullName = `${name} is ${name2}`;
console.log(fullName);

//  ২. তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে।

let num1 = 234;
const num2 = 235;
num1 = 456;
const result = num1 + num2;
console.log(result);

// ৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো।

// Number Type Variables

const num3 = 3443;
const num4 = 3563;
const result1 = num3 + num4;
console.log(result1);

const num5 = 3441;
const num6 = 2563;
const result2 = num5 - num6;
console.log(result2);

const num7 = 3441;
const num8 = 2563;
const result3 = num5 * num6;
console.log(result3);

const num9 = 100;
const num10 = 63;
const result4 = num5 / num6;
console.log(result4.toFixed(2));

const num11 = 101;
const num12 = 10;
const result5 = num11 % num12;
console.log(result5);

//  ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো।

const num13 = 1200;
const num14 = 600;

// 	greater than
if (num13 > num14) {
  console.log(`Largesr Number ${num13}`);
} else {
  console.log(`Simply Number ${num14}`);
}
// greater than or equal to
if (num13 >= 1200) {
  console.log(`Largesr Number ${num13}`);
} else {
  console.log("Number ${num13} is greater than or equal to");
}
// 	less than
if (num13 < num14) {
  console.log(`Simply Number ${num14}`);
} else {
  console.log(`Largesr Number ${num13}`);
}

// less than or equal to
if (num13 <= 1200) {
  console.log(`Largesr Number ${num13}`);
} else {
  console.log("Not Valid Number");
}

//  Not equal
if (5 != 5) {
  console.log("Number is  equal");
} else {
  console.log("Number is not equal");
}

//  equal to

if (5 === 5) {
  console.log("Number is equal");
} else {
  console.log("Number is not equal");
}

// not equal value or not equal type
if (5 !== 5) {
  console.log("Number is  equal");
} else {
  console.log("Number is not equal");
}

//  ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো।

const cha = 50;
const biskit = 30;
let myBuget = 50;

//  and
if (cha > myBuget && biskit > myBuget) {
  console.log("mama akta cha bisket deo");
} else {
  console.log("mama cha khabo na . Balance nai");
}

//  or
if (cha > myBuget || biskit > myBuget) {
  console.log("mama akta cha bisket deo and biskit deo");
} else {
  console.log("mama bisket deo");
}

//  ৭. তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো।

// let i = 7;
// while (i <= 19) {
//   console.log("Hello world", i);
//   i++;
// }

let i = 7;
while (i <= 19) {
  console.log("Hello world", i);
  i += 2;
}

//  ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।

const numbers = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
numbers.push(48);
numbers.unshift(2400);
numbers[3] = "Hello World";
const numberLength = numbers.length;
console.log(numbers);
console.log(numberLength);

//  ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো।
const numbers1 = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
for (let i = 0; i < numbers1.length; i++) {
  const number = numbers1[i];
  console.log(number);
}

for (const numbers of numbers1) {
  console.log(numbers);
}

//  ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৩৫ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো

const numbers2 = [30, 31, 32, 33, 34, 35, 36, 37, 38];
for (let i = 0; i < numbers2.length; i++) {
  const element = numbers2[i];
  if (element >= 35) {
    console.log(element);
  }
}

//  ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো।

function addFactorial(num1, num2, num3) {
  const result = num1 * num2 * num3;
  // console.log(num1,num2,num3);
  return result;
}
const numb = addFactorial(12, 13, 140);
console.log(numb);

//  ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।

const phones = [
  { name: "Walton", price: 2000 },
  { name: "Redmi", price: 5000 },
  { name: "HTC", price: 6000 },
  { name: "Samsung", price: 8000 },
];
for (let i = 0; i < phones.length; i++) {
  const phone = phones[i];
//   phone.name[2] = "Realme";
  console.log(phone);
}
