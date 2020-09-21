import { Component, OnInit, Input } from '@angular/core';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import {MgServiceService} from '../mg-service.service';
import {Mariachi} from '../mariachi';

@Component({
  selector: 'app-dash-details',
  templateUrl: './dash-details.component.html',
  styleUrls: ['./dash-details.component.scss']
})
export class DashDetailsComponent implements OnInit {
  title = 'Mariachi';
  selectedMariachi: Mariachi[];

  @Input() mariachi: Mariachi;

  constructor(private mgServiceService: MgServiceService, 
              private route: ActivatedRoute, 
              private location: Location,
              private router: Router) { }

  ngOnInit(): void {
    this.resoleMe();
    this.getMariachi();
    // this.getMariachiId(this.mariachi);
  }
  resoleMe() {
    this.mariachi = this.route.snapshot.data['mariachi'];
  }

  getMariachi(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.mgServiceService.getMariachi(id).subscribe(mariachi => this.mariachi = mariachi);
  }

  onSelect(mariachi: Mariachi[]): void {
    this.selectedMariachi = mariachi;
  }

  
  goBack(): void {
    // this.location.back();
    window.location.reload();
  }

  getMariachiId(mariachi: Mariachi) {
    const mariachiId = mariachi ? mariachi.id : null;
    this.router.navigate(['mariachis/detail/', { id: mariachiId }]);
  }
  // save(): void {
  //   this.mgServiceService.updateMariachi(this.mariachi)
  //     .subscribe(() => this.goBack());
  // }

}
