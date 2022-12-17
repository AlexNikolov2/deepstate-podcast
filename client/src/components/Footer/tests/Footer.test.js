import { render } from '@testing-library/react';
import { FooterComponent } from '../Footer';

describe('It should properly render the Footer component', () => {
  test('should render a normal Footer component', () => {
    render(<FooterComponent />);
  });
});
