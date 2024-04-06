import { render, screen } from "@testing-library/react"
import { GifCard } from "../../src/components/GifCard";

describe( 'GifCard test', () => {

  const title = 'pipipi'
  const url = 'yipee'

  test('should match snapshot', () => {
    
    const { container } = render(<GifCard url={url} title={title}/>)
    expect( container ).toMatchSnapshot()

  })

  test('should show url and alt', () => {

    render(<GifCard title={title} url={url}/>)
    // console.log(screen.debug())
    // expect( screen.getByRole('img').src ).toBe(url)
    expect( screen.getByRole('img').alt ).toBe(title)

  })

})
