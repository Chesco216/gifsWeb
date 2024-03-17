import { useEffect, useState } from "react";
import { gifFetch } from "../resources/getGif";

export const useFetchGifs = ( category ) => {
  
  const [ images, setImages ] = useState([])
  const [ isLoading, setIsLoading ] = useState( true )

  const getImages = async() => {
    const newImages = await gifFetch( category )
    setImages( newImages )
    setIsLoading( false )
  }

  useEffect(() => {
    getImages()
  }, [])

  return{
    images,
    isLoading
  }
}
