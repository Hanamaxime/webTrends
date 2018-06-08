import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable, of } from 'rxjs';

@Injectable({
providedIn: 'root'
})


export class PeopleService {

  people: Person[] = [
  {id: 1, firstName: 'Bill', lastName: 'Wright', dateOfBirth: new Date ('01/01/1950')},
  {id: 2, firstName: 'Bernie', lastName: 'Hi', dateOfBirth: new Date ('01/01/1955')},
  {id: 3, firstName: 'Sean', lastName: 'Hello', dateOfBirth: new Date ('01/01/1969')},
  ];

  getPeople(): Observable<Person[]> {
  return of(this.people);
  }

  constructor() {}
}
