import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: [ './welcome.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeComponent {

}
