import {Component} from 'angular2/core';

export class Hero {
  id: number;
  name: string;
}


@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <h2>My Heroes</h2>
      <ul class="heroes">
        <li *ngFor="#hero of heroes">
          <span class="badge">{{hero.id}}</span>{{hero.name}}
        </li>
      </ul>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name">
      </div>
    `
})
export class AppComponent {
  title = 'Tour of Heros';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }
}

var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];

var heroes = HEROES;
