import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateArmor', // Este es el nombre que usaremos en el HTML
  standalone: true        // Para que lo puedas usar fácilmente en tus componentes
})
export class TranslateArmorPipe implements PipeTransform {

  // Nuestro pequeño diccionario privado
  private readonly diccionario: { [key: string]: string } = {
    'low': 'Rango Bajo',
    'high': 'Rango Alto',
    'master': 'Rango Maestro',
    'head': 'Cabeza',
    'chest': 'Pecho',
    'gloves': 'Brazales',
    'waist': 'Cintura',
    'legs': 'Piernas',
    'armor': 'Armadura'
    // ¡Aquí puedes añadir todas las que quieras!
  };

  transform(value: string): string {
    if (!value) return value;

    // Convertimos a minúsculas por si acaso la API nos manda "HEAD" o "Head"
    const palabraBusqueda = value.toLowerCase();

    // Si la palabra está en nuestro diccionario, la devolvemos traducida.
    // Si no está, devolvemos la palabra original para no romper nada.
    return this.diccionario[palabraBusqueda] || value;
  }
}
