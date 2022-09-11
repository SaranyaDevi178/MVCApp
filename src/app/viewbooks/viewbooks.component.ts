import { Component, OnInit } from '@angular/core';
import { BooksService } from '../bookservice.component';
import { Roles } from '../roles';
import { Category } from '../category';
import { UserModel } from '../users.component';
import { bookModel } from '../books.component';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent implements OnInit {

  bookContent='';
  roles:Roles[]=[];
  role:Roles={
    roleId:'',
    roleName:''
    
  }
  users:UserModel[]=[];
  user:UserModel={
    userId:0,
    userName:'',
    emailId:'',
    password:'',
    roleId:'',
    firstName:'',
    lastName:'',
    active:true
  }
  books:bookModel[] = [];
  book : bookModel = {
    bookId:0,
    bookName:'',
    categoryId:'',
    price:'',
    publisher:'',
    userId:0,
    publishedDate:new Date(),
    content:'',
    active:true,
    userModel:this.user
  }



 categories:Category[]=[];
  category:Category={
    categoryId:0,
    categoryName:''
  }
  constructor(private homepageservice:BooksService) { }



 ngOnInit(): void {
    this.onView();
  }
  onView(){
   
    this.homepageservice.getAllBooks().subscribe(
      response => { this.books = response}
    );;
    ;
  }
  onViewClick(book:bookModel)
  {
    console.log("checking");
    console.log(book.bookName);
    const  selectedOrder = this.books.find(books => books.bookName == book.bookName)
    console.log(selectedOrder);
    this.bookContent=selectedOrder?.content!;
    console.log(this.bookContent);
  }
}