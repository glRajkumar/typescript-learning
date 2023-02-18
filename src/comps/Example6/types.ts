export type listProps<T> = {
  items: T[]
  onClick: (value: T) => void
}

export type listObjType = {
  id: string
  title: string
}