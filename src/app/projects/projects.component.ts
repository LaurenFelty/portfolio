import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'WatchTower',
      description: 'A DynamoDB Capacity Visualization Tool',
      link: 'https://github.com/oslabs-beta/watchtower',
    },
    {
      title: 'Wander Wise',
      description: 'A Travel Planning Application',
      link: 'https://github.com/LaurenFelty',
    },
    {
      title: 'Pantry Partner',
      description: 'A Pantry Inventory Application',
      link: 'https://github.com/LaurenFelty/pantryPartner',
    },
  ];
}
