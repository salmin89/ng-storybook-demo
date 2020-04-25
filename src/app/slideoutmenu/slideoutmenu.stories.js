import { storiesOf } from '@storybook/angular';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';

import { SlideoutmenuComponent } from './slideoutmenu.component'

export default { 
    title: 'Components|Slideout menu',
    decorators: [withKnobs]
}

export const slideOutMenuWithoutProps = () => ({
    component: SlideoutmenuComponent,
})

export const slideOutMenuWithProps = () => ({
  component: SlideoutmenuComponent,
  props: {
    text: text('text', 'Hello Storybook'), // The first param of the knob function has to be exactly the same as the component input.
  },
});