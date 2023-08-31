import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';
import { database } from 'src/assets/data';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private hero :HeroService,private router : Router){
  }
database=this.hero.getData();
}
