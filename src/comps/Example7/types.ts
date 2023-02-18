type RandomNoType = {
  value: number
}

type positiveNo = RandomNoType & {
  isPositive: boolean
  isNegative?: never
  isZero?: never
}

type negativeNo = RandomNoType & {
  isNegative: boolean
  isPositive?: never
  isZero?: never
}

type zeroNo = RandomNoType & {
  isZero: boolean
  isPositive?: never
  isNegative?: never
}

export type RandomNoProps = positiveNo | negativeNo | zeroNo