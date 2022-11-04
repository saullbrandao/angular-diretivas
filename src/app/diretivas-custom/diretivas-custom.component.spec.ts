import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasCustomComponent } from './diretivas-custom.component';

describe('DiretivasCustomComponent', () => {
  let component: DiretivasCustomComponent;
  let fixture: ComponentFixture<DiretivasCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivasCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivasCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
