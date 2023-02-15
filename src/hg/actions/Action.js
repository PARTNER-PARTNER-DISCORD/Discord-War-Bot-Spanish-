// Copyright 2019-2020 Campbell Crowley. All rights reserved.
// Author: Campbell Crowley (dev@campbellcrowley.com)
const crypto = require('crypto');

/**
 * @description Handler function for a generic action.
 * @typedef HungryGames~Action~ActionHandler
 * @type {Function}
 *
 * @param {HungryGames} hg HG context.
 * @param {HungryGames~GuildGame} game Game context.
 */

/**
 * @description Base for actions to perform in response to certain things that
 * happen during a hunger games.
 *
 * @memberof HungryGames
 * @inner
 * @interface
 */
class Action {
  /**
   * @description Create action.
   * @param {HungryGames~Action~ActionHandler} handler Action handler override.
   * @param {number} [delay=0] Delay calling the handler by this many
   * milliseconds after triggered.
   */
  constructor(handler, delay = 0) {
    if (typeof handler !== 'function') {
      throw new TypeError('El controlador no es una función.');
    }
    /**
     * @description The unique ID for this action. Probably globally unique,
     * definitely unique per-trigger in a guild.
     * @public
     * @type {string}
     */
    this.id = Action.createID();
    /**
     * @description Passed handler to fire once triggered.
     * @private
     * @type {HungryGames~Action~ActionHandler}
     * @constant
     */
    this._handler = handler;
    /**
     * @description Delay handler call by this many milliseconds after
     * triggered.
     * @public
     * @default 0
     * @type {number}
     */
    this.delay = delay || 0;
    /**
     * @description Data injected into save file that the `create` function uses
     * to restore data. Must be serializable.
     * @type {object}
     * @private
     * @default
     */
    this._saveData = {};
  }

  /**
   * @description Convert this object to serializable format for saving to file.
   * Injects data from `this._saveData`.
   * @public
   * @returns {{className: string, data: ?object}} Serializable object that can
   * be saved to file.
   */
  get serializable() {
    return {
      id: this.id,
      className: this.constructor.name,
      delay: this.delay,
      data: this._saveData,
    };
  }

  /**
   * @description Trigger the action to be performed.
   *
   * @type {HungryGames~Action~ActionHandler}
   * @public
   * @param {HungryGames} hg HG context.
   * @param {HungryGames~GuildGame} game Game context.
   * @param {...*} [args] Additional arguments to pass.
   */
  trigger(hg, game, ...args) {
    if (this.delay && !game.options.disableOutput) {
      setTimeout(() => this._handler(hg, game, ...args), this.delay);
    } else {
      this._handler(hg, game, ...args);
    }
  }

  /**
   * @description Create action from save data.
   * @public
   * @static
   * @abstract
   * @param {Discord~Client} client Bot client context to get object
   * references.
   * @param {string} id Guild ID this action is for.
   * @param {object} obj The parsed data from file.
   * @returns {HungryGames~Action} The created action.
   */
  static create(client, id, obj) {
    id;
    obj;
    client;
    throw new Error('La función de creación no se anula.');
  }

  /**
   * @description Generate an ID for an Action. Does not check for collisions.
   * @public
   * @static
   * @returns {string} Generated ID.
   */
  static createID() {
    return crypto.randomBytes(8).toString('hex').toUpperCase();
  }

  /**
   * @description Create an Action object from save data. Looks up action from
   * {@link HungryGames~Action~actionList}.
   * @public
   * @static
   * @param {Discord~Client} client Client reference for obtaining
   * discord object references.
   * @param {string} id The Guild ID this action is for.
   * @param {object} obj The object data from save file.
   * @returns {?Action} The created action, or null if failed to find the
   * action.
   */
  static from(client, id, obj) {
    if (typeof obj.className !== 'string' ||
        obj.className.length === 0) {
      console.error(obj.className, 'no es un nombre de acción');
      return null;
    }
    const action = Action[obj.className];
    let out = null;
    if (action) {
      try {
        out = action.create(client, id, obj.data);
      } catch (err) {
        console.error(err);
      }
      if (!out) {
        console.error('Action.js: Incapaz de crear', obj.className, id, obj);
        return null;
      }
      if (typeof obj.delay === 'number') {
        out.delay = obj.delay;
      }
      if (typeof obj.id === 'string') {
        out.id = obj.id;
      }
    } else {
      console.error(obj.className, 'no es una acción');
      return null;
    }
    return out;
  }
}

/**
 * @description List of available actions.
 * @public
 * @static
 * @type {Array.<{path: string, pickable: boolean}>}
 */
