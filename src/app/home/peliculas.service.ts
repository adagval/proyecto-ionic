import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from './peliculas.interface';



@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  peliculas:Result;

  constructor(private http: HttpClient) { }

  getDatos() {

  	return this.http.get<any> ('https://api.themoviedb.org/3/search/movie?api_key=3c1fc3bc755127c8a36ef966e8c6f70a&language=en-US&query=lord&page=1&include_adult=false');
    
  }

  /*getPeliculas(){

  	return this.getDatos().subscribe(data => this.peliculas = data.results)
    
  }*/

  /*getPelicula(id){
  	return {
  	...this.getDatos.find(pelicula => {
  	return this.peliculas.id === id
  	})
  }
 }*/
}