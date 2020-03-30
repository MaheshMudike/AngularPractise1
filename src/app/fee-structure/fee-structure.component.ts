import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-structure',
  templateUrl: './fee-structure.component.html',
  styleUrls: ['./fee-structure.component.css']
})
export class FeeStructureComponent implements OnInit {
  totalfEES = [];
  constructor() { }

  ngOnInit() {
  console.log('fee ');
    this.totalfEES = [{ class: 'Nursery/kinterGarden/UKG', Fees: 20000,
     Books: 1000, culActivties: 1000 },
    { class: 'I', Fees: 30000, Books: 1000, culActivties: 1000  },
    { class: 'II', Fees: 40000 , Books: 2000, culActivties: 1000 },
    { class: 'III', Fees: 50000 , Books: 3000, culActivties: 1000 },
    { class: 'IV', Fees: 60000 , Books: 4000, culActivties: 1000  },
    { class: 'V', Fees: 70000 , Books: 5000, culActivties: 1000  },
    { class: 'VI', Fees: 80000 , Books: 6000, culActivties: 1000  },
    { class: 'VII', Fees: 90000, Books: 7000, culActivties: 1000   },
    { class: 'VIII', Fees: 100000, Books: 8000, culActivties: 1000  },
    { class: 'IX', Fees: 120000 , Books: 10000, culActivties: 1000 },
    { class: 'X', Fees: 150000 , Books: 10000, culActivties: 1000 }];
  }

  // addMeathod(x) {
  //   return this.totalfEES[x].Fees +  this.totalfEES[x].Books +  this.totalfEES[x].culActivties;
  //   // this.totalfEES.filter((value) => {
  //   //   console.log(value)
  //   // return value.Fees + value.Books + value.culActivties;
  //   // });

  // }

}
