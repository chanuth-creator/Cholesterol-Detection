import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { TutorialService } from '../services/tutorial.service';
import { Validators,  FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-detail-form',
  templateUrl: './user-detail-form.component.html',
  styleUrls: ['./user-detail-form.component.scss']
})
export class UserDetailFormComponent{
  form: FormGroup;
  toppings = new FormControl();
  eatings = new FormControl();

  toppingList: string[] = ['Daily', 'Once a week', 'Once a month', 'Never', 'Other'];

  eatingList: string[] = ['Fast food', 'Home made food', 'Junk food', 'Street food', 'Sweets'];

  user = {
    name: '',
    age: '',
    height: '',
    weight: '',
    gender: '',
    smoker: '',
    exercise: '',
    disease: '',
    habits: '',
  };

  constructor(private service: TutorialService,  private router: Router, private fb: FormBuilder, private http: HttpClient){
    this.form  = this.fb.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required]],
      height:['',[Validators.required]],
      weight:['',[Validators.required]],
      gender:['',[Validators.required]],
      smoker:['',[Validators.required]],
      exercise:['',[Validators.required]],
      disease:['',[Validators.required]],
      habits:['',[Validators.required]]
   });
  }

  ngOnInit(): void {
  }

  onSubmit(){
      const data = {
        name: this.user.name,
        age: this.user.age,
        height: this.user.height,
        weight: this.user.weight,
        gender: this.user.gender,
        smoker: this.user.smoker,
        exercise: this.user.exercise,
        disease: this.user.disease,
        habits: this.user.habits,

      };

      this.service.send(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );

      this.service.result()
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
      
      this.router.navigate(['result']);
      }
}
