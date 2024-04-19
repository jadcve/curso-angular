import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public deletedHero?: string = '';

  public herNames:string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Black Widow', 'Captain America', 'Hawkeye', 'Antman', 'Wasp', 'Black Panther']

  removeLastHero(): void {
    this.deletedHero = this.herNames.pop();
  }

}
