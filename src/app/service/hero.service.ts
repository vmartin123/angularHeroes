import { Injectable } from '@angular/core';
import {Hero} from '../model/hero';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {MessageService} from './message.service';

@Injectable()
export class HeroService {

  // mocked heroes
  heroesList: Hero[] = [
    { id: 1, name: 'Victor' },
    { id: 2, name: 'Dubraska' },
    { id: 3, name: 'Luis' },
    { id: 4, name: 'Maria' },
    { id: 5, name: 'Pedro' },
    { id: 6, name: 'Andres' },
    { id: 7, name: 'Jose' },
    { id: 8, name: 'Juan' }
  ];

  constructor(private messageService: MessageService) {}

  // 'Observable' and 'of' allows to call a service and wait for the response, it is used for asynchronous call
  getHeroes(): Observable<Hero[]> {
    // this will be equals to the response of the server
    const heroesList: Hero[] = this.heroesList;

    // send the message after fetching the heroes
    this.messageService.add('HeroService: fetched heroes');

    return of(heroesList);
  }

  getHero(id: number): Observable<Hero> {
    // this will be equals to the response of the server
    const heroesList: Hero[] = this.heroesList;

    // send the message after fetching the hero
    this.messageService.add('HeroService: fetched hero id=${id}');

    return of(heroesList.find(hero => hero.id === id));
  }
}
