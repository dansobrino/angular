import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  title = 'Mariachis book';
  isLoggedIn = false;
  constructor(private location: Location) { }

  ngOnInit(): void {
    // document.getElementById('usaFlagImg').style.opacity = '100%';
    // this.getTheMariachis();
    // this.selectMe();
  }



  // getTheMariachis(): void {
  //   this.data.getTheMariachis().subscribe(mariachis => this.mariachis = mariachis);
  // }

  goHome() {
    window.location.href='/mariachis';
  }

  selectMe() {
    document.getElementById('loginlink').style.color = '#ffffff';
  }
  goDashboard(): void {
    this.location.back();
  }
  noBackBtn(){
    document.getElementById('backBtn').style.display = 'none';
    window.location.reload();
  }
  // goUsa() {
  //   window.location.href='/mariachis/usa';
  // }
  // goMex() {
  //   window.location.href='/mariachis/mex';
  // }
  // goOther() {
  //   window.location.href='/mariachis/other';
  // }
  // selectImgUsa() {
  //   document.getElementById('usaLinkImg').style.opacity = '100%';
  // }
  // selectImgMex() {
  //   document.getElementById('mexLinkImg').style.opacity = '100%'
  // }
  // selectImgOther() {
  //   document.getElementById('otherLinkImg').style.opacity = '100%';
  // }

}
