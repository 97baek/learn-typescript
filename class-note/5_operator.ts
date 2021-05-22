// Union Type: 특정 파라미터나 변수에 한 가지 이상의 타입을 지정
let names: string | number | boolean;
function logMessage(value: string | number) {
  if (typeof value === "number") {
    // number의 api나 속성들 자동완성
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  }
  // 원하는 타입이 아니면 오류 발생
  throw new TypeError("value must be string or number");
}

logMessage("hello");
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// function askSomeone(someone: Person | Developer) {
// 공통된 속성에만 접근 가능
// someone.name;
// 아래 두 속성은 접근 불가
// someone.age;
// someone.skill;
// }

// askSomeone({ name: "개발자", skill: "웹 개발" });
// askSomeone({ name: "백상흔", age: 25 });

// & (intersection)
function askSomeone(someone: Person & Developer) {
  // 모든 속성에 접근 가능
  someone.name;
  someone.age;
  someone.skill;
}

askSomeone({ name: "개발자", skill: "웹 개발", age: 25 });
// askSomeone({ name: "백상흔", age: 25 }); // 파라미터 3개 모두 들어있어야 함

let names2: string | number | boolean;
let names3: string & number & boolean;

// 실무에서는 | (union)이 더 자주 쓰임
