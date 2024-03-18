import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlgoritmosPage } from './algoritmos.page';

describe('AlgoritmosPage', () => {
  let component: AlgoritmosPage;
  let fixture: ComponentFixture<AlgoritmosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlgoritmosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
