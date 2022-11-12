import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currencies = ['UAH', 'EUR', 'USD'];
  inCurr = 'UAH';
  outCurr = 'EUR';
  uahToForeignRates = {
    UAH: 1,
    EUR: 0.027,
    USD: 0.027,
  };
  inputValue;

  outputValue = function (input, inCurr, outCurr) {
    return (
      (input * this.uahToForeignRates[outCurr]) / this.uahToForeignRates[inCurr]
    );
  };

  output = function () {
    return this.outputValue(this.inputValue, this.inCurr, this.outCurr);
  };
}
