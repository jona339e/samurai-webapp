import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloFellasComponent } from './hello-fellas.component';

describe('HelloFellasComponent', () => {
  let component: HelloFellasComponent;
  let fixture: ComponentFixture<HelloFellasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloFellasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelloFellasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
