import { Component } from '@angular/core';
import { ElaborationService } from './services/elaboration/elaboration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simo-test';

  constructor(private elabServ:ElaborationService){
    const arrayOfNumbers= elabServ.fromStringToArrayOfNumbers('2 pippo 3.4 a 10');
    // console.log('console della funzione',arrayOfNumbers)

    const numbers=[2, 5, 100, -20, 8];

    // console.log('numbers prima',numbers)

    const arrayOfData= elabServ.filterAnomalies(numbers, 10, -10);
    // console.log('console della funzione 2',arrayOfData)

    // console.log('numbers dopo',numbers)
  }

}
