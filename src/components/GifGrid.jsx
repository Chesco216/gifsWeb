import PropTypes  from "prop-types";
import { useFetchGifs } from '../hooks/useFetchGifs.js';
// import '../styles.css'
import { GifCard } from "./GifCard.jsx";

export const GifGrid = ({ category }) => {
  
  const { images, isLoading } = useFetchGifs( category )

  return (
    <>
      <h1>{category}</h1>
      {
        // isLoading
        // ? (<h1>Loading...</h1>)
        // : null
        isLoading && (<h1>Loading...</h1>)
      }
      <div className="card-grid">
        {
          images.map(( img ) => (
            <GifCard 
              key={img.key}
              { ...img }
            />
          ))
          // DESESTRUCTURANDO COMO TODO BUEN SEGUIDOR DE FH
          // images.map(({ id, title }) => (
          //   <li key={ id }>{ title }</li>
          // ))

        }
      </div>
    </>
  )
}

GifGrid.propTypes = {

  category: PropTypes.string.isRequired

}
