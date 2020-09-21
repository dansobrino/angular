import { Component, OnInit } from '@angular/core';
import {Mariachi} from '../mariachi';

@Component({
  selector: 'app-dashboard-details',
  templateUrl: './dashboard-details.component.html',
  styleUrls: ['./dashboard-details.component.scss']
})
export class DashboardDetailsComponent implements OnInit {
  selectedMariachi: Mariachi[];
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(mariachi: Mariachi[]): void {
    this.selectedMariachi = mariachi;
  }

  noBackBtn(){
    document.getElementById('backBtn').style.display = 'none';
  }

  changeTarget() {
    document.getElementById('topMariachisLink').setAttribute('target', '_top')
  }

}