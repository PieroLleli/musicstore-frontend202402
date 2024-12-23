import { Component, Input, OnInit } from '@angular/core';
import { Concert } from '../../shared/models/concert.model';
import { LowerCasePipe } from '@angular/common';
import { TextLimitPipe } from '../../shared/pipes/text-limit.pipe';

@Component({
  selector: 'app-event-card',
  imports: [LowerCasePipe, TextLimitPipe],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css',
})
export class EventCardComponent implements OnInit {
  @Input({ required: true }) data!: Concert;

  ngOnInit() {
    if (!this.data.imageUrl) {
      this.data.imageUrl =
        'https://static.vecteezy.com/system/resources/previews/002/290/513/non_2x/poster-template-with-abstract-musical-instruments-vector.jpg';
    }
  }
}
