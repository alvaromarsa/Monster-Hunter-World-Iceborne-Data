import { Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { MonsterViewComponent } from './components/monster-view/monster-view.component';
import { ArmorViewComponent } from './components/armor-view/armor-view.component';
import { WeaponsViewComponent } from './components/weapons/weapons-view/weapons-view.component';
import { confirmarSalidaGuard } from './guards/confirmar-salida.guard';

export const routes: Routes = [

  { path: '',
    component: MenuComponent,
  },
  { path: 'monsterViewComponent',
    component: MonsterViewComponent,
    canDeactivate: [confirmarSalidaGuard]
  },
  { path: 'armorViewComponent',
    component: ArmorViewComponent,
    canDeactivate: [confirmarSalidaGuard]
  },
    { path: 'weaponsViewComponent',
    component: WeaponsViewComponent,
    canDeactivate: [confirmarSalidaGuard]
  },

];
