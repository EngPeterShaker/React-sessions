import React,{useState , useRef, useEffect} from 'react'

const TodoForm = (props) => {

  // const [inputText, setInputText] = useState('')
  // const value = ''
  console.log('props', props)
  const {handleSubmit} = props;
 const inputRef = useRef(null)

 const handleClick =( ) => {
  handleSubmit( inputRef.current.value)
  inputRef.current.value =''
  inputRef.current.placeholder = ' write again'
 }


  return (
    <div>
      {/* <form
       onSubmit={(event) => handleSubmit(event, inputRef.current.value)}
       > */}

        <input
        placeholder='write todo here '
        // value={'test'}
        ref={inputRef}
        // onChange={
        //   (event)=> setInputText(event.target.value)
        //   }
        />
        <button onClick={() =>  handleClick()}> Add </button>
      {/* </form> */}

    </div>
  )
}

export default TodoForm
