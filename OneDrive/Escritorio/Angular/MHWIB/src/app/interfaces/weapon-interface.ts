/**
 * Define las estadísticas de daño de un arma.
 * Es crucial en la API de MHW, ya que 'display' es el valor que ve el jugador.
 */
export interface AttackStats {
  display: number; // El valor de ataque que se muestra en el juego.
  raw: number;     // El valor de ataque base (real) del arma.
}

/**
 * Define la afinidad (Chance de crítico).
 */
export interface AffinityStats {
    affinity: number; // Porcentaje de afinidad.
}

/**
 * Define las ranuras de joya (sockets) del arma.
 * 'rank' es el tamaño de la ranura (1, 2, 3).
 */
export interface WeaponSlot {
    rank: 1 | 2 | 3;
}

/**
 * Define el daño elemental y si está sellado/oculto.
 */
export interface ElementStats {
    type: 'fire' | 'water' | 'thunder' | 'ice' | 'dragon'; // Tipo elemental
    damage: number; // Cantidad de daño elemental
    hidden: boolean; // Si el elemento está sellado/oculto (necesita Free Elem/Despertar)
}

/**
 * Define los medidores de afilado/nitidez (Sharpness) del arma.
 * Son arrays que representan los diferentes colores (rojo, naranja, amarillo, verde, azul, blanco, púrpura).
 */
export interface Sharpness {
    red: number;
    orange: number;
    yellow: number;
    green: number;
    blue: number;
    white: number;
    purple: number;
}

export interface AssetsImage {
  icon: string;
  image: string;

}


// --- INTERFAZ PRINCIPAL DE ARMA ---

export interface WeaponInterface {
    id: number;
    name: string;
    type: string; // Tipo de arma (Great Sword, Long Sword, Hammer, etc.)
    rarity: number;
    attack: AttackStats; // Estadísticas de ataque
    attributes?: AffinityStats; // Afinidad
    defense: number; // Bonus de defensa que da el arma (opcional)
    elements?: ElementStats[] | null; // Daño elemental (o null si es puramente físico)
    slots: WeaponSlot[]; // Ranuras para joyas
    sharpness: {
        current: Sharpness; // Afilado actual
        max: Sharpness; // Afilado máximo (con Handicraft)
    };

    // Opcional: para armas específicas como Bowguns
    ammo?: any;

    // Opcional: La API puede incluir un campo para el árbol de mejoras.
    craftingInfo?: any;
    assets?: AssetsImage;
}
