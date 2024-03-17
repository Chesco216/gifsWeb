import { useEffect } from "react";
import '../styles.css'
import { gifFetch } from "../resources/getGif.js";

export const GifGrid = ({ category }) => {
  
  useEffect(() => {
    gifFetch( category )
  }, [])

  return (
    <>
      <h1>{category}</h1>
    </>
  )
}

