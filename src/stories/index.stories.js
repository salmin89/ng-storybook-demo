import { Button } from '@storybook/angular/demo';
import { action } from '@storybook/addon-actions';

export default { title: 'Angular|My Button' }

export const withText = () => ({
  component: Button,
  props: {
    text: 'Hello Button',
    onClick: e => {
      console.log(e);
      e.preventDefault();
      action('log')(e.target);
    }
  },
});