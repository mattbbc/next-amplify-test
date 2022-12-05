import { render } from '@testing-library/react';
import TestComponent from './TestComponent';

describe('Test component', () => {
  let findByTestId;

  beforeEach(() => {
    const component = render(<TestComponent />);
    findByTestId = component.findByTestId;
  });

  it('should do something', () => {
    expect(1).toEqual(2);
  });
});
