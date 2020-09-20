import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MgServiceService} from '../mg-service.service';
import { Mariachi } from '../mariachi';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-mg-list',
  templateUrl: './mg-list.component.html',
  styleUrls: ['./mg-list.component.scss']
})
export class MgListComponent implements OnInit {
title = 'Mariachis book';
mariachis: Mariachi[];
// mgGroups: Mariachi[];
ulIndex = true;
ulIndex2 = false;
// ulIndexBtn1 = true;
// ulIndexBtn2 = false;

  constructor(private data: MgServiceService, private route: ActivatedRoute, private messageService: MessagesService) { }

  ngOnInit(): void {
    this.resoleMe();
    this.getTheMariachis();
  }
  
  getTheMariachis(): void {
    this.data.getTheMariachis().subscribe(mariachis => this.mariachis = mariachis);
  }

  // add(mariachiGroupName: string): void {
  //   mariachiGroupName = mariachiGroupName.trim();
  //   if (!mariachiGroupName) { return; }
  //   this.data.addMariachi( { mariachiGroupName } as Mariachi)
  //     .subscribe(mariachi => {
  //       this.mariachis.push(mariachi);
  //     });
  // }

  // delete(mariachi: Mariachi): void {
  //   this.mariachis = this.mariachis.filter(h => h !== mariachi);
  //   this.data.deleteMariachi(mariachi).subscribe();
  // }

  selectedMariachi: Mariachi[];
  onSelect(mariachi: Mariachi[]): void {
    this.selectedMariachi = mariachi;
  }

  resoleMe() {
    this.mariachis = this.route.snapshot.data['mariachis'];
  }

  hideVihuelaGuy() {
    const vId = 'vihuelaguy';
    document.getElementById(vId).style.display = 'none';
  }

  ulIndexBtn() {
    document.getElementById('ulIndex').style.display = 'none';
    document.getElementById('ulIndex2').style.display = 'block';
    document.getElementById('ulBtn2').style.display = 'block';
    document.getElementById('ulBtn').style.display = 'none';
  }
  ulIndexBtn2() {
    document.getElementById('ulIndex').style.display = 'block';
    document.getElementById('ulIndex2').style.display = 'none';
    document.getElementById('ulBtn2').style.display = 'none';
    document.getElementById('ulBtn').style.display = 'block';
  }

  goHome() {
    window.location.reload();
  }
  goUsa() {
    window.location.href='/mariachis/usa';
  }
  goMex() {
    window.location.href='/mariachis/mex';
  }
  goOther() {
    window.location.href='/mariachis/other';
  }

}
