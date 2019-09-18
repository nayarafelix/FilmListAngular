import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../swapi.service';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  films:any;

  constructor(private swapiService:SwapiService) { }

  async ngOnInit() {
    
    var films = await this.swapiService.list();
    this.films = films['results'];
  }

}
