
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TblPruebaComponent } from './tbl-prueba.component';

describe('TblPruebaComponent', () => {
  let component: TblPruebaComponent;
  let fixture: ComponentFixture<TblPruebaComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TblPruebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TblPruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
