import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector:'db-form',
  templateUrl: './duber-form.component.html',
  styleUrls: ['./duber-form.component.css']
})


export class DuberFormComponent {
  duberForm;
  constructor(private formBuilder: FormBuilder, private http: Http){
  }

  ngOnInit(){
    this.duberForm = this.formBuilder.group({
      zipcode: this.formBuilder.control('',Validators.compose([
      Validators.required,
      Validators.pattern('\\d{5}'),

      ])),
      budget: this.formBuilder.control('50',Validators.compose([
      Validators.required,
      Validators.pattern('[\\d]+')
      ]))
    });


  }


  onSubmit(value){
      console.log("sending request to ");
      let params = new URLSearchParams();
      params.set('zipcode', value.zipcode);
      params.set('budget', value.budget);
      this.http.get('http://127.0.0.1:3000/search/json',{search:params}).toPromise().then(result=>console.log(result.json()));
  }

}
