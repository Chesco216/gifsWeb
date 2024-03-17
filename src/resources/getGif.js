
export const gifFetch = async( category ) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=9hBLbaH0fctprK1mLb90pumkKxw1a7rb&limit=10&q=${category}`
  const resp = await fetch(url)
  const { data } = await resp.json()

  const gifContent = data.map( img => ({
    
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium

  }))

  console.log(gifContent)
  return gifContent
}
