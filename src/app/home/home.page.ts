import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { PeliculasService } from './peliculas.service';
import { Result } from './peliculas.interface'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private peliculas: Result[] = [];

  constructor(private peliculasService: PeliculasService, private router: Router) {}

  ngOnInit(){
  	this.peliculasService.getDatos().subscribe(data => {console.log(data.results); this.peliculas = data.results})
  }
}
