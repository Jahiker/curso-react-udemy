import { render, screen, fireEvent } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('test on <CounterApp /> component', () => {
    test('should match with the snapshot', () => {
        const { container } = render(<CounterApp value={10} />)
        expect(container).toMatchSnapshot();
    })

    test('should show value 100', () => {
        render(<CounterApp value={100} />)
        expect(screen.getByText(100)).toBeTruthy();
    })

    test('should increment value on click +1 button', () => {
        render(<CounterApp value={10} />)
        fireEvent.click( screen.getByText("+1") )
        expect(screen.getByText(11)).toBeTruthy();
    })

    test('should dicrement value on click -1 button', () => {
        render(<CounterApp value={10} />);
        fireEvent.click( screen.getByText("-1") );
        screen.debug();
        expect(screen.getByText(9)).toBeTruthy();
    })

    test('should works the reset button', () => {
        render(<CounterApp value={10} />)
        fireEvent.click( screen.getByText("+1") )
        fireEvent.click( screen.getByText("+1") )
        fireEvent.click( screen.getByText("+1") )

        // fireEvent.click( screen.getByText("Reset") )
        fireEvent.click( screen.getByRole("button", { name: "btn-reset" }) )

        expect(screen.getByText(10)).toBeTruthy();
    })
})