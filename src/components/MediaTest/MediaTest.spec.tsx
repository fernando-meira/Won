import 'jest-styled-components';
import { render, screen } from '@testing-library/react';

import MediaTest from '.';

describe('<MediaTest />', () => {
  let mobileElement: Element;
  let desktopElement: Element;

  beforeEach(() => {
    render(
      <>
        <MediaTest lessThan="medium">
          <h1 data-testid="mobile">Mobile</h1>
        </MediaTest>

        <MediaTest greaterThan="medium">
          <h1 data-testid="desktop">Desktop</h1>
        </MediaTest>
      </>
    );

    mobileElement = screen.getByTestId('mobile');
    desktopElement = screen.getByTestId('desktop');
  });

  it('should hidden if media query is not passed', () => {
    expect(mobileElement.parentElement).toHaveStyleRule('display', 'none');
    expect(desktopElement.parentElement).toHaveStyleRule('display', 'none');
  });

  it('should show or hide based on the media passed', () => {
    expect(mobileElement.parentElement).toHaveStyleRule('display', 'block', {
      media: '(max-width: 768px)',
    });

    expect(desktopElement.parentElement).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)',
    });
  });
});
