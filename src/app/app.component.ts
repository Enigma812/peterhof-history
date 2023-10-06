import { ChangeDetectionStrategy, Component, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public title = 'peterhof-history';

  constructor(private readonly offcanvasService: NgbOffcanvas) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, {
      position: 'end',
      panelClass: 'menu',
      backdropClass: 'menu-background',
      container: '.app'
    });
  }
}
