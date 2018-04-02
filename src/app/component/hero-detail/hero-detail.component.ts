import {Component, Input, OnInit} from '@angular/core';
import { Hero } from '../../model/hero';
import {HeroService} from '../../service/hero.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(private activatedRoute: ActivatedRoute,
              private heroService: HeroService,
              private location: Location
  ) {}

  ngOnInit() {
    this.setHero();
  }

  setHero(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');

    this.heroService.getHeroById(id)
      .subscribe(hero => this.hero = hero);
  }

  update(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
