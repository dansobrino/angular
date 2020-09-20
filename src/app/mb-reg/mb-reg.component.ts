import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-mb-reg',
  templateUrl: './mb-reg.component.html',
  styleUrls: ['./mb-reg.component.scss']
})
export class MbRegComponent implements OnInit {
  profileForm = this.fb.group(
    {
      mariachiType: ['', Validators.required],
      mariachiName: ['', Validators.required],
      userName:     ['', Validators.required],
      userEmail:    ['', Validators.required],
      userPass:     ['', Validators.required]
  });
  
  constructor(private fb: FormBuilder) { }
  
  ngOnInit(): void {
  }
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}
