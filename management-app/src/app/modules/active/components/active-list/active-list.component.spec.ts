import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveListComponent } from './active-list.component';

describe('ActiveListComponent', () => {
  let component: ActiveListComponent;
  let fixture: ComponentFixture<ActiveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActiveListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrive active users list', () => {
    component.usersList.length = 0;
    component.getActiveUser();
    const length = component.usersList.length;
    expect(length).toBeTruthy();
  });

  it('should call getActiveUser method', () => {
    spyOn(component, 'getActiveUser').and.callThrough();
    component.onDeactivate('9c25');
    expect(component.getActiveUser).toHaveBeenCalled();
  });
});
