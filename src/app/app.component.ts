import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulademo';

  registerForm: any = FormGroup;
  form!: FormGroup;
  submitted = false;
  constructor( private formBuilder: FormBuilder){
    this.form=formBuilder.group({
      phone:['']
    })
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    //True if all the fields are filled
    if(this.submitted)
    {
      alert("Great!!");
    }

  }

  ngOnInit() {
    //Add User form validations
    this.registerForm = this.formBuilder.group({
      imageInput: ['', [Validators.required]],

    });
  }

  //file type validation
  onImageChangeFromFile($event:any)
  {
      if ($event.target.files && $event.target.files[0]) {
        let file = $event.target.files[0];
        console.log(file);
          if(file.type == "image/jpeg" || file.type == 'image/png' || file.type =='image/jpg') {
            console.log("correct");
            if(file.size < 200 * 200){
              console.log("O width and heigth")
              /* Checking height * width*/}
            if (file.size < 2000000) {
              console.log("Ok size")
              /* checking size here - 2MB */ }else{
                console.log("No ok size")
              alert(file.size)
            }
          }
          else {
            //call validation
            this.registerForm.reset();
            this.registerForm.controls["imageInput"].setValidators([Validators.required]);
            this.registerForm.get('imageInput').updateValueAndValidity();
          }
      }
  }
}
