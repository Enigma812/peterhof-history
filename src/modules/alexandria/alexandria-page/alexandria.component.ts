import { AsyncPipe } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { Alexandria } from 'src/app/models/alexandria';
import { AlexandriaPlace } from 'src/app/models/alexandriaPlace';
import { trackBy } from 'src/modules/utils/track-by';

@Component({
  standalone: true,
  selector: 'app-alexandria',
  templateUrl: './alexandria.component.html',
  styleUrls: [ './alexandria.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ RouterLink, RouterOutlet, AsyncPipe ]
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
