//!basic promise
// 1.	צרו אובייקט של promise  שבמידה ו true מחזיר yes  ו false מחזיר sorry
// 2.	הפעילו את ה promise והדפיסו את התוצאות ל console
// 3.	עטפו את ה promise בפונקציה שמחזירה אותו
// 4.	שנו את האובייקט כך שהתנאי מגיע בעת קריאה לפונקציה
// 5.	הפעילו את הפונקציה והדפיסו את התוצאות ל console

function funPromise() {
  return new Promise((resolve, reject) => {
    true ? resolve("yes") : reject("sorry");});
}
// funPromise()
//   .then((msgGood) => {
//     console.log(msgGood);
//   })
//   .catch((msgBad) => {
//     console.log(msgBad);
//   });

async function FunctionAS() {
  try {
    return await funPromise();
  } catch (error) {
    return error;
  }
}
FunctionAS()
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });

// ===========================================================
//     1.	צרו פונקציה שמחזירה promise
// 2.	צרו משתנה רנדומלי בין 1 ל10
// 3.	במידה והמספר קטן מ5 ה promise מחזירה את המספר
// 4.	אחרת היא מחזירה את הטקסט "you lost try again"
// 5.	צרו תצוגה בחלון שמציגה את התשובה
// 6.	צרו קלט בחלון שמקבל מספר בין 1 ל10
// 7.	שנו את הפונקציה כך שתקבל מספר מבחוץ ובודקת האם המספר תואם למספר הרנדומלי
// 8.	במידה וכן מחזירה את המספר וטקסט " nice work, do it again"
// 9.	אחרת מחזירה את ההודעה מסעיף 4
// 10.	הוסיפו פעולה שקורית בכל מקרה: אינדקס שסופר כמה פעמים קראנו לפונקציה

let counter = 0;
function returnPromise(userNumber) {
  let numRandom = Math.floor(Math.random() * 10);

  return new Promise((resolve, reject) => {
    numRandom == userNumber
      ? resolve(
          `in the ${counter} time : nice work, do it again , the number is ${numRandom}`
        )
      : reject(
          `in the ${counter} time : you lost try again , the number is ${numRandom}`
        );
  });
}
btnInput.onclick = () => {
  returnPromise(inputNum.value)
    .then((goodnum) => {
      console.log(goodnum);})
    .catch((badNum) => {
      console.log(badNum);})
    .finally(() => {
      console.log(counter++);
    });
};
//!פונקציה אנסכרונית
async function asyncFunction() {
  try {
    return await returnPromise(inputNum.value);
  } catch (error) {
    return error;
  }
}

asyncFunction()
  .then((res) => {
    console.log(res);})
  .catch((rej) => {
    console.log(rej);});

// ==============================================================בכללי
//!Async-await :
// function callToTheMoon() {return "hello"}
// async function asyncFunction() {
//   try{
//     let result =await callToTheMoon()
//     return result;
//   }
//   catch (error){
// return error
//   }
//   finally{

//   }
// }
// asyncFunction().then((res)=>{console.log(res);}).catch((rej)=>{console.log(rej);})
