import { action } from '@storybook/addon-actions';
import { withKnobs, object, text, select } from '@storybook/addon-knobs';

export default {
    title: 'Components|Form/Inputs',
    decorators: [withKnobs],
};

export const AllStates = () => ({
    template: `<div class="flex-col" style="max-width: 400px">
            {{ text }}
            <input class="error" value="error" />
            <input class="success" value="success" />
        </div>
    `,
    props: {
        text: text('Default text', 'Hello Storybook'), // The first param of the knob function has to be exactly the same as the component input.
    },
})