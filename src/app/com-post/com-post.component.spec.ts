import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComPostComponent } from './com-post.component';

describe('ComPostComponent', () => {
  let component: ComPostComponent;
  let fixture: ComponentFixture<ComPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
