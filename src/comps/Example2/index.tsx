import React, { useState } from "react";
import { btnProps, inputProps, inputWrapperProp } from "./props.types";

function Btn({ text, onClick }: btnProps) {
  return (
    <button
      onClick={onClick}
    >
      {text}
    </button>
  )
}

function Input({ val, onChange }: inputProps) {
  return <input type="text" value={val} onChange={onChange} />
}

function Counter() {
  const [couter, setCounter] = useState(0)

  return (
    <div className="mb-4">
      <p>{couter}</p>

      <Btn
        text="Count by 1"
        style={{ background: "red", color: "blue" }}
        onClick={() => setCounter(p => p + 1)}
      />
      <Btn
        text="Count by 2"
        onClick={() => setCounter(p => p + 2)}
      />
    </div>
  )
}

function InputWrapper({ children, value }: inputWrapperProp) {
  const print = () => {
    console.log(value)
  }

  return (
    <div>
      {children}
      <button onClick={print}>
        Submit
      </button>
    </div>
  )
}

function Example2() {
  const [val, setVal] = useState("")

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value)
  }

  return (
    <div>
      <h1 className="mb-2">Example 2</h1>

      <Counter />

      <InputWrapper value={val}>
        <Input
          val={val}
          onChange={onChange}
        // onChange={e => console.log(e.target.value)}
        />
      </InputWrapper>
    </div>
  )
}

export default Example2