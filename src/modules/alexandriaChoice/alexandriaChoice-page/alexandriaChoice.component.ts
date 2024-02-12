import { AsyncPipe } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { AlexandriaPlace } from 'src/app/models/alexandriaPlace';
import { trackBy } from 'src/modules/utils/track-by';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-choice',
  templateUrl: './alexandriaChoice.component.html',
  styleUrls: [ './alexandriaChoice.component.scss' ],
  imports: [ RouterLink, AsyncPipe ]
})
export class AlexandriaChoiceComponent {
  public alexandriaPlace$: Observable<AlexandriaPlace | undefined>;
  public trackById = trackBy('id');

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _dataService: DataService
  ) {
    this.alexandriaPlace$ = this._route.params.pipe(
      map((params) => params['choicePath']),
      switchMap((choicePath) =>
        this._dataService.alexandriaPlaces$.pipe(map((places) => places.find((place) => place.path === choicePath))))
    );
  }
}
