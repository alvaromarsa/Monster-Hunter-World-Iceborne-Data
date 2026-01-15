import { HttpInterceptorFn } from '@angular/common/http';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {

  const apiBase = 'https://mhw-db.com';

  // 1. Miramos la carta. Si ya empieza por "http", no tocamos nada.
  // Pero si empieza por algo como "/weapons", le pegamos nuestra pegatina.
  if (!req.url.startsWith('http')) {

    // 2. IMPORTANTE: Las cartas originales no se pueden cambiar (son inmutables).
    // Tenemos que hacer una copia (clone) con la nueva dirección.
    const cartaConDireccionCompleta = req.clone({
      url: `${apiBase}${req.url}`
    });

    console.log('¡Pegatina pegada! Nueva dirección:', cartaConDireccionCompleta.url);

    // Enviamos la copia con la pegatina
    return next(cartaConDireccionCompleta);
  }

  // Si ya tenía dirección completa, la dejamos pasar tal cual
  return next(req);
};
