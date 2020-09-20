import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import {MgServiceService} from '../mg-service.service';
import {Mariachi} from '../mariachi';


@Component({
  selector: 'app-mg-detail',
  templateUrl: './mg-detail.component.html',
  styleUrls: ['./mg-detail.component.scss']
})
export class MgDetailComponent implements OnInit {
  title = 'Mariachi';
  dashboard = false;

  @Input() mariachi: Mariachi;

  constructor(private mgServiceService: MgServiceService, private route: ActivatedRoute, private location: Location) { 
  }

  ngOnInit(): void {
    this.resoleMe();
    // this.getMariachi();

    this.route.queryParams.subscribe(params => {
      this.mariachi = params['mariachi'];
    });

  }
  resoleMe() {
    this.mariachi = this.route.snapshot.data['mariachi'];
  }
  getMariachi(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.mgServiceService.getMariachi(id).subscribe(mariachi => this.mariachi = mariachi);
  }
  goBack(): void {
    // this.location.back();
    // window.location.href='/mariachis/dashboard';
    window.location.reload();
  }
}
