import { Component, input, OnInit, output } from '@angular/core';
import { NgClass, NgIf, NgFor, TitleCasePipe } from '@angular/common';

import { WeaponInterface, WeaponTypeFilter } from '../../interfaces/weapon-interface';

@Component({
  selector: 'weapons-select',
  standalone: true,
  imports: [NgClass, TitleCasePipe],
  templateUrl: './weapons-select.html',

})
export class WeaponsSelect implements OnInit {

  // Input para tipos de arma (filtros por icono)
  weapontypes = input<WeaponTypeFilter[]>([]);

  // Input para todas las armas a mostrar
  //weapons = input<WeaponInterface[]>([]);

  // Input para el tipo seleccionado
  selectedType = input<string>('');

  // Output cuando se selecciona un tipo
  typeSelected = output<string>();

  // Output cuando se selecciona un arma específica
  //weaponSelected = output<WeaponInterface>();

  //propiedad para evitar que se muestren todas las armas al inicio
  //isSelectedWeapon :boolean = false;

  onSelectType(type: string): void {
    this.typeSelected.emit(type);
    //this.isSelectedWeapon = true;
  }
/*
  onSelectWeapon(weapon: WeaponInterface): void {
    this.weaponSelected.emit(weapon);
    console.log("estamos en onSelecWeapon " + weapon.name);
  }
*/
  ngOnInit(): void {

  }
}

