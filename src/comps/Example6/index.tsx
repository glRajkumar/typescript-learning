import { listObjType, listProps } from "./types";

const data1 = ["1", "2", "3"]
const data2 = [1, 2, 3]
const data3 = [1, "2", 3]

const data4: listObjType[] = [
  {
    id: "1",
    title: "title 1",
  },
  {
    id: "2",
    title: "title 2",
  },
  {
    id: "3",
    title: "title 3",
  },
]

const List = <T extends number | string>({ items, onClick }: listProps<T>) => {
  return (
    <div>
      {
        items.map((item, i) => (
          <button
            key={i}
            onClick={() => onClick(item)}
          >
            {item}
          </button>
        ))
      }
    </div>
  )
}

const List2 = <T extends listObjType>({ items, onClick }: listProps<T>) => {
  return (
    <div>
      {
        items.map(item => (
          <button
            key={item.id}
            onClick={() => onClick(item)}
          >
            {item.title}
          </button>
        ))
      }
    </div>
  )
}

function Example6() {
  const onClick = (item: string | number | {}) => console.log(item)

  return (
    <div>
      <List items={data1} onClick={onClick} />
      <List items={data2} onClick={onClick} />
      <List items={data3} onClick={onClick} />
      <List2 items={data4} onClick={onClick} />
    </div>
  )
}

export default Example6