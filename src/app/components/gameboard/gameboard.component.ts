import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {
  count: number = 0;
  constructor() { }

  ngOnInit(): void {
    
  }

  incremenetCount() {
    this.count++
  }

}
