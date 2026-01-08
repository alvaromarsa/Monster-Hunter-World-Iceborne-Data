import { Component, input, output } from '@angular/core';
import { WeaponInterface } from '../../interfaces/weapon-interface';

@Component({
  selector: 'weapon-grid',
  standalone: true,
  imports: [],
  templateUrl: './weapon-grid.html',

})
export class WeaponGrid {

    //propiedad para evitar que se muestren todas las armas al inicio
  isSelectedWeapon :boolean = false;

    // Output cuando se selecciona un arma específica
  weaponSelected = output<WeaponInterface>();

    // Input para todas las armas a mostrar
  weapons = input<WeaponInterface[]>([]);

  onSelectWeapon(weapon: WeaponInterface): void {
    this.weaponSelected.emit(weapon);
    this.isSelectedWeapon = true;
  }
 }
