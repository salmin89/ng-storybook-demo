import { Component } from '@angular/core';
import { Task } from './task/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Storybook';
  tasks: Task[] = [
    {
      id: '0',
      title: 'go to the store',
      state: 'ACTIVE'
    },
    {
      id: '1',
      title: 'go home',
      state: 'ACTIVE'
    }
  ]
}
