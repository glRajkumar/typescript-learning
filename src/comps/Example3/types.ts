export type userType = {
  name: string
  email: string
  mobile: number
}

export type reducerType = {
  count: number
}

// export type actionType = {
//   type: "increament" | "decreament" | "reset"
//   payload?: number
// }

export type updateActionType = {
  type: "increament" | "decreament"
  payload: number
}

export type resetActionType = {
  type: "reset"
}

export type actionType = updateActionType | resetActionType
