import React from 'react'

const TodoItem = (props) => {
  const { todos , changeStatus, removeItem } = props;
  console.log('todos', todos)

  const obj = {
    hello : 7 > 5 ? 'foo': 'bar',
    test : !true
  }
  // console.log('object', obj)

  return (
    <div>
      <ul>
        {todos.map((item, index) => {
          console.log('item', item)
          console.log('index', index)
          return (
            <li key={item.text}
              style={{
                color: item.isCompleted === true ? 'blue':'red' ,
                textDecoration: !item.isCompleted ?'none': 'line-through'
                 }} >
              {item.text}
              {item.isCompleted ? ' done' : ' not yet'}
              <button onClick={() => changeStatus(index)}>
              change
              </button>
              <button onClick={()=> removeItem(index)} >
              remove
              </button>
            </li>
          )
        })}
      </ul>

    </div>
  )
}

export default TodoItem
