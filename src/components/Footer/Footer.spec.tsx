import { screen } from '@testing-library/react';

import { renderWithTheme } from '~/utils/tests/helpers';

import Footer from '.';

describe('<Footer />', () => {
  it('should be render Footer', () => {
    renderWithTheme(<Footer />);

    expect(screen.getByLabelText(/rodapé/i)).toBeInTheDocument();
  });

  it('should render 4 column topics', () => {
    const container = renderWithTheme(<Footer />);

    expect(
      screen.getByRole('heading', {
        name: /Contact/i,
      })
    );

    expect(
      screen.getByRole('heading', {
        name: /Follow us/i,
      })
    );

    expect(
      screen.getByRole('heading', {
        name: /Links/i,
      })
    );

    expect(
      screen.getByRole('heading', {
        name: /Location/i,
      })
    );

    expect(container).toMatchSnapshot();
  });
});
