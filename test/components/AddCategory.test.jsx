import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory";

describe('AddCategory component', () => {
  test('should ', () => {
    
    render(<AddCategory onNewCategory={ () => {} } />)
    const input = screen.getByRole('textbox')

    fireEvent.input(input, { target: { value: 'pipipi' }})
    
    expect( input.value ).toBe('pipipi')

  })

  test('submit', () => {

    const inval = 'pipipi'
    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategory={ onNewCategory } />)
    
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value: inval }} )
    expect(input.value).toBe(inval)

    fireEvent.submit( form ) 

    expect( input.value ).toBe('')

    expect(onNewCategory).toHaveBeenCalledTimes(1)
    expect(onNewCategory).toHaveBeenCalledWith(inval)
    

  })

  test('empty input', () => {
    
    const onNewCategory = jest.fn()
    
    render(<AddCategory onNewCategory={ onNewCategory } />)
    
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value: '' }} )
    fireEvent.submit( form ) 

    expect( input.value ).toBe('')

    expect(onNewCategory).toHaveBeenCalledTimes(0)

  })

})
