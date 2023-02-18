import { useState, useReducer } from "react";
import { userType, reducerType, actionType } from "./types";

const initialState: reducerType = {
  count: 0,
}

function reducer(state: reducerType, action: actionType) {
  switch (action.type) {
    case "increament":
      return { count: state.count + action.payload }

    case "decreament":
      return { count: state.count - action.payload }

    case "reset":
      return initialState

    default:
      return state
  }
}

function Example3() {
  const [user, setUser] = useState<userType | null>(null)
  // const [user, setUser] = useState<userType>({} as userType)

  const [state, dispatch] = useReducer(reducer, initialState)

  const updateUser = () => setUser({
    name: "Raj kumar",
    email: "raj@gmail.com",
    mobile: 9090909090
  })

  return (
    <div>
      <button onClick={updateUser}>
        Login
      </button>

      <div>
        <p>User Name : {user?.name}</p>
        <p>User Email : {user?.email}</p>
        <p>User Mobile : {user?.mobile}</p>
      </div>

      <div>
        <p>Count value = {state.count}</p>
        <button
          onClick={() => dispatch({ type: "increament", payload: 1 })}
        >
          Add
        </button>
        <button
          onClick={() => dispatch({ type: "decreament", payload: 1 })}
        >
          Minus
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default Example3