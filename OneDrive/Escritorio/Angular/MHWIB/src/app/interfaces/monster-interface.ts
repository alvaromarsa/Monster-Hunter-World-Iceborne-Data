// --- Interfaz Principal ---

/**
 * La interfaz principal del Monstruo. Contiene todos los datos relevantes
 * que usaremos en la lista y la vista de detalle.
 */
export interface MonsterInterface {
  id: number;
  name: string;
  type: string; // e.g., 'large monster'
  species: string; // e.g., 'elder dragon', 'fanged wyvern'
  description: string;
}
