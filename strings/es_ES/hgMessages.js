// Copyright 2019 Campbell Crowley. All rights reserved.
// Author: Campbell Crowley (dev@campbellcrowley.com)
const Locale = require('../../src/locale/Locale.js');

/**
 * @description Español España.
 * @augments Locale
 */
class EsEsHGMessages extends Locale {
  /**
   * @description Constructor.
   */
  constructor() {
    super();
    this.title = 'Mensajes de HG';
    this.dayStart = [
      '¡El día {} ha comenzado!',
      'El sol se levanta en el día {}.',
      'Prepárese para el día {}, ¡está aquí!',
      '¡El día {} está sobre nosotros!',
      'La luz ha regresado a la arena. El día {} ha comenzado.',
      '¡Buenos días! Intenta sobrevivir al día {}.',
      'Día {}. Otro día, otra oportunidad de morir.',
      '#{}... ha comenzado...',
      '{} es el número de hoy. Hoy es el dia {}.',
      'Me gusta el número {}, significa que alguien morirá hoy.',
      'Hoy es el dia {}.',
      '¡Levántate y brilla! ¡Es el día {}!',
      'Cuidado, día {}...',
    ];
    this.dayEnd = [
      '¡El día {day} ha terminado con {alive} supervivientes!',
      '{alive} han sobrevivido para ver el final del día {day}.',
      '{alive} han sobrevivido al día {day}.',
      'El día {day} fue amable con solo {alive} supervivientes.',
      'El día {day} pone su sol en los {alive} supervivientes.',
      'Solamente {alive} ven el final del día {day}.',
      '{alive} sobrevivieron a los eventos del día {day}.',
      'El sol del día {day} se ha puesto sobre los {alive} restantes.',
    ];
    this.gameStart = ['¡Que empiecen los juegos!'];
    this.gameEnd = ['_unused'];
    this.bloodbathStart = [
      '¡El baño de sangre ha comenzado!',
      '¡LA SANGRE ESTÁ EN TODAS PARTES!',
      'Ahora comienza la diversión...',
      'La sangre viene...',
      '¿Quién quiere sangre?',
      'He preparado un baño para ti. ¡Un baño de sangre!',
      'La suciedad se empapará de sangre.',
      'Este es sólo el comienzo...',
      'Cuidado, se derramará sangre.',
      'Este juego no tendrá dioses ni reyes. Solo personas normales y corrientes.',
    ];
    this.bloodbathEnd = [
      'El baño de sangre ha terminado.',
      'Ahora, el juego ha comenzado.',
      'Se ha derramado sangre.',
      'El día acaba de comenzar.',
      'El baño de sangre puede haber terminado, ¡pero los juegos apenas han comenzado!',
      'El final del baño de sangre solo marca un nuevo comienzo.',
      'El final todavía no está a la vista.',
    ];
    this.eventStart = [
      'Los creadores del juego han decidido hacer el juego un poco más interesante...',
      'Se puede escuchar un eco a lo lejos...',
      'Alguien presiona un gran botón rojo...',
      'Este juego se estaba volviendo un poco aburrido, vamos a mezclarlo.',
      'Creo que mucha gente está viva. ¡Vamos a matar a algunos!',
      'La arena se estremece...',
      'Una sirena comienza a sonar...',
      'Un sentimiento de temor cae sobre la arena...',
      'Algo viene...',
    ];
    this.eventEnd = [
      'Se restablece un silencio en la arena.',
	  'Las cosas vuelven a la normalidad.',
      'El evento de la arena ha terminado.',
      'Ha sido suficiente locura, volvamos esta arena a la normalidad.',
      'Eventos en la arena, ¡que divertido!',
      'Una calma incómoda regresa a los restantes supervivientes.',
    ];
    this.lotsOfDeath = [
      '¡Oh! Hoy es un buen día para morir...',
      'Cuidado con hoy, la mayoría de ustedes morirá...',
      '¿Quién está listo para morir?',
      'Creo que voy a matar a un montón de ustedes hoy...',
      'Vaya, creo que alguien muere hoy...',
      '¡Oh, la humanidad!',
      'Tengo un mal presentimiento sobre hoy...',
      'Deberías tener miedo, mucho miedo de hoy...',
      'Lo juro, pase lo que pase hoy, no fue mi culpa...',
      'Por favor, no se enojen... A muchos de ustedes no les va a gustar hoy...',
      '#LaCulpaEsDelAdmin',
      'La sangre está en todas partes...',
      'Hoy, muchos morirán.',
    ];
    this.littleDeath = [
      'La mayoría de ustedes merece un día libre.',
      'La mayoría de ustedes tienen un descanso hoy.',
      'Probablemente estarás bien hoy.',
      'Entonces... solo a algunos de ustedes no les gustará hoy...',
      'Creo que todos ustedes merecen un descanso. Solo mataré a unos cuantos.',
      '¡Levanta la mano si quieres vivir! Oh, eso es mucho de ti...',
      'Puedes coger un aperitivo. Hoy no es tan interesante.',
      'Vaya, hoy no te maté lo suficiente. ¡Lo siento!',
      'Entonces, me volví perezoso, y solo maté a un par de ustedes.',
    ];
    this.noDeath = [
      'Vaya, ¿se suponía que la gente moriría hoy?',
      'Hmmm, vine a ver sangre, y no veo nada.',
      '¿Quién quiere morir hoy? Oh, nadie. Bien entonces.',
      'Entonces, me dijeron que a veces está bien no matar gente.',
      'Hoy me encontraba enfermo, y mi sustituto no pudo matar a nadie hoy, ¡lo siento! #LaCulpaEsDelAdmin',
      'Parece que todos ustedes son sorprendentemente buenos para sobrevivir...',
      'Pido disculpas por hoy.',
      'Diría que hoy es mi culpa, pero creo que el Admin debería asumir la culpa.',
      '¿Nadie? ¿Cómo? ¿Son los juegos? ¿La gente sobrevive a esto?',
      '¡Todos ustedes que viven, son pensamientos! ¡Ve a matar a alguien!',
      '¡Me estoy quedando dormido aquí! ¡Ve a hacer algo!',
    ];
    this.slaughter = [
      '¡Oh, los humanos! ¡La sangre está en todas partes!',
      '¡La matanza! Voy a tener que limpiar eso, ¿no?',
      '¿Meterse con los mejores y morir como el resto?', 
	  '¿Crees en el destino?',
      'Reportado por hacks.', 
	  'Se lo merecían. Probablemente.',
      '¿¡¿Quién más quiere un poco?!?', 
	  '¡Hay más de dónde vino eso!',
      'Bueno, eso sucedió...',
    ];
    this.teamRemaining = [
      '{} mirando 👌',
      '{} mirando 🔥',
      'Sería una pena que {} perdiera...',
      '¿Quién quiere un pedazo de {}?',
      '¿Apuestas a que {} pierde?',
      '¿Apuestas a que {} gana?',
      '¿Quién quiere ver que {} pierde todo?',
      '¡Oye, {}! ¡No lo arruines!',
    ];
    this.resurrected = [
      '¡{victim} ha[V|n] regresado de entre los muertos y fue[V|ron] devuelto[V|s] a la arena!',
      '¡{victim} ha[V|n] sido revivido[V|s] y regres[Vó|aron] a la arena!',
      '{victim} ha[V|n] resucitado y fue[V|ron] devuelto[V|s] a la arena!',
    ];
    this.patchWounds = [
      '{victim} se las arregla[V|n] para reparar sus heridas.',
      '{victim} se recupera[V|n].',
      '{victim} logra[V|n] vivir otro día.',
      '{victim} se cura[V|n].',
      'Las oraciones de {victim} son respondidas, y sus heridas han sido curadas milagrosamente.',
    ];
    this.bleedOut = [
      '{victim} no atiende[V|n] sus heridas y muere[V|n].',
      '{victim} se desmaya[V|n] por la pérdida de sangre y nunca más despierta[V|n].',
      '{victim} no pud[Vo|ieron] encontrar ayuda médica y muri[Vó|eron].',
      'La luz se desvanece de los ojos de {victim}.',
      '{victim} pierde[V|n] la voluntad de vivir.',
      '{victim} ya no puede[V|n] aferrarse a la vida y muere[V|n].',
    ];
    this.forceStateSuccessFew = '{0} será {1} al final del día.';
    this.forceStateSuccessMany =
        '{0} jugadores serán {1} al final del día.';
    this.forcedDeath = [
      '{victim} cae[V|n] muerto[V|s] después de que los creadores del juego presionaron un botón.',
      '{victim} muere[V|n] cuando los creadores del juego lo desean.',
      'A los creadores de juegos no les gustaba[V|n] {victim}, por lo que lo[V|s] matan.',
      '{victim} [Ves|son] asesinado[V|s] por los creadores del juego.',
    ];
    this.forcedHeal = [
      '{victim} se cura[V|n] milagrosamente después de que los creadores del juego presionaron un botón.',
      '{victim} se cur[Vó|aron] cuando los creadores del juego lo quisieron.',
      'Los creadores del juego realmente echaron de menos a {victim}, por lo que lo[V|s] curaron.',
      '{victim} fue[V|ron] curado[V|s] por los creadores del juego.',
    ];
    this.forcedWound = [
      '{victim} está[V|n] mortalmente herido[V|s] después de que los creadores del juego presionaron un botón.',
      '{victim} se hiri[Vó|eron] cuando los creadores del juego lo quisieron.',
      'A los creadores de juegos no les gust[Vó|aron] {victim}, así que le[V|s] hicieron daño.',
      '{victim} está[V|n] herido[V|s] por los creadores del juego.',
    ];
    this.giveWeapon = [
      '¡{attacker} recibe[A|n] {consumable} de un patrocinador!',
      'Un paracaídas con {consumable} cae delante de {attacker}.',
      'Un patrocinador tenía ganas de ser amable y darle a {attacker} {consumable}.',
      'Algunos patrocinadores decidieron que {attacker} necesita[A|n] {consumable}.',
    ];
    this.takeWeapon = [
      '{attacker} pierde {consumable} porque los creadores del juego pensaron que era[W|n] OP.',
      'A los creadores de juegos no les gustaba que {attacker} tenga[A|n] {consumable}, por lo que desapareci[Wó|eron].',
      'Los creadores del juego consideran que {attacker} no [Aes|son] digno[A|s] de tener {consumable}.',
    ];
  }
}

module.exports = new EsEsHGMessages();
