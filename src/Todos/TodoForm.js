import React,{useState} from 'react'

const TodoForm = (props) => {

  const [inputText, setInputText] = useState('')
  // const value = ''
  console.log('props', props)
  const {handleSubmit} = props;


  return (
    <div>
      <form
       onSubmit={(event) => handleSubmit(event, inputText)}
       >

        <input onChange={
          (event)=> setInputText(event.target.value)
          } />
      </form>

    </div>
  )
}

export default TodoForm
