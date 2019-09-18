import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { SwapiService } from '../../swapi.service'

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.scss']
})
export class FilmeComponent implements OnInit {

  id:string;
  films:any;
  film: any;

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private swapiService:SwapiService
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
  }

  async ngOnInit() {
    var films = await this.swapiService.list();
    this.films = films['results'];

    this.films.map((film, index) => {
      if (index == this.id) {
        this.film = film;
      }
    });
  }

}
