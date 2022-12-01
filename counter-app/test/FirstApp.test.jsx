import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Test on <FirstApp />', () => {
    test('should match with the snapshot', () => {
        const title = "Esto es un titulo";
        const { container } = render( <FirstApp title={title} /> );

        expect( container ).toMatchSnapshot();
    })

    test('should show the title on H1', () => {
        const title = "Esto es un titulo";
        const { container, getByText } = render( <FirstApp title={title} /> );

        expect( getByText(title) ).toBeTruthy();


    })
})