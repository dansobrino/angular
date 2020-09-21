import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

profileForm = this.fb.group(
  {
  userName: ['', Validators.required],
  userPass: ['', Validators.required]
});

constructor(private fb: FormBuilder) { }

ngOnInit(): void {
  // this.selectMe();
}

onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.profileForm.value);
}

selectMe() {
  document.getElementById('loginlink').style.color = '#ffffff';
}

}
