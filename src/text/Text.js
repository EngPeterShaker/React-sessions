import React from 'react'
// import './text.scss'


const Text = (props) => {
  console.log('props', props)
  const { test, test2 } = props;

  const item = 3;

  // const hello = (item > 5)  && 0 ;
  // console.log('hello', hello)

  // ternary operator
  const world = item > 5 ? 'item1' : 'item2'
  console.log('world', world)

const styles={
  'border': '1px solid red',
   'margin': '20px'
}


  return (
    <div>
      {/* {(item > 5) &&
         <p>{'test2'}</p>
      }

    {item > 5 ?
    <p>item1</p> :
    <p>item2</p>
    } */}

      {/* <p> text from parent  : {test} - {test2}</p> */}

      <div className="wrapperText">
        <p id="first"> text1 </p>
        <p className="paragrapgh border_pink"> text2 </p>
        <p> text3 </p>

        <div className='text'>

          <p className='item4'> text4 </p>
          <input className="input__style" />
        </div>
      </div>

      {/* inline styling  */}
      <div style={styles}>
        <p id="first"> text1 </p>
        <p className="paragrapgh"> text2 </p>
        <p style={{
  'border': '1px solid red',
   'margin': '20px'
}}> text3 </p>
        <p className='item4'> text4 </p>
        <input className="input__style" />


      </div>

    </div>
  )
}

export default Text
