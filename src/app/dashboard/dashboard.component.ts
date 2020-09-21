import { Component, OnInit } from '@angular/core';
import { Mariachi } from '../mariachi';
import {ActivatedRoute} from '@angular/router';
import { MgServiceService } from '../mg-service.service';
import { window } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
mariachis: Mariachi[];
selectedMariachi: Mariachi[];

  constructor(private mgServiceService: MgServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.resoleMe();
    this.getTheMariachis();
  }

  getTheMariachis(): void {
    this.mgServiceService.getTheMariachis()
      .subscribe(mariachis => this.mariachis = mariachis.slice(0, 17));
  }

  resoleMe() {
    this.mariachis = this.route.snapshot.data['mariachis'];
  }

  onSelect(mariachi: Mariachi[]): void {
    this.selectedMariachi = mariachi;
  }

  hideDash() {
    // document.getElementById('mgDashboard').style.display = 'none';
    document.getElementById('backBtn').style.display = 'block';
  }
}
