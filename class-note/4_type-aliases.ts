interface Person {
  name: string;
  age: number;
}

// 타입 별칭은 새로운 타입 값을 하나 생성하는 것이 아니라 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여하는 것과 같다.
// 이러한 특징은 VSCode 상의 프리뷰 형태로 다른 타입과 어떤 차이점이 있는지 확인해볼 수 있다.
type PersonType = {
  name: string;
  age: number;
};

let user1: PersonType = {
  name: "baek",
  age: 25,
};

type MyString = string;
let str: MyString = "hello";

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {}

/**
 * type vs. interface
 * 타입 별칭과 인터페이스의 가장 큰 차이점은 타입의 확장 가능/불가능 여부
 * 인터페이스는 확장이 가능한데 반홰 타입 별칭은 확장이 불가능
 * 따라서, 가능한 한 type보다는 interface로 선언해서 사용하는 것이 좋음
 */
