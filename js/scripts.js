// Business Logic

function roger(input) {
  const one = [1];
  const two = [2];
  const three = [3];
  const inputArray = [];
  for (let i = 0; i <= input; i += 1) {
    inputArray.push(i);
  }
  const inputStringArray = inputArray.map(String);
  console.log(inputStringArray);
  const boopArray = [];

  inputArray.forEach(function (element) {
    if (element.toString().indexOf("3") > -1) {
      boopArray.push("Won't you be my neighbor?");
    } else if (element.toString().indexOf("2") > -1) {
      boopArray.push("boop");
    } else if (element.toString().indexOf("1") > -1) {
      boopArray.push("beep");
    } else {
      boopArray.push(element);
    }
    console.log(boopArray);
  })
}

// forEach loop option
// inputArray.forEach(function (element) {
//   if (one.includes(element)) {
//     boopArray.push("beep");
//   } else if (two.includes(element)) {
//     boopArray.push("boop");
//   } else if (three.includes(element)) {
//     boopArray.push("Won't you be my neighbor?");
//   } else {
//     boopArray.push(element);
//   }
//   console.log(boopArray);
// })


// for loop option
//   for (let i = 0; i < inputStringArray.length; i += 1) {
//     if (one.includes(i)) {
//       boopArray.push("boop");
//     } else {
//       boopArray.push(i);
//     }
//   }
//   console.log(boopArray);
// }
