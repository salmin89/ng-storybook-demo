import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slideoutmenu',
  templateUrl: './slideoutmenu.component.html',
  styleUrls: ['./slideoutmenu.component.scss']
})
export class SlideoutmenuComponent implements OnInit {

  @Input() text: string;
  constructor() { }

  ngOnInit(): void {
  }

}
