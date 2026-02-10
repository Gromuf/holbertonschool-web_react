import {expect, test, jest} from '@jest/globals'
import {render, fireEvent, screen} from '@testing-library/react'
import Notifications from './Notifications'

test('should render title', () => {
	render(<Notifications />)
	expect(screen.getByText(/Here is the list of notifications/i))
})

test('should render button', () => {
	render(<Notifications />)
	expect(screen.getByLabelText(/Close/i))
})

test('should render 3 li items', () => {
	render(<Notifications />)
	expect(screen.getAllByRole('listitem').length).toBe(3)
})

test('should call console.log when button is clicked', () => {
	const consoleSpy = jest.spyOn(console, 'log')
	render(<Notifications />)
	fireEvent.click(screen.getByLabelText(/Close/i))
	expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/Close button has been clicked/i))
})
