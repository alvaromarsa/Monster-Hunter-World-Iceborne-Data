import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'monsterViewComponent',
  standalone: true,
  imports: [],
  templateUrl: './monster-view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonsterViewComponent { }
