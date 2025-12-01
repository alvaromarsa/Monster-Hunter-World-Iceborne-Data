import { Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { MonsterViewComponent } from './components/monster-view/monster-view.component';
import { ArmorViewComponent } from './components/armor-view/armor-view.component';
import { WeaponsViewComponent } from './components/weapons-view/weapons-view.component';

export const routes: Routes = [

    { path: '',
    component: MenuComponent,
  },
  { path: 'monsterViewComponent',
    component: MonsterViewComponent,
  },
  { path: 'armorViewComponent',
    component: ArmorViewComponent,
  },
    { path: 'weaponsViewComponent',
    component: WeaponsViewComponent,
  },

];
