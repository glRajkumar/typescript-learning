import { userType } from './props.types';

const userList: userType[] = [
  {
    id: "1",
    firstName: "Raj",
    lastName: "Kumar",
    age: 24,
    personalInfo: {
      email: "raj@gmail.com",
      phone: 0,
    },
    skills: [
      {
        name: "React",
        yearOfExp: 3,
        level: "Intermediate",
        canWorkIndependently: true
      },
      {
        name: "Express",
        yearOfExp: 2,
        level: "Average",
        canWorkIndependently: false,
      },
      {
        name: "Mongo",
        yearOfExp: 2,
        level: "Average",
        canWorkIndependently: false,
      },
      {
        name: "Figma",
        yearOfExp: 1,
        level: "Beginer",
        canWorkIndependently: false,
      },
    ],
  },
  {
    id: "2",
    firstName: "",
    age: 22,
    personalInfo: {
      email: "@gmail.com",
      phone: 9876543210,
      githubId: "yfdflkj"
    },
    skills: [
      {
        name: "React",
        yearOfExp: 1,
        level: "Beginer",
        canWorkIndependently: false
      }
    ],
  },
  {
    id: "3",
    firstName: "Vasanth",
    lastName: "Kumar",
    age: 44,
    personalInfo: {
      email: "vasanth@gmail.com",
      phone: 9876543210,
      githubId: "yfdflkj"
    },
    skills: [
      {
        name: "React",
        yearOfExp: 14,
        level: "Intermediate",
        canWorkIndependently: true,
      },
      {
        name: "Figma",
        yearOfExp: 10,
        level: "Intermediate",
        canWorkIndependently: true,
      },
      {
        name: "Java",
        yearOfExp: 24,
        level: "Advanced",
        canWorkIndependently: true,
      },
      {
        name: "C++",
        yearOfExp: 20,
        level: "Advanced",
        canWorkIndependently: true,
      },
    ],
  },
]

export default userList