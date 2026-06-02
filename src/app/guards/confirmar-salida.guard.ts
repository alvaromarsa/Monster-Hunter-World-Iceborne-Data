import { CanDeactivateFn } from '@angular/router';

export interface PuedeDesactivar {
  puedeSalir: () => boolean;
}

export const confirmarSalidaGuard: CanDeactivateFn<PuedeDesactivar> = (component) => {

  if (component.puedeSalir && !component.puedeSalir()) {
    return confirm('¿Seguro que quieres salir?');
  }
  return true;
};
