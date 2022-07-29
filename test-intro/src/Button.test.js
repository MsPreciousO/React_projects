import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'
import Button from './Button'

// it('has a button in the document',()=> {}) - when you want it sound gramatically correct

test('is there is button in the DOM', ()=>{
    render (<Button />)
    const actualButton = screen.getByRole('button', {name: /Change color to Red/i})

    expect(actualButton).toBeInTheDocument()

    // expect(actualButton).toHaveStyle({backgroundColor: 'blue'})

})


test('background color is now blue', ()=> {
    render (<Button />)
    const actualButton = screen.getByRole('button', {name: /Change color to Red/i})

    expect (actualButton).toHaveStyle({background: 'blue'})
})


test('button should turn red when clicked', ()=> {
    render(<Button />)
    const actualButton = screen.getByRole('button', {name: /Change Color to Red/i} )

    userEvent.click(actualButton)
    expect (actualButton).toHaveStyle({backgroundColor: 'red'})
})
    