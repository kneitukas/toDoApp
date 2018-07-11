import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryCardsComponent } from './memory-cards.component';

describe('MemoryCardsComponent', () => {
  let component: MemoryCardsComponent;
  let fixture: ComponentFixture<MemoryCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
