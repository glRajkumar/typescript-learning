import React from "react"

export type inputWrapperProp = {
  children: React.ReactNode
  value: string
}

export type btnProps = {
  text: string
  style?: React.CSSProperties
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export type inputProps = {
  val: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}