import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EventCardComponent } from './event-card/event-card.component';
import { HomeService } from './home.service';
import { Genre } from '../shared/models/genre.model';
import { NgFor } from '@angular/common';
import { Concert } from '../shared/models/concert.model';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    FooterComponent,
    MatFormFieldModule,
    MatSelectModule,
    EventCardComponent,
    NgFor,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  genres: Genre[] = [];
  concerts: Concert[] = [];

  homeService = inject(HomeService);

  ngOnInit(): void {
    this.homeService.getData().subscribe((data) => {
      console.log(data);

      this.genres = data.genres;
      this.concerts = data.concerts;
    });
  }
}
