/*
alert('Hello'); // 경고 메세지
console.log("This is console.log()."); // 콘솔
*/

const name = "Dasol";
console.log(name);

const what = true; // 텍스트 아님
console.log(what);

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", name, 123, true];
console.log(daysOfWeek);
console.log(daysOfWeek[3]);

// Object안에 Array와 Object가 있음
// 콤마(,) 주의하기
const myInfo = {
    id: "solda",
    age: 33,
    gender: "Male",
    isHandsome: true,
    days: daysOfWeek,
    songs: ["A", "B", "C"],
    man: [
        {
            name: "Dasol",
        },
        {
            sex: "Male",
        },
    ],
};
console.log(myInfo);
console.log(myInfo.id);
myInfo.id = "2o1da";
console.log(myInfo.id);

console.log(myInfo.man[1].sex);

console.log(console);
