import { render } from '@testing-library/react';

import ModulesUi from './modules-ui';

describe('ModulesUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModulesUi />);
    expect(baseElement).toBeTruthy();
  });
});
