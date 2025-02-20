import { Component, input, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { Lead } from '../../models/lead';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatDividerModule, DatePipe, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  standalone: true
})
export class CardComponent {
  @Input() lead!: Lead;
  @Input() type!: string;
}
