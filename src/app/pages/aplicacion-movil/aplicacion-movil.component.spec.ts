import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacionMovilComponent } from './aplicacion-movil.component';

describe('AplicacionMovilComponent', () => {
  let component: AplicacionMovilComponent;
  let fixture: ComponentFixture<AplicacionMovilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplicacionMovilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicacionMovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
