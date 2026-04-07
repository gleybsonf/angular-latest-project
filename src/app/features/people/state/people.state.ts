// src/app/features/people/state/people.state.ts
import { signal } from '@angular/core';
import { Person } from '../domain/person.entity';

// 1. Definimos a estrutura do estado desta feature
export interface PeopleStateModel {
  list: Person[];
  selectedId: string | null;
  loading: boolean;
  error: string | null;
}

// 2. Criamos o estado inicial
const initialState: PeopleStateModel = {
  list: [],
  selectedId: null,
  loading: false,
  error: null,
};

// 3. Exportamos o Signal (Mantemos privado para a Facade gerenciar)
export const peopleState = signal<PeopleStateModel>(initialState);

/**
 * Nota: Em arquiteturas escaláveis, apenas a Facade deve importar o 'peopleState'
 * para escrita (update/set). Os componentes devem ler os dados através da Facade.
 */
