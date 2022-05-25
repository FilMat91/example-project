import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variable-example',
  templateUrl: './variable-example.component.html',
  styleUrls: ['./variable-example.component.css']
})
export class VariableExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  get getVarString() : string
  {
    var output = "First output";
    var number = 5;
    if(number > 4)
    {
      var output = "Second output";
    }

    return output;
  }

  get getLetString() : string
  {
    let output = "First output";
    let number = 5;
    if(number > 4)
    {
      let output = "Second output";
    }

    return output;
  }

  get getConstString() : string
  {
    const output = "First output";
    const number = 5;
    if(number > 4)
    {
      const output = "Second output";
    }

    //output = 5; //Le constanti non sono modificabili a meno che non siano oggetti e la motifica è su uno specifico attributo
    return output;
  }

  getText(input: string) {
    return [`${input} output = "First output";`,
            `${input} number = 5;`,
            `if(number > 4)`,
            `{`,
            `${input} output = "Second output";`,
            `}`,
            `return output;`];
  }
}
