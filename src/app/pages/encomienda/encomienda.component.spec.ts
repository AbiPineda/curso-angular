import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncomiendaComponent } from './encomienda.component';

describe('EncomiendaComponent', () => {
  let component: EncomiendaComponent;
  let fixture: ComponentFixture<EncomiendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncomiendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncomiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
