import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Test on <FirstApp />", () => {
  const title = "Esto es el titulo";
  const subtitle = "Esto es el subtitulo";

  test("should match with snapshopt", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('should show the title "Esto es el titulo"', () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test('should show the title on h1 tag', () => {
    render(<FirstApp title={title} />);
    expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );
  })

  test('should show the prop subtitle', () => {
    render(<FirstApp title={title} subtitle={subtitle} />);
    expect( screen.getByText(subtitle) ).toBeTruthy();
    expect( screen.getAllByText(subtitle).length ).toBe(1);
  })
});
