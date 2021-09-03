import { Component, OnInit } from '@angular/core';
import { Iteam } from '../../interfaces/team.interface';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  teams: Iteam[];

  constructor() {}

  ngOnInit(): void {}

  receiveResult($event) {
    $event.subscribe((teams) => (this.teams = teams));
  }
}
