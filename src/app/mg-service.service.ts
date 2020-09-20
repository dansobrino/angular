import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Mariachi } from './mariachi';
import {MARIACHIS} from './mock-mariachis';

// import * as data from '../api/mariachis/mariachis.json';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    // Authorization: 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class MgServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  private mariachisUrl = '../api/mariachis/mariachis.json';

  getTheMariachis(): Observable<Mariachi[]> {
    return this.http.get<Mariachi[]>(this.mariachisUrl);
  }

  getMariachi(id: number): Observable<Mariachi> {
    return of(MARIACHIS.find(mariachi => mariachi.id === id));
  }

  selectedMariachi: Mariachi;
  mariachiDetails(mariachi: Mariachi) {
    this.selectedMariachi = mariachi;
  }

}

