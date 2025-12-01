
export interface Weakness {
  element: 'fire' | 'water' | 'thunder' | 'ice' | 'dragon'; // Solo los 5 elementos principales
  stars: 0 | 1 | 2 | 3;
  condition: string | null; // Condición específica, por ejemplo, 'on broken horn'
}

/**
 * Define la estructura para los puntos de impacto o "Hitzones" de un monstruo.
 * Esto es esencial para saber dónde golpear.
 */
export interface Hitzone {
  bodyPart: string; // Parte del cuerpo (e.g., 'Head', 'Tail', 'Wing')
  cut: number;      // Daño de corte (Espada Larga, Espada Grande)
  impact: number;   // Daño de impacto (Martillo, Cuerno de Caza)
  ammo: number;     // Daño de munición (Ballesta, Arco)
  fire: number;
  water: number;
  thunder: number;
  ice: number;
  dragon: number;
}

/**
 * Define la estructura de los materiales que suelta el monstruo.
 */
export interface Reward {
  id: number;
  item: {
    id: number;
    name: string;
    description: string;
  };
  stack: number;
  condition: string; // Condición para obtenerlo (e.g., 'Body Carve', 'Tail Carve')
  percentage: number;
}

/**
 * Define la estructura de las ubicaciones donde aparece el monstruo.
 */
export interface Location {
  id: number;
  name: string;
  zoneCount: number;
}

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
  elements: string[]; // Elementos a los que el monstruo es resistente/inmune
  locations: Location[];
  weaknesses: Weakness[];
  hitzones: Hitzone[];
  rewards: Reward[];
  // También podríamos incluir resistencias (resistencia al veneno, etc.)
}
