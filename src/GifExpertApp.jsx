import { useState } from "react";
import { GifGrid, AddCategory } from './components/index.js';
import './styles.css';
export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['Dragon Ball'])

  const onAddCategory = ( newCategory ) =>{

    if ( categories.includes( newCategory ) ) return;

    setCategories([ ...categories, newCategory ])
  }

  return (
  <>
    <div>GifExpertApp</div>
    
    <AddCategory onNewCategory={ onAddCategory }/>

    <ol>
        {
          categories.map( category => (
            <GifGrid 
              key={ category } 
              category={category}
            />
          ))
        }
    </ol>

  
  </>
  )
}
