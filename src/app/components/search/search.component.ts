import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { SearchService } from '../../services/search/search.service';
import { Ileague } from '../../interfaces/league.inerface';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  leagues: Ileague[];
  myControl: FormControl = new FormControl('');
  filteredOptions: Observable<Ileague[]>;
  @Output() resultEvent = new EventEmitter();

  constructor(private searchService: SearchService) {
    this.myControl = new FormControl('');
  }

  ngOnInit(): void {
    this.searchService.getLeagues().subscribe((leagues) => {
      this.leagues = leagues;
    });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        return this._filter(value);
      })
    );
  }

  private _filter(value: string): Ileague[] {
    const filterValue = value ? value.toLowerCase() : '';

    if (this.leagues && this.leagues.length > 0) {
      return this.leagues.filter((league) => {
        return league.name.toLowerCase().includes(filterValue);
      });
    }
  }

  async onSubmit(): Promise<void> {
    const searchTeamResult = await this.searchService.getAllTeams(this.myControl.value);
    if (searchTeamResult) {
      this.resultEvent.emit(searchTeamResult);
    }
    this.myControl.reset();
  }
}
