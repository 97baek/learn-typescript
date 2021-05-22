interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
let baek: User = {
  age: 25,
  name: "백상흔",
};

// 함수에 인터페이스 활용
function getUser(user: User) {
  console.log(user);
}

const capt = {
  name: "캡틴",
  age: 100,
};

getUser(capt);

// 함수의 스펙(구조)에 인터페이스 활용
interface SumFunction {
  (a: number, b: number): number;
}

let sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱
interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ["a", "b", "c"];
// arr[0];

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
  sth: /abc/,
  // cssFile:'css' // 정규표현식이 오지 않았으므로 오류
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

Object.keys(obj).forEach(function (value) {}); // value는 string 타입이라고 자동으로 추론 가능

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

let captain: Developer = {
  name: "baek",
  age: 25,
  language: "hi",
};
