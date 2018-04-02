import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      { id: 1, name: 'Victor' },
      { id: 2, name: 'Dubraska' },
      { id: 3, name: 'Luis' },
      { id: 4, name: 'Maria' },
      { id: 5, name: 'Pedro' },
      { id: 6, name: 'Andres' },
      { id: 7, name: 'Jose' },
      { id: 8, name: 'Juan' }
    ];
    return {heroes};
  }

}
