import { render, screen } from '@testing-library/react';

import MediaMatchTwo from '.';

describe('<MediaMatchTwo>', () => {
  let mobileElement: Element;
  let desktopElement: Element;

  beforeEach(() => {
    render(
      <>
        <MediaMatchTwo greaterThan="medium">
          <h1 data-testid="mobile">Mobile</h1>
        </MediaMatchTwo>

        <MediaMatchTwo lessThan="medium">
          <h1 data-testid="desktop">Desktop</h1>
        </MediaMatchTwo>
      </>
    );

    mobileElement = screen.getByTestId('mobile');
    desktopElement = screen.getByTestId('desktop');
  });

  it('should be hidden if no media query is passed', () => {
    expect(mobileElement.parentElement).toHaveStyle({
      display: 'hidden',
    });
  });

  it('should be hidden if no media query is passed', () => {
    expect(desktopElement.parentElement).toHaveStyle({
      display: 'hidden',
    });
  });
});
