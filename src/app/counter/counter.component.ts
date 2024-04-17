import { Component } from '@angular/core';

@Component({
  selector : 'app-counter',
  template : `<h1>Hola Counter</h1>
  <p>Counter {{counter}}</p>

  <button (click)="increment(1)">+1</button>
  <button (click)="resetCounter()">reset</button>
  <button (click)="increment(-1)">-1</button>
  `
})
export class CounterComponent {
  constructor() {}
  public counter : number = 17;

  public increment( n : number) : void {
    this.counter += n;
  }

  resetCounter() : void {
    this.counter = 17;
  }

}
