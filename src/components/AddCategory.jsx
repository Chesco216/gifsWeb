import '../styles.css'
import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  
  const [inputVal, setInputVal] = useState('')

  const onInputChanged = ({ target }) => {
    setInputVal(target.value)
    console.log(inputVal)
  }
  
  const onSubmit = ( event ) => {
    event.preventDefault()
    
    if ( inputVal.trim().length <= 1 ) return;
    
    onNewCategory(inputVal.trim())
    setInputVal('')
  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type='text'
        placeholder='pipipi'
        value={ inputVal }
        onChange={ onInputChanged }
      />
    </form>
  )
}
