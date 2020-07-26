// Copyright 2019 Campbell Crowley. All rights reserved.
// Author: Campbell Crowley (dev@campbellcrowley.com)

/**
 * Option base.
 *
 * @memberof HungryGames~DefaultOptions
 * @inner
 */
class Option {
  /**
   * @description Default option constructor.
   * @param {*} value Value of this option.
   * @param {?string} [comment=null] Comment/description for the user about this
   * option.
   * @param {?string} [category=null] Category this option falls under for
   * showing user.
   */
  constructor(value, comment = null, category = null) {
    this._value = value;
    if (comment != null && typeof comment !== 'string') {
      throw new Error('El comentario no es un string');
    }
    this._comment = comment;
    if (category != null && typeof category !== 'string') {
      throw new Error('La categoría no es un string');
    }
    this._category = category;
  }
  /**
   * @description Get the value of this option.
   * @public
   * @type {*}
   */
  get value() {
    return this._value;
  }
  /**
   * @description Get the description of this option.
   * @public
   * @type {?string}
   */
  get comment() {
    return this._comment;
  }
  /**
   * @description Get the category of this option.
   * @public
   * @type {?string}
   */
  get category() {
    return this._category;
  }

  /**
   * @returns {string[]} Array of all keys for this option.
   */
  get keys() {
    const all = Object.entries(Object.getOwnPropertyDescriptors(this));
    const output = [];
    for (const one of all) {
      output.push(one[0].slice(1));
    }
    return output;
  }
  /**
   * @returns {HungryGames~DefaultOptions~Option} All variables of this option
   * fetched through their getters.
   */
  get entries() {
    const keys = this.keys;
    const output = {};
    for (const k of keys) {
      output[k] = this[k];
    }
    return output;
  }
}

/**
 * Number option.
 *
 * @memberof HungryGames~DefaultOptions
 * @inner
 * @augments HungryGames~DefaultOptions~Option
 */
class NumberOption extends Option {
  /**
   * @description Stores a number value with optional range.
   * @param {number} value Value of this option.
   * @param {?string} [comment=null] Comment/description for the user about this
   * option.
   * @param {?string} [category=null] Category this option falls under for
   * showing user.
   * @param {{min: number, max: number}} [range] Allowed range of this value.
   */
  constructor(value, comment, category, range) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new Error('El valor no es un número.');
    }
    super(value, comment, category);
    if (range) {
      this._range = {min: range.min, max: range.max};
    } else {
      this._range = null;
    }
  }
  /**
   * @description Get the range of allowable values for this option.
   * @returns {?{min: number, max: number}} Allowable range of values.
   */
  get range() {
    return this._range;
  }
}
/**
 * Boolean option.
 *
 * @memberof HungryGames~DefaultOptions
 * @inner
 * @augments HungryGames~DefaultOptions~Option
 */
class BooleanOption extends Option {
  /**
   * @description Stores a boolean.
   * @param {boolean} value Value of this option.
   * @param {?string} [comment=null] Comment/description for the user about this
   * option.
   * @param {?string} [category=null] Category this option falls under for
   * showing user.
   */
  constructor(value, comment, category) {
    if (typeof value !== 'boolean') throw new Error('El valor no es un booleano.');
    super(value, comment, category);
  }
}

/**
 * Object option. Shallow copies passed value and range.
 *
 * @memberof HungryGames~DefaultOptions
 * @inner
 * @augments HungryGames~DefaultOptions~Option
 */
class ObjectOption extends Option {
  /**
   * @description Stores any object. Shallow copies the object using
   * object.assign.
   * @param {object} value Value of this option.
   * @param {?string} [comment=null] Comment/description for the user about this
   * option.
   * @param {?string} [category=null] Category this option falls under for
   * showing user.
   * @param {{min: number, max: number}} [range] Range of allowable values for
   * this option.
   */
  constructor(value, comment, category, range) {
    if (typeof value !== 'object') throw new Error('El valor no es un objeto.');
    value = Object.assign({}, value);
    super(value, comment, category);
    if (range) {
      this._range = {min: range.min, max: range.max};
    } else {
      this._range = null;
    }
  }
  /**
   * @description Get the range of allowable values for this option.
   * @returns {?{min: number, max: number}} Allowable range of values.
   */
  get range() {
    return this._range;
  }
}

/**
 * One of multiple choices option.
 *
 * @memberof HungryGames~DefaultOptions
 * @inner
 * @augments HungryGames~DefaultOptions~Option
 */
