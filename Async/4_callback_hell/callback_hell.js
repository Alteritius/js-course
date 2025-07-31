// CALLBACK HELL

// function lesson(lessonNumber, callback) {
//   console.log(`I am learning lesson ${lessonNumber}`);
//   setTimeout(() => {
//     callback();
//   }, 2000);
// }

// lesson(1, () => {
//   lesson(2, () => {
//     lesson(3, () => {
//       lesson(4, () => {
//         lesson(5, () => {
//           lesson(6, () => {
//             lesson(7, () => {
//               lesson(8, () => {
//                 lesson(9, () => {
//                   lesson(10, () => {
//                     console.log("I have learnt all the lessons");
//                   });
//                 });
//               });
//             });
//           });
//         });
//       });
//     });
//   });
// });

// Callback hell z promise'ami

function lesson2(lessonNumber) {
  return new Promise((resolve, reject) => {
    console.log(`I am learning lesson ${lessonNumber}`);
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

lesson2(1)
  .then(() => lesson2(2))
  .then(() => lesson2(3))
  .then(() => lesson2(4))
  .then(() => lesson2(5))
  .then(() => lesson2(6))
  .then(() => lesson2(7))
  .then(() => lesson2(8))
  .then(() => lesson2(9))
  .then(() => lesson2(10))
  .then(() => {
    console.log("I have learnt all the lessons");
    lesson2(10);
  });
