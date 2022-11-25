import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Test on <FirstApp />', () => {
    test('should match with snapshot', () => {
        const title = "Esto es un titulo"
        render( <FirstApp title={title} /> )
    })
})