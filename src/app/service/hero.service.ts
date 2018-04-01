import { Injectable } from '@angular/core';
import {Hero} from '../model/hero';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {MessageService} from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  // 'Observable' and 'of' allows the service to be called and wait for the response, it is an asynchronous call
  getHeroes(): Observable<Hero[]> {
    // message when fetching the heroes
    this.messageService.add('HeroService: fetched heroes');

    return of(this.buildHeroes());
  }

  // uses when returning synchronous data, i.e: a mock
  // getHeroes(): Hero[] {
  //   return this.buildHeroes();
  // }

  // mock heroes
  buildHeroes(): Hero[] {
    return [
      { id: 1, name: 'Victor' },
      { id: 2, name: 'Dubraska' },
      { id: 3, name: 'Luis' },
      { id: 4, name: 'Maria' },
      { id: 5, name: 'Pedro' }
    ];
  }

}
