import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressbarUsersPage } from './progressbar-users.page';

describe('ProgressbarUsersPage', () => {
  let component: ProgressbarUsersPage;
  let fixture: ComponentFixture<ProgressbarUsersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProgressbarUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
