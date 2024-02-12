import { ChangeDetectionStrategy, Component, TemplateRef } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader } from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatToolbar,
    MatIconButton,
    MatIcon,
    RouterLink,
    RouterOutlet,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    TranslateModule
  ]
})
export class AppComponent {
  public title = 'peterhof-history';

  constructor(private readonly offcanvasService: NgbOffcanvas, private readonly _translate: TranslateService) {
    this._translate.addLangs([ 'ru' ]);
    this._translate.setDefaultLang('ru');
    this._translate.use('ru');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public openEnd(content: TemplateRef<any>) {
    this.offcanvasService.open(content, {
      position: 'end',
      panelClass: 'menu-nav',
      backdropClass: 'menu-background',
      container: '.app'
    });
  }
}
