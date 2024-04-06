import { useFetchGifs } from "../../src/hooks/useFetchGifs.js";
import { renderHook, waitFor } from "@testing-library/react"


describe('Hooks test', () => {
  
  test('', () => {

    const { result } = renderHook( () => useFetchGifs('Dragon Ball') )
    const { images, isLoading } = result.current
    
    expect( images.length ).toBe(0)
    expect( isLoading ).toBeTruthy()

  })

  test('test with waitFor', async() => {

    const { result } = renderHook( () => useFetchGifs('Dragon Ball') )

    await waitFor(
      () => expect( result.current.images.length ).toBeGreaterThan(0),
      {
        timeout: 2000,
      }
    )

    expect( images.length ).toBeGreaterThan(0)
    expect( isLoading ).toBeFalsy()


  })

})
