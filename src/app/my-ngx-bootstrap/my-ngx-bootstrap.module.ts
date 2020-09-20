import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

const myNgxElements = [
  AlertModule,
  BsDatepickerModule,
  BsDropdownModule,
  ModalModule,
  ButtonsModule
  
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    myNgxElements
  ],
  exports: [
    myNgxElements
  ]
})
export class MyNgxBootstrapModule { }
