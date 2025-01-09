import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { EventCardComponent } from './event-card/event-card.component';
import { HomeService } from './home.service';
import { Genre } from '../shared/models/genre.model';
import { Concert } from '../shared/models/concert.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    FooterComponent,
    MatFormFieldModule,
    MatSelectModule,
    EventCardComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  genres: Genre[] = [];
  initialConcerts: Concert[] = [];
  currentConcerts: Concert[] = [];

  homeService = inject(HomeService);

  currentGenre = new FormControl(0);

  ngOnInit(): void {
    this.homeService.getData().subscribe((data) => {
      this.genres = data.genres;
      this.initialConcerts = data.concerts;
      this.currentConcerts = this.initialConcerts;
    });

    this.currentGenre.valueChanges.subscribe((genreId: number | null) => {
      this.currentConcerts =
        genreId === 0
          ? (this.currentConcerts = this.initialConcerts)
          : (this.currentConcerts = this.initialConcerts.filter(
              (z) => z.genreId === genreId
            ));
    });
  }
}
