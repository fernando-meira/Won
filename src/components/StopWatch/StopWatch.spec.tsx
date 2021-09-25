import { render, screen } from '@testing-library/react';

import StopWatch from '.';

describe('<StopWatch />', () => {
  it('should render the heading', () => {
    const { container } = render(<StopWatch />);

    expect(
      screen.getByRole('heading', {
        name: /StopWatch/i,
      })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
