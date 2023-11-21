import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarNaoConcluidasComponent } from './listar-nao-concluidas.component';

describe('ListarNaoConcluidasComponent', () => {
  let component: ListarNaoConcluidasComponent;
  let fixture: ComponentFixture<ListarNaoConcluidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarNaoConcluidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarNaoConcluidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
