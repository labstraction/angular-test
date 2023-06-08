import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElaborationService {


  constructor() { }

  fromStringToArrayOfNumbers(input:string){

    let array:number[]=[]

    const splittedString = input.split(' ');
    for (let i = 0; i < splittedString.length; i++) {
      const element = splittedString[i];
      const number= Number(element);
      if(!isNaN(number)){
        array.push(number);
      }
    }
    return array
  }

  filterAnomalies(numbers:number[],top:number,bottom:number){
    const numbersClone= [...numbers]
    for (let i = 0; i < numbersClone.length; i++) {
      const element = numbersClone[i];
      if (element>top) {
        numbersClone[i]= top;
      }
      if(element<bottom){
        numbersClone[i]=bottom;
      }
    }

    return numbersClone


  }


  keepEven(numbers: number[]): number[]{
    return numbers.filter(n => n%2 === 0)
  }

}
