// features/people/people.facade.ts
import { inject, Injectable } from '@angular/core';
import { PeopleService } from './data/people.service';
import { peopleState } from './state/people.state';

@Injectable({ providedIn: 'root' })
export class PeopleFacade {
  private service = inject(PeopleService);

  // Expondo apenas leitura dos sinais
  public readonly list = () => peopleState().list;
  public readonly isLoading = () => peopleState().loading;

  async loadPeople() {
    peopleState.update((s) => ({ ...s, loading: true }));
    const data = await this.service.getAll();
    peopleState.update((s) => ({ ...s, list: data, loading: false }));
  }
}
