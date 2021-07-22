import { render } from '@testing-library/react';
import { Footer } from '.';

describe('Footer component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Footer />);

    expect(getByText('made by: @AngeloLanch')).toBeInTheDocument();
  });
});
