import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    { title: 'WatchTower', description: 'A DynamoDB Capacity Visualization Tool', link: 'https://github.com/laurenfelty/watchtower' },
    { title: 'BookBanter', description: 'A Book Club Management App', link: 'https://github.com/laurenfelty/bookbanter' },
    { title: 'Bulls and Cows Game', description: 'A JavaScript-based algorithmic game', link: 'https://github.com/laurenfelty/bulls-and-cows' }
  ];
}

