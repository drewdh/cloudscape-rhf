import React, { useEffect } from 'react';
import type { Preview, Decorator } from '@storybook/react-vite';
import '@cloudscape-design/global-styles/index.css';

// Apply Cloudscape visual refresh class so components render with the modern theme
const withCloudscapeTheme: Decorator = (Story) => {
  useEffect(() => {
    document.body.classList.add('awsui-visual-refresh');
  }, []);
  return (
    <div style={{ padding: '1.5rem' }}>
      <Story />
    </div>
  );
};

const preview: Preview = {
  decorators: [withCloudscapeTheme],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
