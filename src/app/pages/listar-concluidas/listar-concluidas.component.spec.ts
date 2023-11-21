import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarConcluidasComponent } from './listar-concluidas.component';

describe('ListarConcluidasComponent', () => {
  let component: ListarConcluidasComponent;
  let fixture: ComponentFixture<ListarConcluidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarConcluidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarConcluidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
