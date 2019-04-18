// Copyright 2019 Campbell Crowley. All rights reserved.
// Author: Campbell Crowley (dev@campbellcrowley.com)

/**
 * @classdesc Event that can happen in a game.
 * @class HungryGames~Event
 *
 * @param {string} message The message to show.
 * @param {number} [numVictim=0] The number of victims in this event.
 * @param {number} [numAttacker=0] The number of attackers in this event.
 * @param {string} [victimOutcome=nothing] The outcome of the victims from this
 * event.
 * @param {string} [attackerOutcome=nothing] The outcome of the attackers from
 * this event.
 * @param {boolean} [victimKiller=false] Do the victims kill anyone in this
 * event. Used for calculating kill count.
 * @param {boolean} [attackerKiller=false] Do the attackers kill anyone in
 * this event. Used for calculating kill count.
 * @param {boolean} [battle] Is this event a battle?
 * @param {number} [state=0] State of event if there are multiple attacks
 * before the event.
 * @param {HungryGames~Event[]} [attacks=[]] Array of attacks that take place
 * before the event.
 * @property {string} message The message to show.
 * @property {string} [action] The action to format into a message if this is a
 * weapon event.
 * @property {{count: number, outcome: string, killer: boolean, weapon:
 * ?Object}} victim Information about the victims in this event.
 * @property {{count: number, outcome: string, killer: boolean, weapon:
 * ?Object}} attacker Information about the attackers in this event.
 * @property {{name: string, count: number}} victim.weapon The weapon
 * information to give to the player.
 * @property {{name: string, count: number}} attacker.weapon The weapon
 * information to give to the player.
 * @property {boolean} battle Is this event a battle event.
 * @property {number} state The current state of printing the battle messages.
 * @property {HungryGames~Event[]} attacks The attacks in a battle to show
 * before the message.
 * @property {number|string} [consumes] Amount of consumables used if this is a
 * weapon event.
 * @property {boolean} [custom=true] If the event is created by the user.
 */
function Event(
    message, numVictim = 0, numAttacker = 0, victimOutcome = 'nothing',
    attackerOutcome = 'nothing', victimKiller = false, attackerKiller = false,
    battle = false, state = 0, attacks = []) {
  this.message = message;
  this.victim = {
    count: numVictim,
    outcome: victimOutcome,
    killer: victimKiller,
    weapon: null,
  };
  this.attacker = {
    count: numAttacker,
    outcome: attackerOutcome,
    killer: attackerKiller,
    weapon: null,
  };
  this.battle = battle;
  this.state = state;
  this.attacks = attacks;
  this.custom = true;
}

/**
 * @classdesc A single battle in an Event.
 * @class HungryGames~Event~Battle
 *
 * @param {string} message The message of this battle event.
 * @param {number} attacker The damage done to the attacker.
 * @param {number} victim The damage done to the victim.
 */
Event.Battle = function(message, attacker, victim) {
  /**
   * Message of this battle event.
   * @public
   * @type {string}
   */
  this.message = message;
  /**
   * Information about attacker.
   * @public
   * @type {{damage: number}}
   */
  this.attacker = {damage: attacker};
  /**
   * Information about victim.
   * @public
   * @type {{damage: number}}
   */
  this.victim = {damage: victim};
};

module.exports = Event;