// features/people/state/people.state.ts
import { signal } from '@angular/core';
import { Person } from '../domain/person.entity';

export interface PeopleStateModel {
  list: Person[];
  loading: boolean;
}

export const initialPeopleState: PeopleStateModel = {
  list: [],
  loading: false,
};

// Gerenciamos o sinal de forma privada para controle total
export const peopleState = signal<PeopleStateModel>(initialPeopleState);
