
export interface DefenseStats {
  base: number;
  max: number;
  augmented: number;
}

/**
 * Define la estructura de las resistencias elementales.
 */
export interface ResistanceStats {
  fire: number;
  water: number;
  thunder: number;
  ice: number;
  dragon: number;
}

/**
 * Define una ranura de joya ("slot").
 * El nivel de la ranura indica la joya más grande que se puede insertar.
 */
export interface ArmorSlot {
  rank: 1 | 2 | 3;
}

/**
 * Define una habilidad que proporciona la pieza de armadura.
 */
export interface ArmorSkill {
  id: number;
  slug: string; // Nombre legible para la URL (e.g., 'attack-boost')
  name: string;
  description: string;
}

/**
 * Define la estructura de la habilidad y el nivel que proporciona la armadura.
 */
/**
 * Forma en la que la API pública devuelve las habilidades en el array `skills`.
 *
 * Ejemplo de la API:
 * {
 *   id: number,
 *   level: number,
 *   modifiers: { ... },
 *   description: string,
 *   skill: number,       // referencia numérica al skill
 *   skillName: string
 * }
 *
 * Además, en algunos contextos internos `skill` puede venir como objeto `ArmorSkill`.
 */
export interface SkillProvided {
  // identificador del entry (API devuelve `id` en cada elemento de `skills`)
  id?: number;

  // la API devuelve `skill` como número (id) pero algunos mapeos internos usan
  // un objeto `ArmorSkill`. Permitimos ambos para mayor compatibilidad.
  skill: number | ArmorSkill;

  // nivel que aporta la pieza
  level: number;

  // datos extra que la API incluye (puede estar vacío)
  modifiers?: Record<string, any>;

  // la API incluye aquí la descripción de la habilidad
  description?: string;

  // nombre legible que la API puede devolver
  skillName?: string;
}

/**
 * Define la información de un bonus de set al que pertenece la pieza.
 */
export interface ArmorSetBonus {
  id: number;
  name: string; // Nombre del set (e.g., 'Teostra Master')
  pieces: number; // Número de piezas del set requeridas para el bonus
  skill: ArmorSkill; // La habilidad que se activa con el bonus
}

export interface AssetsImage {
  imageMale: string;
  imageFemale: string;

}


// --- Interfaz Principal ---

/**
 * La interfaz principal para una Pieza de Armadura individual.
 */
export interface ArmorInterface {
  id: number;
  name: string;
  type: 'head' | 'chest' | 'arms' | 'waist' | 'legs'; // Tipo de pieza
  rank: 'low' | 'high' | 'master'; // Rango de la armadura (Master es Iceborne)
  rarity: number;
  defense: DefenseStats;
  resistances: ResistanceStats;
  slots: ArmorSlot[]; // Array de ranuras disponibles
  skills: SkillProvided[]; // Array de habilidades que aporta esta pieza
  setBonus: ArmorSetBonus | null; // El bonus de set al que pertenece (si aplica)
  assets?: AssetsImage;
}
