import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, ReplaySubject, Subject, map } from 'rxjs';

import { Alexandria } from './models/alexandria';
import { AlexandriaPlace } from './models/alexandriaPlace';
import { Data } from './models/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data$: Observable<Data>;
  public alexandria$: Observable<Alexandria>;
  public alexandriaPlaces$: Observable<AlexandriaPlace[]>;
  private readonly _dataSubject: Subject<Data>;

  constructor(
    private readonly _http: HttpClient
  ) {
    this._dataSubject = new ReplaySubject<Data>();
    this.data$ = this._dataSubject.asObservable();
    this.alexandria$ = this.data$.pipe(map((data) => data.alexandria));
    this.alexandriaPlaces$ = this.alexandria$.pipe(map((place) => place.alexandriaPlaces ?? []));
    this.fetchData();
  }

  private fetchData(): void {
    this._http.get<Data>('assets/data/data.json')
      .pipe(takeUntilDestroyed())
      .subscribe((data) => {
        this._dataSubject.next(data);
      });
  }
}
