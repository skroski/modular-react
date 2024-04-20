import { render } from '@testing-library/react';

import NxComp from './nx-comp';

describe('NxComp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NxComp />);
    expect(baseElement).toBeTruthy();
  });
});
