import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebWordComponent } from './web-word.component';

describe('WebWordComponent', () => {
  let component: WebWordComponent;
  let fixture: ComponentFixture<WebWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
