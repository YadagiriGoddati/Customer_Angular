import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerdInventoryDatatableComponent } from './herd-inventory-datatable.component';

describe('HerdInventoryDatatableComponent', () => {
  let component: HerdInventoryDatatableComponent;
  let fixture: ComponentFixture<HerdInventoryDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerdInventoryDatatableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerdInventoryDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
