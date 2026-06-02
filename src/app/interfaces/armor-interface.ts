
export interface DefenseStats {
  base: number;
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
 * Define una habilidad que proporciona la pieza de armadura.
 */
export interface ArmorSkill {
  id: number;
  name: string;
  description: string;
}

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



export interface AssetsImage {
  imageMale: string;
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
  skills: SkillProvided[]; // Array de habilidades que aporta esta pieza
  assets?: AssetsImage;
}
