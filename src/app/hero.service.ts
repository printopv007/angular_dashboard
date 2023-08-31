import { Injectable } from '@angular/core';
import { database } from 'src/assets/data';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {}
  getData(){
    return database
     } 
}
