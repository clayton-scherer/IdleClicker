import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css'],
})
export class GameboardComponent implements OnInit {
  count: number = 0;

  digitPrice: number = 10;
  extraDigits: number = 0;
  extraDigitMultiplier: number = 1;

  handPrice: number = 25;
  extraHands: number = 0;
  extraHandMultiplier: number = 5;

  feetPrice: number = 75;
  extraFeet: number = 0;
  extraFeetMultiplier: number = 9;

  intervals: any = {
    extraDigitIntervals: undefined,
    extraHandIntervals: undefined,
    extraFeetIntervals: undefined,
  };

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy() {
    clearInterval(this.intervals['extraDigitIntervals']);
    clearInterval(this.intervals['extraHandIntervals']);
    clearInterval(this.intervals['extraFeetIntervals']);
  }

  incremenetCount() {
    this.count += 1;
  }

  purchaseExtraDigit() {
    // Remove the current interval and Value Per Second.
    // Add a new interval with the updated VPS.
    clearInterval(this.intervals.extraDigitIntervals);

    // Remove the cost from the total count;
    this.count -= this.digitPrice;

    this.extraDigits += 1;

    const digitInterval = setInterval(() => {
      this.count += this.extraDigitMultiplier * this.extraDigits;
    }, 1000);

    Object.assign(this.intervals, { extraDigitIntervals: digitInterval });

    this.digitPrice += this.extraDigits ** 1;
  }

  purchaseExtraHand() {
    // Remove the current interval and Value Per Second.
    // Add a new interval with the updated VPS.
    clearInterval(this.intervals.extraHandIntervals);

    // Remove the cost from the total count;
    this.count -= this.handPrice;

    this.extraHands += 1;

    const handInterval = setInterval(() => {
      this.count += this.extraHandMultiplier * this.extraHands;
    }, 1000);

    Object.assign(this.intervals, { extraHandIntervals: handInterval });

    this.handPrice += this.extraHands ** 2;
  }

  purchaseExtraFeet() {
    // Remove the current interval and Value Per Second.
    // Add a new interval with the updated VPS.
    clearInterval(this.intervals.extraFeetIntervals);

    // Remove the cost from the total count;
    this.count -= this.feetPrice;

    this.extraFeet += 1;

    const feetInterval = setInterval(() => {
      this.count += this.extraFeetMultiplier * this.extraFeet;
    }, 1000);

    Object.assign(this.intervals, { extraFeetIntervals: feetInterval });

    this.feetPrice += this.extraFeet ** 3;
  }
}
