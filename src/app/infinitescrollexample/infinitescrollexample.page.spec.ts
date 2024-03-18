import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfinitescrollexamplePage } from './infinitescrollexample.page';

describe('InfinitescrollexamplePage', () => {
  let component: InfinitescrollexamplePage;
  let fixture: ComponentFixture<InfinitescrollexamplePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfinitescrollexamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
