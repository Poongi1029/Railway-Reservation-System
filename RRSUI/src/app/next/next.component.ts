import { Component, OnInit } from '@angular/core';
import { Train } from '../train';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {

   trains: Train[] = [];
   searchText:any;
 
  constructor(private trainService:TrainService) { }

  ngOnInit() {
    this.trainService.getTrain().subscribe((data: Train[])=>{
      console.log(data);
     this.trains=data;
    });
  }

  

 
}