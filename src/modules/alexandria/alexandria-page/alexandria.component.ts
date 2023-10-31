import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { Alexandria } from 'src/app/models/alexandria';
import { AlexandriaPlace } from 'src/app/models/alexandriaPlace';
import { trackBy } from 'src/modules/utils/track-by';

@Component({
  selector: 'app-alexandria',
  templateUrl: './alexandria.component.html',
  styleUrls: [ './alexandria.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlexandriaComponent {
  public alexandria$: Observable<Alexandria>;
  public alexandriaPlaces$: Observable<AlexandriaPlace[]>;
  public trackById = trackBy('id');

  constructor(
    private readonly _router: Router,
    private readonly _dataService: DataService
  ) {
    this.alexandria$ = this._dataService.alexandria$;
    this.alexandriaPlaces$ = this._dataService.alexandriaPlaces$;
  }

  public startPicture(): boolean {
    if (
      this._router.url === '/alexandria'
      // this.alexandria$.pipe(map((data) => data.path))
    ) {
      return true;
    }
    return false;
  }
}
