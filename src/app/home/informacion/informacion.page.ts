import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { PeliculasService } from '../peliculas.service'
import { Result } from '../peliculas.interface'
import { HomePage } from '../home.page'

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.page.html',
  styleUrls: ['./informacion.page.scss'],
})
export class InformacionPage implements OnInit {

  id;
  @Input() pelicula;
  
  constructor(private route: ActivatedRoute, private router: Router, private peliculasService: PeliculasService) { 

  	this.route.paramMap.subscribe(paramMap => {
    	const peliculaId = paramMap.get('id')
    	//this.pelicula = this.getPelicula(peliculaId);
    	//console.log(this.pelicula.results)
    }); 
    this.id =this.route.snapshot.paramMap.get('id')
  	
  }

  /*getPelicula(id){
  		return {
  		...this.peliculasService.getPeliculas().find(pelicula => {
  		return this.peliculas.id === id
  		})
  	  }
  	}*/

  ngOnInit() {


   }
}
