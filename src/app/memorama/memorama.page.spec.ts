import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MemoramaPage } from './memorama.page';

describe('MemoramaPage', () => {
  let component: MemoramaPage;
  let fixture: ComponentFixture<MemoramaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MemoramaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
