import { Component, input, output } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { WeaponInterface } from '../../interfaces/weapon-interface';

@Component({
  selector: 'weapon-description',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './weaponDescription.html',
})
export class WeaponDescription {

  //weapons =  input<WeaponInterface[]>([]);
  weapon = input<WeaponInterface | null>(null);

  ngOnInit(): void {
    console.log('WeaponDescription initialized with weapon:', this.weapon()?.name);
  }
  // EMITE: Un aviso para que el jefe cierre este componente
  back = output<void>();
}
