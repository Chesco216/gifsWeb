import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import './styles.css';
import { useState } from "react";
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
