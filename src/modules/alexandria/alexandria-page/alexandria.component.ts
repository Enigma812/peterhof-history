import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { Alexandria } from 'src/app/models/alexandria';

@Component({
  selector: 'app-alexandria',
  templateUrl: './alexandria.component.html',
  styleUrls: [ './alexandria.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlexandriaComponent {
  public alexandria$: Observable<Alexandria>;

  constructor(
    private readonly _dataService: DataService
  ) {
    this.alexandria$ = this._dataService.data$.pipe(map((data) => data.alexandria));
  }

}
