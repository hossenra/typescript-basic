type CrushType = {
  name: string;
  age?: number;
  profession: string;
  address: string;
};

const crush1: CrushType = {
  name: "Halim Molla",
  age: 22,
  profession: "Web Developer",
  address: "Khilkhat",
};

const crush2: CrushType = {
  name: "Lalim Molla",
  profession: "Frontend Developer",
  address: "Kaula",
};

type CrushMarriedType = boolean;

const isCrushMarried: CrushMarriedType = false;

type CourseNameType = string;

const courseName: CourseNameType = "Next Level Web Development";

type OperationType = (x: number, y: number) => number;

const calculate = (num1: number, num2: number, operation: OperationType) => {
  return operation(num1, num2);
};

calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x * y);
