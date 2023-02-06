/* 
৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

এইবার ভালো করে খেয়াল করো। 

প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 

সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 

তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 



এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 

উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 
*/

function paperRequirements(page1, page2, page3) {
  const fristPaper = 100;
  const secondPaper = 200;
  const thirePaper = 300;
  const book1 = fristPaper * page1;
  const book2 = secondPaper * page2;
  const book3 = thirePaper * page3;
  const total = book1 + book2 + book3;

//   console.log(book1, book2, book3);
//   console.log(page1, page2, page3);
  return  total;
}
const copyByBook1 = 10;
const copyByBook2 = 20;
const copyByBook3 = 30;
const result = paperRequirements(copyByBook1, copyByBook2, copyByBook3);
console.log(result);
