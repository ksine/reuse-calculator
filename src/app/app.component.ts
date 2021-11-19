import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as basic_math from '@mferns/basic-math';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Reuse Calculator';
  calcForm = new FormGroup({
    firstNumber: new FormControl(),
    secondNumber: new FormControl()
    })
  n1: 0;
  n2: 0 ;
  retString: string[] = ['Math Operations:'];

  constructor(){}

  calculate(){
    let str = 'Add: ' + basic_math.add(this.n1, this.n2);
    this.retString.push(str);
    str = 'Subtract: ' + basic_math.subtract(this.n1, this.n2);
    this.retString.push(str);
    str = 'Multiply: ' + basic_math.multiply(this.n1, this.n2);
    this.retString.push(str);
    str = 'Divide: ' + basic_math.divide(this.n1, this.n2);
    this.retString.push(str);
    str = 'Exponent: ' + basic_math.power(this.n1, this.n2);
    this.retString.push(str);
    str = 'Square Root (of first + second): ' + basic_math.squareRoot(basic_math.add(this.n1,this.n2));
    this.retString.push(str);

  }

  submit() {
    this.n1 = this.calcForm.value.firstNumber;
    this.n2 =  this.calcForm.value.secondNumber;
    this.calculate();
  }
}
