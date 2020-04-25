import { action } from '@storybook/addon-actions';
import { withKnobs, object, text, select } from '@storybook/addon-knobs';

import { TaskComponent } from './task.component';
export default {
  title: 'Components|Task',
  excludeStories: /.*Data$/,
  decorators: [withKnobs],
};

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'Task_INBOX',
  updated_at: new Date(2019, 0, 1, 9, 0),
};

export const Default = () => ({
  component: TaskComponent,
  props: {
    task: object('task', { ...taskData }),
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
  },
});
// pinned task state
export const Pinned = () => ({
  component: TaskComponent,
  props: {
    task: object('task', { ...taskData, state: 'TASK_PINNED' }),
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
  },
});
// archived task state
export const Archived = () => ({
  component: TaskComponent,
  props: {
    task: object('task', { ...taskData, state: 'TASK_ARCHIVED' }),
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
  },
});

const options = {
  'Task_INBOX': 'Task_INBOX',
  'TASK_PINNED': 'TASK_PINNED',
  'TASK_ARCHIVED': 'TASK_ARCHIVED',
};
const defaultValue = 'Task_INBOX';

export const WithKnobs = () => ({
  component: TaskComponent,
  props: {
    task: { 
      id: '1',
      title: text('title', 'My title'),
      state: select('state', options, defaultValue),
      updated_at: new Date(2019, 0, 1, 9, 0),
    },
  }
})