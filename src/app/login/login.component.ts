import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onLogin(form: NgForm) {
    /*alert('Post added')*/
    /*this.newPost ='The user\'s post';*/
    // this.newPost = this.enteredValue;
    /*const post = {
      title: this.enteredTitle,  //store the data from textbox
      content: this.enteredContent //store the data from textarea
    };*/


    if(form.invalid){
      return;
    }else{
      console.log("Form Submitted!");

    }
    /*const post: Post = {
     // title: this.enteredTitle,  //store the data from textbox
      //content: this.enteredContent //store the data from textarea
      title: form.value.title,
      content: form.value.content
    };*/

    //to emit a new event pass the post as argument
    //this.postCreated.emit(post);

    form.resetForm();
  }
}
