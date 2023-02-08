export type userType = {
  id?: string
  firstName: string
  lastName?: string
  age: number
  personalInfo: {
    email: string
    phone: number
    githubId?: string
  }
  skills: {
    name: string
    yearOfExp: number
    level: "Advanced" | "Intermediate" | "Average" | "Beginer"
    canWorkIndependently: boolean
  }[]
}

export type exampleType = {
  userList: userType[]
  title: string
}
