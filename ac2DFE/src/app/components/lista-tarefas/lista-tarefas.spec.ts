import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTarefa } from './lista-tarefas';

describe('ListaTarefa', () => {
  let component: ListarTarefa;
  let fixture: ComponentFixture<ListarTarefa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarTarefa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTarefa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});