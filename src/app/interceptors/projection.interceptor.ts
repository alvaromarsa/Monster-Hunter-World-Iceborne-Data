import type { HttpInterceptorFn } from '@angular/common/http';

const proyecciones = {
  weapon: JSON.stringify({ id: true, assets: { icon: true, image: true }, type: true, name: true, rarity: true,
                          attack: true, elements: true, attributes: true, defense: true}),

  monster: JSON.stringify({ id: true, type: true, name: true, species: true, description: true}),

  armor: JSON.stringify({ id: true, type: true, name: true, rarity: true, rank: true, resistances: true,
                          skills: true, defense: true, assets: true})
};

export const projectionInterceptor: HttpInterceptorFn = (req, next) => {

  let proyectar: any = null;

  // El secretario mira el sobre: "¿Para quién es la carta?"
  if (req.url.includes('/weapons')) {
    proyectar = proyecciones.weapon;
  } else if (req.url.includes('/armors')) {
    proyectar = proyecciones.armor;
  } else if (req.url.includes('/monsters')) {
    proyectar = proyecciones.monster;
  }

  // Si hemos encontrado un sello que le valga, se lo ponemos
  if (proyectar) {
    const copiaConSello = req.clone({
      setParams: { p: proyectar }
    });
    return next(copiaConSello);
  }

  // Si no es para nada de eso, que la carta siga su curso normal
  return next(req);

};
