import { useEffect, useRef, useState } from 'react';

function Example5() {
  const inputRef = useRef<HTMLInputElement>(null)
  // const inputRef = useRef<HTMLInputElement>(null!)

  const [timer, setTimer] = useState<number>(0)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    inputRef.current?.focus()
    // inputRef.current.focus()
  }, [])

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setTimer(p => p + 1)
    }, 3000)

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  return (
    <>
      <div>
        Dom Ref
        <input type="text" ref={inputRef} />
      </div>

      <div>
        Timer - {timer}
      </div>
    </>
  )
}

export default Example5