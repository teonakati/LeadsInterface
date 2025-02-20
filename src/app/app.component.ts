import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CardComponent } from "./shared/card/card.component";
import { Lead } from './models/lead';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [MatTabsModule, CardComponent, CardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'LeadsInterface';
  leads!: Lead[];
  accepted!: Lead[];

  ngOnInit() {
    this.loadInvited();
  }

  changeTab(event: any) {
    let invited = event.index == 0;
    if (invited)
      this.loadInvited();
    else
      this.loadAccepted();
  }

  loadInvited() {
    console.log("invited");
    this.leads = [
      new Lead(
        '1',
        'John Smith',
        '123-456-7890',
        'john.smith@email.com',
        new Date('2025-02-10'),
        'Downtown',
        'Real Estate',
        'Interested in a 2-bedroom apartment',
        300000
      ),
      new Lead(
        '2',
        'Emma Johnson',
        '987-654-3210',
        'emma.johnson@email.com',
        new Date('2025-02-11'),
        'Greenwood',
        'Automotive',
        'Looking for a pre-owned SUV',
        120000
      ),
      new Lead(
        '3',
        'Michael Brown',
        '555-123-4567',
        'michael.brown@email.com',
        new Date('2025-02-12'),
        'Lakeside',
        'Consulting',
        'Needs financial advisory services',
        5000
      )
    ];
  }

  loadAccepted() {
    this.accepted = [
      new Lead(
        '4',
        'Sophia Turner',
        '555-9876',
        'sophia.turner@example.com',
        new Date('2025-02-10T15:45:00'),
        'Greenwich Village',
        'Real Estate',
        'Looking for a 2-bedroom apartment in the city center',
        450000
      ),
      new Lead(
        '5',
        'Liam White',
        '555-1234',
        'liam.white@example.com',
        new Date('2025-02-15T09:30:00'),
        'Brooklyn',
        'Automotive',
        'Interested in buying a used car under $15,000',
        15000
      ),
      new Lead(
        '6',
        'Emma Johnson',
        '555-5555',
        'emma.johnson@example.com',
        new Date('2025-02-18T12:00:00'),
        'Queens',
        'Services',
        'Looking for a reliable plumber for a home project',
        200
      )
    ];    

    console.log("Passou aqui");
    console.log(this.accepted);
  }
}
