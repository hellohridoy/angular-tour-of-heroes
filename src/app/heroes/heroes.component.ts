import { Component, OnInit } from '@angular/core';

import { Hero } from '../Hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  standalone: true,
  imports: [
    HeroDetailComponent,
    NgForOf
  ],
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