class SelectOption extends Option {
  /**
   * @description Allows an option from a set of possible values.
   * @param {string} value Value of this option.
   * @param {?string} [comment=null] Comment/description for the user about this
   * option.
   * @param {?string} [category=null] Category this option falls under for
   * showing user.
   * @param {string[]} values Possible values.
   */
  constructor(value, comment, category, values) {
    if (!values || !Array.isArray(values)) {
      throw new Error('Los valores no son un array de strings');
    }
    let included = false;
    for (let i = 0; i < values.length; i++) {
      if (typeof values[i] !== 'string') {
        throw new Error('Los valores no son un array de strings');
      } else if (values[i] === value) {
        included = true;
      }
    }
    if (!included) throw new Error('El valor no está en valores dados');
    super(value, comment, category);
    this._values = values.slice(0);
  }
  /**
   * @description Get possible values for this option.
   * @returns {string[]} Array of possible values.
   */
  get values() {
    return this._values;
  }
}

/**
 * Default options for a HungryGames.
 *
 * @memberof HungryGames
 * @inner
 */
class DefaultOptions {
  /**
   * @description Creates a set of default options for a HungryGames.
   */
  constructor() {
    this._bloodbathOutcomeProbs = new ObjectOption(
        {kill: 30, wound: 6, thrive: 8, revive: 0, nothing: 56},
        'Probabilidades relativas de elegir un evento con cada resultado. Esto es para los eventos del baño de sangre.',
        'probabilities');
    this._playerOutcomeProbs = new ObjectOption(
        {kill: 22, wound: 4, thrive: 8, revive: 6, nothing: 60},
        'Probabilidades relativas de elegir un evento con cada resultado. Esto es para eventos diarios normales.',
        'probabilities');
    this._arenaOutcomeProbs = new ObjectOption(
        {kill: 64, wound: 10, thrive: 5, revive: 6, nothing: 15},
        'Probabilidades relativas de elegir un evento con cada resultado. Esto es para los eventos especiales de la arena.',
        'probabilities');
    this._arenaEvents = new BooleanOption(
        true,
        '¿Son posibles los eventos de arena? (Eventos como perros lobos o un volcán en erupción).',
        'probabilities');
    this._includeBots = new BooleanOption(
        false, 'Should bots be included in the games. If this is false, bots ' +
            'cannot be added manually.',
        'players');
    this._excludeNewUsers = new BooleanOption(
        false, 'En caso de que los nuevos usuarios que se unan a su servidor sean excluidos de los juegos por defecto. true agregará a todos los nuevos usuarios a la lista negra, false pondrá a todos los nuevos usuarios en el próximo juego automáticamente.',
        'players');
    this._allowNoVictors = new BooleanOption(
        false,
        'Debería ser posible finalizar un juego sin ningún ganador. Si es cierto, es posible que todos los jugadores mueran, haciendo que el juego termine con todos muertos. false fuerza a al menos un ganador.',
        'other');
    this._bleedDays = new NumberOption(
        2, 'Número de días que un usuario puede sangrar antes de morir.', 'other');
    this._battleHealth = new NumberOption(
        5, 'La cantidad de salud que cada usuario obtiene para una batalla.', 'other',
        {min: 1, max: 10});
    this._teamSize = new NumberOption(
        0, 'Tamaño máximo de equipos cuando se forman equipos automáticamente. 0 para deshabilitar equipos',
        'players');
    this._teammatesCollaborate = new SelectOption(
        'always',
        '¿Los compañeros de equipo trabajarán juntos? Si está desactivado, los compañeros de equipo pueden matarse entre sí, y solo habrá 1 vencedor. Si está habilitado, los compañeros de equipo no pueden matarse entre sí, y el juego termina cuando queda un EQUIPO, no un jugador. untilend significa que los compañeros de equipo trabajan juntos hasta el final del juego, esto significa que solo habrá 1 vencedor.',
        'players', ['disabled', 'always', 'untilend']);
    this._useEnemyWeapon = new BooleanOption(
        false,
        'Esto permitirá al atacante en caso de utilizar el arma de la víctima contra ellos.',
        'players');
    this._mentionVictor = new BooleanOption(
        false,
        '¿Debería etiquetarse / mencionarse al vencedor del juego (puede ser un equipo) para que se les notifique?',
        'messages');
    this._mentionAll = new SelectOption(
        'disabled',
        '¿Debería mencionarse a un usuario cada vez que algo le sucede en el juego? (se puede deshabilitar, para todos los eventos o para cuando el usuario muere)',
        'messages', ['disabled', 'all', 'death']);
    this._mentionEveryoneAtStart = new BooleanOption(
        false, '¿Deberían mencionarse a @everyone cuando se inicia el juego?',
        'messages');
    this._useNicknames = new BooleanOption(
        true, '¿Deberíamos usar los apodos del servidor personalizado del usuario en lugar del nombre de usuario de su cuenta? Los nombres solo cambian cuando se crea un nuevo juego.',
        'messages');
    this._delayEvents = new NumberOption(
        3500, 'Retraso en milisegundos entre cada evento que se imprime.',
        'other', {min: 1500, max: 30000}, 'time');
    this._delayDays = new NumberOption(
        7000, 'Retraso en milisegundos entre cada día que se imprime.', 'other',
        {min: 2500, max: 129600000},  // 1.5 days
        'time');
    this._probabilityOfArenaEvent = new NumberOption(
        0.25, 'Probabilidad cada día de que ocurra un evento de arena.',
        'probabilities', {min: 0, max: 1}, 'percent');
    this._probabilityOfBleedToDeath = new NumberOption(
        0.5, 'Probabilidad de que después de sangrar los días muera un jugador. Si no mueren, volverán a la normalidad.',
        'probabilities', {min: 0, max: 1}, 'percent');
    this._probabilityOfBattle = new NumberOption(
        0.05,
        'Probabilidad de que un evento sea reemplazado por una batalla entre dos jugadores.',
        'probabilities', {min: 0, max: 1}, 'percent');
    this._probabilityOfUseWeapon = new NumberOption(
        0.75,
        'Probabilidad de que cada jugador use su arma cada día si tiene una.',
        'probabilities', {min: 0, max: 1}, 'percent');
    this._eventAvatarSizes = new ObjectOption(
        {avatar: 64, underline: 4, gap: 4},
        'El número de píxeles del avatar de cada jugador será alto y ancho, la altura del estado subrayado y la brecha entre cada avatar. Esto es para todos los eventos normales y mensajes de eventos de arena.',
        'messages', {min: 0, max: 512});
    this._battleAvatarSizes = new ObjectOption(
        {avatar: 32, underline: 4, gap: 4},
        'El número de píxeles del avatar de cada jugador será alto y ancho, la altura del estado subrayado y la brecha entre cada avatar. Esto es para cada turno de batalla.',
        'messages', {min: 0, max: 512});
    this._victorAvatarSizes = new ObjectOption(
        {avatar: 80, underline: 4, gap: 4},
        'El número de píxeles del avatar de cada jugador será alto y ancho, la altura del estado subrayado y la brecha entre cada avatar. Esto es cuando se anuncian los ganadores del juego.',
        'messages', {min: 0, max: 512});
    this._numDaysShowDeath = new NumberOption(
        -1,
        'El número de días después de la muerte de un jugador para mostrarlo como muerto en la lista de estado después de cada día. -1 siempre mostrará jugadores muertos. 0 nunca mostrará jugadores muertos. Solo les mostraré el día de su muerte. 2 los mostrará por 2 días.',
        'messages', {min: -1, max: 100});
    this._showLivingPlayers = new BooleanOption(
        true,
        'Incluye a los jugadores vivos en las actualizaciones de estado. En lugar de solo jugadores heridos o muertos.',
        'messages');
    this._customEventWeight = new NumberOption(
        2, 'El peso relativo de los eventos personalizados. 2 significa que los eventos personalizados tienen el doble de probabilidades de ser elegidos.',
        'probabilities', {min: 0, max: 1000});
    this._anonForceOutcome = new BooleanOption(
        false, 'Los resultados forzados utilizarán eventos existentes en lugar de decir "Los creadores del juego" lo hicieron.',
        'other');
    this._disableOutput = new BooleanOption(
        false, 'Solo para propósitos de depuración. Quiero decir, puedes habilitarlo, pero hace que los juegos sean realmente aburridos. Depende de usted ¯\\_(ツ)_/¯',
        'other');
  }

