import {fireEvent, render, screen} from '@testing-library/react';
import Upload from '../views/Upload';

test('test upload button', () => {
  render(<Upload />);
  fireEvent.click(screen.getByText('Upload'));
  expect(screen.getByText('Uploading...')).toBeDefined();
});

