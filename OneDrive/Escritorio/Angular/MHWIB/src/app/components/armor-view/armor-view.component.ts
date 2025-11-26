import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'armorViewComponent',
  standalone: true,
  imports: [],
  templateUrl: './armor-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArmorViewComponent { }
