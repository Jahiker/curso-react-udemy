import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Test on <FirstApp />', () => {
    test('should match with the snapshot', () => {
        const title = "Esto es un titulo";
        const { container } = render( <FirstApp title={title} /> );

        // expect( container ).toMatchSnapshot();
    })

    test('should show the title on H1', () => {
        const title = " Esto es un titulo ";
        const { container, getByText, getByTestId } = render( <FirstApp title={title} /> );

        // expect( getByText(title) ).toBeTruthy();

        // expect( getByTestId("test-title").innerHTML ).toBe( title );

        // const h1 = container.querySelector('h1');

        // expect( h1.innerHTML ).toBe( title );
        // expect( h1.innerHTML ).toBe( title );
    })

    test('should show the prop subtitle', () => {
        const title = "Esto es un titulo";
        const subtitle = "Esto es el subtitulo";
        const { getByText } = render( <FirstApp title={ title } subtitle={ subtitle } /> );

        // expect( getByText(subtitle) ).toBeTruthy();
        // expect( getByText(subtitle).length ).toBe(2);
    })
})