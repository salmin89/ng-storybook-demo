import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideoutmenuComponent } from './slideoutmenu.component';

describe('SlideoutmenuComponent', () => {
  let component: SlideoutmenuComponent;
  let fixture: ComponentFixture<SlideoutmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideoutmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideoutmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
