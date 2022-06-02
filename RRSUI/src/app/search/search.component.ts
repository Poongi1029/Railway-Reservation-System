import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Train } from '../train';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

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
    this.getBookingList();
  }



getBookingList()
{
  this.bookservice.getAllTicket().subscribe((book: Book[])=>
  {
    console.log(book);
    this.books= book;
  });
}



}