  /**
   * @description Get bloodbathOutcomeProbs.
   * @returns {ObjectOption} Prob opts.
   */
  get bloodbathOutcomeProbs() {
    return this._bloodbathOutcomeProbs;
  }
  /**
   * @description Get playerOutcomeProbs.
   * @returns {ObjectOption} Prob opts.
   */
  get playerOutcomeProbs() {
    return this._playerOutcomeProbs;
  }
  /**
   * @description Get arenaOutcomeProbs.
   * @returns {ObjectOption} Prob opts.
   */
  get arenaOutcomeProbs() {
    return this._arenaOutcomeProbs;
  }
  /**
   * @description Get arenaEvents.
   * @returns {BooleanOption} Option value.
   */
  get arenaEvents() {
    return this._arenaEvents;
  }
  /**
   * @description Get includeBots.
   * @returns {BooleanOption} Option value.
   */
  get includeBots() {
    return this._includeBots;
  }
  /**
   * @description Get excludeNewUsers.
   * @returns {BooleanOption} Option value.
   */
  get excludeNewUsers() {
    return this._excludeNewUsers;
  }
  /**
   * @description Get allowNoVictors.
   * @returns {BooleanOption} Option value.
   */
  get allowNoVictors() {
    return this._allowNoVictors;
  }
  /**
   * @description Get bleedDays.
   * @returns {NumberOption} Option value.
   */
  get bleedDays() {
    return this._bleedDays;
  }
  /**
   * @description Get battleHealth.
   * @returns {NumberOption} Option value.
   */
  get battleHealth() {
    return this._battleHealth;
  }
  /**
   * @description Get teamSize.
   * @returns {NumberOption} Option value.
   */
  get teamSize() {
    return this._teamSize;
  }
  /**
   * @description Get teammatesCollaborate.
   * @returns {BooleanOption} Option value.
   */
  get teammatesCollaborate() {
    return this._teammatesCollaborate;
  }
  /**
   * @description Get useEnemyWeapon.
   * @returns {BooleanOption} Option value.
   */
  get useEnemyWeapon() {
    return this._useEnemyWeapon;
  }
  /**
   * @description Get mentionVictor.
   * @returns {BooleanOption} Option value.
   */
  get mentionVictor() {
    return this._mentionVictor;
  }
  /**
   * @description Get mentionAll.
   * @returns {SelectOption} Option value.
   */
  get mentionAll() {
    return this._mentionAll;
  }
  /**
   * @description Get mentionEveryoneAtStart.
   * @returns {BooleanOption} Option value.
   */
  get mentionEveryoneAtStart() {
    return this._mentionEveryoneAtStart;
  }
  /**
   * @description Get useNicknames.
   * @returns {BooleanOption} Option value.
   */
  get useNicknames() {
    return this._useNicknames;
  }
  /**
   * @description Get delayEvents.
   * @returns {NumberOption} Option value.
   */
  get delayEvents() {
    return this._delayEvents;
  }
  /**
   * @description Get delayDays.
   * @returns {NumberOption} Option value.
   */
  get delayDays() {
    return this._delayDays;
  }
  /**
   * @description Get probabilityOfArenaEvent.
   * @returns {NumberOption} Option value.
   */
  get probabilityOfArenaEvent() {
    return this._probabilityOfArenaEvent;
  }
  /**
   * @description Get probabilityOfBleedToDeath.
   * @returns {NumberOption} Option value.
   */
  get probabilityOfBleedToDeath() {
    return this._probabilityOfBleedToDeath;
  }
  /**
   * @description Get probabilityOfBattle.
   * @returns {NumberOption} Option value.
   */
  get probabilityOfBattle() {
    return this._probabilityOfBattle;
  }
  /**
   * @description Get probabilityOfUseWeapon.
   * @returns {NumberOption} Option value.
   */
  get probabilityOfUseWeapon() {
    return this._probabilityOfUseWeapon;
  }
  /**
   * @description Get eventAvatarSizes.
   * @returns {ObjectOption} Option value.
   */
  get eventAvatarSizes() {
    return this._eventAvatarSizes;
  }
  /**
   * @description Get battleAvatarSizes.
   * @returns {ObjectOption} Option value.
   */
  get battleAvatarSizes() {
    return this._battleAvatarSizes;
  }
  /**
   * @description Get victorAvatarSizes.
   * @returns {ObjectOption} Option value.
   */
  get victorAvatarSizes() {
    return this._victorAvatarSizes;
  }
  /**
   * @description Get numDaysShowDeath.
   * @returns {NumberOption} Option value.
   */
  get numDaysShowDeath() {
    return this._numDaysShowDeath;
  }
  /**
   * @description Get showLivingPlayers.
   * @returns {BooleanOption} Option value.
   */
  get showLivingPlayers() {
    return this._showLivingPlayers;
  }
  /**
   * @description Get customEventWeight.
   * @returns {NumberOption} Option value.
   */
  get customEventWeight() {
    return this._customEventWeight;
  }
  /**
   * @description Get anonForceOutcome.
   * @returns {BooleanOption} Option value.
   */
  get anonForceOutcome() {
    return this._anonForceOutcome;
  }
  /**
   * @description Get disableOutput.
   * @returns {BooleanOption} Option value.
   */
  get disableOutput() {
    return this._disableOutput;
  }

  /**
   * @returns {string[]} Array of all default option keys.
   */
  get keys() {
    const all = Object.entries(Object.getOwnPropertyDescriptors(this));
    const output = [];
    for (const one of all) {
      if (one[1].value instanceof Option) {
        output.push(one[0].slice(1));
      }
    }
    return output;
  }
  /**
   * @returns {object<HungryGames~DefaultOptions~Option>} All options in this
   * object.
   */
  get entries() {
    const keys = this.keys;
    const output = {};
    for (const k of keys) {
      output[k] = this[k].entries;
    }
    return output;
  }
}

module.exports = DefaultOptions;
