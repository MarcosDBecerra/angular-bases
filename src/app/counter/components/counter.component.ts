import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

  <h1> {{title}} </h1>
  <hr>
  <p>Counter: {{ counter }}</p>
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetCounter()">reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  <hr>

  `
})

export class CounterComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  title: string = "hola mundo jiji";
  counter: number = 10;

  increaseBy( value: number ): void{
    this.counter += value;
  }

  resetCounter(){
    this.counter = 10;
  }

}
