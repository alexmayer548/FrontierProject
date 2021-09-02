import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontierComponent } from './frontier.component';

describe('FrontierComponent', () => {
  let component: FrontierComponent;
  let fixture: ComponentFixture<FrontierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
