import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Observable} from 'rxjs';
// import { MARIACHIS } from './mock-mariachis';
import {MgServiceService} from './mg-service.service';
import { Mariachi } from './mariachi';

@Injectable({
  providedIn: 'root'
})
export class MgResolverService implements Resolve<Mariachi[]> {


  constructor(private mariachiService: MgServiceService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Mariachi[]> {
    const id = +route.paramMap.get('id');
    return this.mariachiService.getTheMariachis();
  }

}
