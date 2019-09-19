import { Component, OnInit } from '@angular/core';
import { JokesService } from '../services/jokes.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'jokes',
  template: `
    <h3> Jokes </h3>
    <button (click)="getRandomJoke()"> Get Random Joke </button>
    <pre>{{ joke | json }} </pre>
  `,
  providers: [JokesService]
})
export class JokesComponent implements OnInit {

  joke$: Observable<string>;
  constructor(private jokes: JokesService) { }

  ngOnInit() {}

  getRandomJoke() {
    this.jokes.getRandom()
      .subscribe((joke) => this.joke = joke);
  }
}