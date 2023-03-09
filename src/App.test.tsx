import React from 'react';
import { AdminContext } from 'react-admin';
import { render, screen } from '@testing-library/react';

import MyAdmin from './admin';

test('<MyAdmin>', async () => {
  render(<MyAdmin />, { wrapper: AdminContext });

  const items = await screen.findAllByText(/Item #[0-9]: /);
  expect(items).toHaveLength(10);
});
