import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordInputsComponent } from './word-inputs.component';

describe('WordInputsComponent', () => {
  let component: WordInputsComponent;
  let fixture: ComponentFixture<WordInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordInputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
