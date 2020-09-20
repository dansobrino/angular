import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MgServiceService} from '../mg-service.service';
import { Mariachi } from '../mariachi';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-usa',
  templateUrl: './usa.component.html',
  styleUrls: ['./usa.component.scss']
})
export class UsaComponent implements OnInit {
  title = 'Mariachis book';
  mariachis: Mariachi[];
  constructor(private data: MgServiceService, private route: ActivatedRoute, private messageService: MessagesService) { }

  ngOnInit(): void {
    this.resoleMe();
    this.getTheMariachis();  
  }

  getTheMariachis(): void {
    this.data.getTheMariachis().subscribe(mariachis => this.mariachis = mariachis);
  }
  // getTheMariachis(): void {
  //   this.mariachis = this.data.getTheMariachis();
  // }

  selectedMariachi: Mariachi[];
  onSelect(mariachi: Mariachi[]): void {
    this.selectedMariachi = mariachi;
    // this.messageService.add('Selected mariachi from the USA list');
  }

  resoleMe() {
    this.mariachis = this.route.snapshot.data['mariachis'];
  }

  hideVihuelaGuy() {
    const vId = 'vihuelaguy';
    document.getElementById(vId).style.display = 'none';
  }

}
