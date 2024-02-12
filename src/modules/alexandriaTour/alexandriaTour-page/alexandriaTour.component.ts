import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-tour',
  templateUrl: './alexandriaTour.component.html',
  styleUrls: [ './alexandriaTour.component.scss' ]
})
export class AlexandriaTourComponent {

}
