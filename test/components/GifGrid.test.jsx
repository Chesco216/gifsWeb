import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

describe('GifGrid', () => {
  
  test('should return hook', () => {
    
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })

    const category = 'pipipi'

    render(<GifGrid category={category}/>)

    expect( screen.getByText('Loading...') )
    expect( screen.getByText(category) )

    const gifsitos = [
      {
        id: '1',
        title: 'pipipi',
        url: 'pipipiurl'
      }
    ]

    useFetchGifs.mockReturnValue({
      images: gifsitos,
      isLoading: false
    })

    render(<GifGrid category={category} />)
    expect( screen.getAllByRole('img').length).toBe(1)

  })


})
