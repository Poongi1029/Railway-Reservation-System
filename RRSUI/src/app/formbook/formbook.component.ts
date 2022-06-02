import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from '../book.service';
import { Book } from '../book';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-formbook',
  templateUrl: './formbook.component.html',
  styleUrls: ['./formbook.component.css']
})
export class FormbookComponent implements OnInit {
  [x: string]: any;
  books: Book[] = [];
  formValue!: FormGroup

  bookModelObject: Book = new Book;
  showAdd: boolean = false;
  showBtn: boolean = false;
  alltrainData: any;;
  

  constructor(private formBuilder: FormBuilder,private bookservice:BookService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group(
      {
        pnr: [''],
        ticket_id: [''],
        no_of_seats: [''],
        source: [''],
        destination: [''],
        date:[''],
        price:[''],
        time: ['']
      }
    )
  
  }

  clickBookTrain()
  {
    this.formValue.reset();
    this.showAdd=true;
    this.showBtn=false;
  }


  addBooking() {
    this.bookModelObject.pnr=this.formValue.value.pnr;
    this.bookModelObject.ticket_id= this.formValue.value.ticket_id;
    this.bookModelObject.no_of_seats=this.formValue.value.no_of_seats;
    this.bookModelObject.source = this.formValue.value.source;
    this.bookModelObject.destination = this.formValue.value.destination;
    this.bookModelObject.time=this.formValue.value.time;
    this.bookModelObject.date=this.formValue.value.date;
    this.bookModelObject.price=this.formValue.value.price;
  

  
    this.bookservice.postBooking(this.bookModelObject).subscribe((res:any[]) => {
      console.log(res);
     // alert("New record Added");
     Swal.fire(

      "Record Added",
  
      "Successfully",
  
      "success"
  
    )
     
    
    }
      , err => {
        //alert("Added");
        Swal.fire(

          "CHECK ONCE"
  
        )
       
      })
  }
  

 
  
  
}
