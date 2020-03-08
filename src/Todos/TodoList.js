import React from 'react'

function TodoList(props) {
    // console.log('props', props)
    const listRef = React.useRef(['todo1 ' , 'todo2' , 'todo3']);
    const {list, text}= props;
    console.log('text', text)

    // Wrong attempt
    // let myList =['todo1 ' , 'todo2' , 'todo3'];
    // let newList= [...myList , text]
    console.log('listRef.current', listRef.current.push(text))

    return (
        <div>
            {list.map((item)=>{
                return <li key={item}> {item}</li>
            })}
        </div>
    )
}

export default TodoList
