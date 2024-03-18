import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CovertidorPage } from './covertidor.page';

describe('CovertidorPage', () => {
  let component: CovertidorPage;
  let fixture: ComponentFixture<CovertidorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CovertidorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
