import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team/team.service';
import { Iplayer } from '../../interfaces/player.interface';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  players: Iplayer[];
  team: string;
  id: string;

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.teamService.getPlayersByTeam(this.id).subscribe((data) => {
      this.players = data.playerList;
      this.team = data.team
    });
  }
}
