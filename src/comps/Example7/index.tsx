import { RandomNoProps } from "./types"

function RandNo({ value, isPositive, isNegative, isZero }: RandomNoProps) {
  return (
    <div>
      {value} -
      {isPositive && "I am Positive"}
      {isNegative && "I am Negative"}
      {isZero && "I am Zero"}
    </div>
  )
}

function Example7() {
  return (
    <div>
      {/* <RandNo value={12} isNegative isPositive isZero /> */}
      {/* Will throw error */}

      <RandNo value={-1} isNegative />
      <RandNo value={12} isPositive />
      <RandNo value={0} isZero />
    </div>
  )
}

export default Example7