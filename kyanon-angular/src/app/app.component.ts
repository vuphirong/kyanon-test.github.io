import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'kyanon';
  contactForm: NgForm;
  
  @ViewChild("popup") dataPopup: ElementRef;
  @ViewChild("name") name;
  @ViewChild("email") email;
  @ViewChild("phone") phone;
  @ViewChild("message") message;

  onContact(){
    this.dataPopup.nativeElement.style.display = 'block';
  }

  onClose(){
    this.dataPopup.nativeElement.style.display = 'none';
  }

  onSubmit(contactForm){
    if(contactForm.invalid){
      if(contactForm.value.name.trim() == ''){
        this.name.control.touched = true;
      }
      if(contactForm.value.email.trim() == ''){
        this.email.control.touched = true;
      }
      if(contactForm.value.phone.trim() == ''){
        this.phone.control.touched = true;
      }
      if(contactForm.value.message.trim() == ''){
        this.message.control.touched = true;
      }
      return;
    }
  }
}
