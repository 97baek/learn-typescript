// JS 문자열 선언
var str1 = "hello";

// TS 문자열 선언
let str2: string = "hello";

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ["Capt", "Thor", "Hulk"];
let items: number[] = [1, 2, 3];

// TS 튜플
let address: [string, number] = ["gangnam", 100];

// TS 객체
let obj: object = {};
// let person: object = {
//   name: "baek",
//   age: 25,
// };

// 타입을 구체적으로 지정
let person: { name: string; age: number } = {
  name: "baek",
  age: 25,
};

// TS 진위값
let show: boolean = true;
