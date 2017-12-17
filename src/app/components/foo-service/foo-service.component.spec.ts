import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooServiceComponent } from './foo-service.component';

describe('FooServiceComponent', () => {
  let component: FooServiceComponent;
  let fixture: ComponentFixture<FooServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
