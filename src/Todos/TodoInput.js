import React,{useState} from 'react'

const TodoInput = (props) => {
    const [text, setText] = useState('');
    const [text1, setText1] = useState('');
    const {handleSubmit}= props;

    const handleChange=(value)=>{setText(value)  }
    
    return (
        <div>
            <form onSubmit={(event) => handleSubmit(event, text ,text1)}>
            <input 
            value ={text}
            onChange={event => handleChange(event.target.value)}
             />          
            </form>
            
        </div>
    )
}

export default TodoInput
