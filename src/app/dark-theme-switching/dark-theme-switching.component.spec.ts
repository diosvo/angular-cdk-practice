import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkThemeSwitchingComponent } from './dark-theme-switching.component';

describe('DarkThemeSwitchingComponent', () => {
  let component: DarkThemeSwitchingComponent;
  let fixture: ComponentFixture<DarkThemeSwitchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkThemeSwitchingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkThemeSwitchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