Action.actionList = [
  {path: './MemberAction.js'},
  {path: './ChannelAction.js'},
  {
    path: './GiveRoleAction.js',
    type: 'member',
    args: [{name: 'role', type: 'role'}],
  },
  {
    path: './TakeRoleAction.js',
    type: 'member',
    args: [{name: 'role', type: 'role'}],
  },
  {
    path: './SendMessageAction.js',
    type: 'channel',
    args: [{name: 'message', type: 'text'}],
  },
  {
    path: './RunCommandAction.js',
    type: 'channel',
    args: [{name: 'command', type: 'text'}, {name: 'author', type: 'member'}],
  },
  {path: './SendDayStartMessageAction.js', type: 'channel'},
  {path: './SendDayEndMessageAction.js', type: 'channel'},
  {path: './SendPlayerRankMessageAction.js', type: 'channel'},
  {path: './SendStatusListAction.js', type: 'channel'},
  {path: './SendTeamRankMessageAction.js', type: 'channel'},
  {path: './SendVictorAction.js', type: 'channel'},
  {path: './SendEventMessageAction.js', type: 'channel'},
  {path: './SendAutoplayingMessageAlertAction.js', type: 'channel'},
];

/**
 * @description Map of metadata for available triggers, to aid with UIs.
 * @public
 * @static
 * @type {object.<{
 *   order: number,
 *   types: string[],
 *   description: string
 * }>}
 */
Action.triggerMeta = {
  gameStart: {
    order: 10,
    types: ['member', 'channel'],
    description: 'Antes del inicio del juego.',
  },
  dayStart: {
    order: 20,
    types: ['member', 'channel'],
    description: 'Antes de que comience el día.',
  },
  eventInstant: {
    order: 30,
    types: ['member', 'channel'],
    description: 'Momento que ocurre el evento.',
  },
  eventPlayerDeath: {
    order: 31,
    types: ['member'],
    description: 'Jugadores que murieron durante el evento.',
  },
  eventPlayerRevive: {
    order: 31,
    types: ['member'],
    description: 'Jugadores que fueron revividos durante el evento.',
  },
  eventPlayerWound: {
    order: 31,
    types: ['member'],
    description: 'Jugadores que resultaron heridos durante el evento.',
  },
  eventPlayerHealed: {
    order: 31,
    types: ['member'],
    description: 'Jugadores que fueron curados durante el evento.',
  },
  eventPlayerKilled: {
    order: 31,
    types: ['member'],
    description: 'Jugadores que mataron a otro jugador durante el evento.',
  },
  eventPlayerGainWeapon: {
    order: 31,
    types: ['member'],
    description: 'Jugadores que obtuvieron un arma durante el evento.',
  },
  eventPlayerLoseWeapon: {
    order: 31,
    types: ['member'],
    description: 'Jugadores que perdieron un arma durante el evento.',
  },
  eventPlayerUseWeapon: {
    order: 31,
    types: ['member'],
    description: 'Jugadores que usaron un arma durante el evento, y no ganaron ni perdieron consumibles.',
  },
  eventPlayerUnAffected: {
    order: 31,
    types: ['member'],
    description: 'Jugadores cuyo estado no cambió durante el evento, pero participó en el evento.',
  },
  eventPlayerAffected: {
    order: 31,
    types: ['member'],
    description: 'Todos los jugadores en el evento.',
  },
  dayEnd: {
    order: 40,
    types: ['member', 'channel'],
    description: 'Después de que el día haya terminado.',
  },
  dayPlayerDead: {
    order: 41,
    types: ['member'],
    description: 'Después de que el día haya terminado, para todos los jugadores que estén muertos.',
  },
  dayPlayerAlive: {
    order: 41,
    types: ['member'],
    description: 'Después de que el día haya terminado, para todos los jugadores que estén vivos.',
  },
  dayPlayerWounded: {
    order: 41,
    types: ['member'],
    description: 'Después del día ha terminado, para todos los jugadores que están heridos.',
  },
  gameEnd: {
    order: 50,
    types: ['member', 'channel'],
    description: 'Después de que el juego haya terminado.',
  },
  gameAbort: {
    order: 50,
    types: ['member', 'channel'],
    description: 'Si el juego termina temprano con el comando.',
  },
  gamePlayerDead: {
    order: 51,
    types: ['member', 'channel'],
    description: 'Después del juego terminó, para todos los jugadores que están muertos.',
  },
  gamePlayerAlive: {
    order: 51,
    types: ['member', 'channel'],
    description: 'Una vez finalizado el juego, para todos los jugadores que estén vivos.',
  },
  gamePlayerWounded: {
    order: 51,
    types: ['member', 'channel'],
    description: 'Después del juego terminó, para todos los jugadores que están heridos.',
  },
  gamePlayerWin: {
    order: 52,
    types: ['member'],
    description: 'Después del juego terminó, para todos los jugadores que ganaron.',
  },
  gamePlayerLose: {
    order: 52,
    types: ['member'],
    description: 'Después del juego terminó, para todos los jugadores que perdieron.',
  },
};

module.exports = Action;

Action.actionList.forEach(
    (el) => delete require.cache[require.resolve(el.path)]);
Action.actionList.forEach((el) => {
  try {
    const obj = require(el.path);
    Action[obj.name] = obj;
    el.name = obj.name;
  } catch (err) {
    console.error(err);
  }
});
