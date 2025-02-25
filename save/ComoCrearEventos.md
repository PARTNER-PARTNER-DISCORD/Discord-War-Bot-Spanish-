# EJEMPLOS DE CREACIÓN DE EVENTOS

## ACCIONES DE JUGADORES (player)

```json
{
	"message":"acción_ejecutable",
	"attacker":{información_atacantes},
	"victim":{información_victimas},
	"id":"id_acción",
	"custom":true,
  //"_reference":"referencia",
	"creator":"user_ID"
}
```

- acción_ejecutable => narra lo que ha sucedido
- información_atacantes => VER VARIABLES
- información_victimas => VER VARIABLES
- id__acción => custom/{timestamp}-{código}
  - timestamp de cuando se creó el evento, lo puedes obtener en https://www.epochconverter.com/ (en milisegundos)
  - código para que puedas identificar el evento
-  referencia => La referencia de la que hace el evento
-  user_ID => ID de Discord del usuario que ha creado el evento

*// Parámetros opcionales*

## BAÑOS DE SANGRE (bloodbath)

```json
{
	"message":"acción_ejecutable",
	"attacker":{información_atacantes},
	"victim":{información_victimas},
	"id":"id_baño",
	"custom":true,
  //"_reference":"referencia",
	"creator":"user_ID"
}
```

- acción_ejecutable => narra lo que ha sucedido
- información_atacantes => VER VARIABLES
- información_victimas => VER VARIABLES
- id__baño => custom/{timestamp}-{código}
  - timestamp de cuando se creó el evento, lo puedes obtener en https://www.epochconverter.com/ (en milisegundos)
  - código para que puedas identificar el evento
- referencia => La referencia de la que hace el evento
- user_ID => ID de Discord del usuario que ha creado el evento

*// Parámetros opcionales*

## ARMAS (weapon)

### CREAR ARMA

{
	{
	"id":"id__arma",
	"custom":true,
	"creator":"user_ID",
	"type":"weapon",
	"consumable":"nombre_consumibles",
	"name":"nombre_arma",
	"outcomes":[
		eventos_con_armas
	]
}

- id__arma => custom/{timestamp}-{código}
  - timestamp de cuando se creó el evento, lo puedes obtener en https://www.epochconverter.com/ (en milisegundos)
  - código para que puedas identificar el arma del evento
- user_ID => ID de Discord del usuario que ha creado el evento
- nombre_consumibles => Nombre de lo que consume el arma. (Las pistolas consumen balas, los arcos consumen flechas, ...). Si no hay consumibles se pone el mismo nombre que el arma. (La madera consume madera, las granadas consumen granadas, ...).
- nombre_arma => nombre del arma
- eventos_con_armas => VER EVENTOS CON ARMAS

## EVENTOS CON ARMAS

```json
{
  "id":"id_evento_arma",
  "message":"acción_ejecutable",
  "custom":true,
  "creator":"user_ID",
//"action":acción_realizada_por_atacantes,
  "victim":{información_victimas},
  "attacker":{información_atacantes},
//"battle":true,
//"_reference":"referencia",
  "consumes":numero_consumido
},
```

# id_evento_arma => identifica el evento en concreto
# acción_ejecutable => narra lo que ha sucedido
# user_ID => ID de Discord del usuario que ha creado el evento
# información_victimas => VER VARIABLES
# información_atacantes => VER VARIABLES
# acción_realizada_por_atacantes => solamente tienes que poner la acción que hicieron (mata[A|n] a, hiere[A|n] a,...)
# "battle":true, => añadir si esto ocurre en una batalla
# referencia => La referencia de la que hace el evento
# numero_consumido => numero de consumibles utilizados en la acción. Si quieres que se consuma uno por atacante/victima solamente hay que poner "A"/"V". Para varios se le puede poner un número delante de "A"/"V", es decir, "2A"/"2V", "3A"/"3V", ...
// Parámetros opcionales

## VARIABLES

# {attacker} Atacante[A|s]
# {victim} Victima[V|s]
# {weapon} Arma[W|s]
# {consumable} Consumible[C|s]
# {owner} Propietario del arma
# {dead} Muerto[D|s]

# información_victimas / información_victimas :u
  ## "count":"número" => Número de participantes en el evento. Si el número es negativo, se trata del número mínimo de participantes.
  ## "outcome":"opción" => Que les sucede a los participantes terminado el evento.
    ### "nothing" - No les ocurrió nada.
		### "dies" - Murieron.
		### "thrives" - Se curaron
		### "revived" - Revivieron
		### "wounded" - Se hirieron
  ## "weapon": { "id": "id_arma", "count": consumibles }
    ### id_arma => ID del arma ganada en el evento.
    ### consumibles => Número de consumibles obtenidos en el evento.

# Armas:
	## granada
	## explosivo
	## alcohol
	## tirachinas
	## pistola
	## arco
	## cuchillo
	## machete
	## cuchilloarrojadizo
	## pala
	## maza
	## espada
	## hacha
	## cepillodedientes
	## cuerda
	## veneno
	## lanza
	## madera

{
  "bloodbath": [
    
	//Ejemplo básico:
	
	{
      "message": "¡{attacker} apuñala a {victim} en la espalda con un tridente!",
      "attacker": { "count": "1", "outcome": "nothing", "killer": true},
      "victim": { "count": "-1", "outcome": "dies" }
    },
	
	// Parámetros de message:
		// {attacker} - Atacante[A|s]
		// {victim} - Victima[V|s]
	// Parámetros de attacker/victim:
		// "count": "*", - Sustituya * por el numero de atacantes/victimas que quiera para la acción. Si no hay atacantes/victimas, establézcalo en 0. Si se pone un número negativo, se trata del número mínimo de atacantes/victimas que hay en la acción.
		// "outcome": "nothing", - Estado del atacante/victima al terminar la acción.
			// "nothing" - No le ocurrió nada.
			// "dies" - Murió.
			// "thrives" - Se curó
			// "revived" - Revivió
			// "wounded" - Se hirió
		// "weapon": { "name": "*", "count": ** } - Objeto conseguido por atacantes/victimas.
			// * - Nombre del arma/consumible
				// granada
			// ** - Cantidad

	// Ejemplo más avanzado

    {
      "message": "{attacker} finds a grenade in the cornucopia.",
      "attacker": { "count": "1", "outcome": "nothing", "weapon": { "name": "grenade", "count": 1 } },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{victim} grabs a gun with 6 shots in it.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "nothing", "weapon": {"name": "gun", "count": 6 } }
    },
    {
      "message": "{victim} grabs a gun that may or may not work!",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "nothing", "weapon": {"name": "gun", "count": 6 } }
    },
    {
      "message": "{victim} grabs a gun that may or may not work!",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "nothing" }
    },
    {
      "message": "{victim} grabs a gun that definitely does not work.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "nothing" }
    },
    {
      "message": "{attacker} finds a gun with one bullet, and kills {victim} with it!",
      "attacker": { "count": "1", "outcome": "nothing", "killer": true },
      "victim": { "count": "1", "outcome": "dies" }
    },
    {
      "message": "{attacker} finds a gun with one bullet, but misses {victim} with it!",
      "attacker": { "count": "1", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "nothing" }
    },
    {
      "message": "{attacker} finds a gun with one bullet, and {victim} both die somehow!",
      "attacker": { "count": "1", "outcome": "nothing", "killer": true },
      "victim": { "count": "2", "outcome": "dies" }
    },
    {
      "message": "{victim} end[Vs|] their own [Vlife|lives] with [Va |]butter [Vknife|knives]!",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} grabs a shovel.",
      "attacker": { "count": "1", "outcome": "nothing", "weapon": { "name": "shovel", "count": "1" } },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} grab[As|] a backpack and retreat[As|].",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} and {victim} fight for a bag. {victim} gives up and runs away.",
      "attacker": { "count": "1", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "nothing" }
    },
    {
      "message": "{attacker} and {victim} fight for a bag. {attacker} gives up and runs away.",
      "attacker": { "count": "1", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "nothing" }
    },
    {
      "message": "{attacker} finds a bow, 5 arrows, and a quiver.",
      "attacker": { "count": "1", "outcome": "nothing", "weapon": { "name": "bow", "count": 5 } },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} finds a bow, arrows and a quiver, and manages to kill {victim}.",
      "attacker": { "count": "1", "outcome": "nothing", "killer": true, "weapon": { "name": "bow", "count": 2 } },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} take[As|] a handful of throwing knives.",
      "attacker": { "count": "-1", "outcome": "nothing", "weapon": { "name": "throwingknives", "count": 5 } },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} takes a mace out of {victim}'s hands.",
      "attacker": { "count": "1", "outcome": "nothing", "weapon": { "name": "mace", "count": 1 } },
      "victim": { "count": "1", "outcome": "nothing" }
    },
    {
      "message": "{attacker} stays near the cornucopia for resources.",
      "attacker": { "count": "1", "outcome": "nothing" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} gather[As|] food.",
      "attacker": { "count": "-1", "outcome": "thrives" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} grabs a sword.",
      "attacker": { "count": "1", "outcome": "nothing", "weapon": { "name": "sword", "count": 1 } },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} takes a spear from the cornucopia.",
      "attacker": { "count": "1", "outcome": "nothing", "weapon": { "name": "spear", "count": 1 } },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} manages to find a bag full of explosives.",
      "attacker": { "count": "1", "outcome": "nothing", "weapon": { "name": "explosive", "count": 3 } },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} collect[As|] supplies.",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} grabs all of the alcohol.",
      "attacker": { "count": "1", "outcome": "nothing", "weapon": { "name": "alcohol", "count": 3 } },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} takes a tent and runs away.",
      "attacker": { "count": "1", "outcome": "nothing" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{victim} grabs {attacker}'s backpack, not realizing {attacker} lit the fuse.",
      "attacker": { "count": "1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} breaks {victim}'s nose for a slice of bread!",
      "attacker": { "count": "1", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "wounded" }
    },
    {
      "message": "{attacker} split their supplies, then part ways.",
      "attacker": { "count": "-2", "outcome": "thrives" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{victim} starts singing their national anthem, so {attacker} knocks them out with a headbutt.",
      "attacker": { "count": "1", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "wounded" }
    },
    {
      "message": "{attacker} kicks {victim} between [Vthe|their] legs for a bottle of water!",
      "attacker": { "count": "1", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "wounded" }
    },
    {
      "message": "{victim} had stepped off their podium[V|s] too soon and [Vwas|were] blown up.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} throws their only knife into {victim}'s head[V|s]!",
      "attacker": { "count": "1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{victim} accidentally step[Vs|] on a landmine!",
      "attacker": { "count": "0", "outcome": "nothing"},
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} catches {victim} off guard and kills them!",
      "attacker": { "count": "1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} strangles {victim} after a fist fight!",
      "attacker": { "count": "1", "outcome": "nothing", "killer": true },
      "victim": { "count": "1", "outcome": "dies" }
    },
    {
      "message": "{attacker} shoots their only arrow into {victim}'s head!",
      "attacker": { "count": "1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{victim} can't handle the circumstances and commit[Vs|] suicide!",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} bashes {victim}'s head with a rock more times than necessary.",
      "attacker": { "count": "1", "outcome": "nothing", "killer": true },
      "victim": { "count": "1", "outcome": "dies" }
    },
    {
      "message": "{attacker} grab[As|] a toothbrush.",
      "attacker": { "count": "-1", "outcome": "nothing", "weapon": { "name": "toothbrush", "count": 1 } },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} snaps {victim}'s neck like a twig.",
      "attacker": { "count": "1", "outcome": "nothing", "killer": true },
      "victim": { "count": "1", "outcome": "dies" }
    },
    {
      "message": "{attacker} decapitate[As|] {victim} with a sword.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true, "weapon": { "name": "sword", "count": 1 } },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} spear[As|] {victim} in the abdomen.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} set[As|] {victim} on fire!",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{victim} fall[Vs|] into a pit and die[Vs|]!",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} stab[As|] {victim} while their back[V|s] [Vis|are] turned!",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} severely injure[As|] {victim}!",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "wounded" }
    },
    {
      "message": "{attacker} severely injure[As|] {victim}, but put[As|] them out of their misery!",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} severely injure[As|] {victim}, but let[As|] them live!",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "wounded" }
    },
    {
      "message": "{attacker} severely injure[As|] {victim}, and leave[As|] them to bleed to death.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} throw[As|] a knife into {victim}'s chest[V|s].",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} find[As a|] kni[Afe|ves] in the cornucopia.",
      "attacker": { "count": "-1", "outcome": "nothing", "weapon": { "name": "knife", "count": 1 } },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} find[As a|] machete[A|s] in the cornucopia.",
      "attacker": { "count": "-1", "outcome": "nothing", "weapon": { "name": "machete", "count": 1 } },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{victim} [Vis|are] unable to convince {attacker} not to kill them.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{victim} manage[Vs|] to convince {attacker} not to kill them.",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{victim} manage[Vs|] to convince {attacker} not to kill them, only to kill {attacker}.",
      "attacker": { "count": "-1", "outcome": "dies" },
      "victim": { "count": "-1", "outcome": "nothing", "killer": true }
    },
    {
      "message": "{victim} fall[Vs|] into a frozen lake and drown[Vs|].",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{victim}, {attacker} start fighting, and only {victim} survives.",
      "attacker": { "count": "-2", "outcome": "dies" },
      "victim": { "count": "1", "outcome": "nothing", "killer": true }
    },
    {
      "message": "{attacker} force[As|] {victim} to shoot themsel[Vf|ves].",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} set[As|] a trap, killing {victim}.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} kill[As|] {victim} as they try to run away.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker}, and {victim} agree to commit suicide. {attacker} pussies out last minute and {victim}'s last thought was that of betrayal.",
      "attacker": { "count": "1", "outcome": "nothing", "killer": true },
      "victim": { "count": "1", "outcome": "dies" }
    },
    {
      "message": "{attacker} survive[As|].",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} slice[As|] {victim} with a sword.",
      "attacker": { "count": "1", "outcome": "nothing", "weapon": { "name": "sword", "count": 1 } },
      "victim": { "count": "-1", "outcome": "wounded" }
    },
    {
      "message": "{attacker} slice[As|] {victim} with a sword.",
      "attacker": { "count": "1", "outcome": "nothing", "killer": true, "weapon": { "name": "sword", "count": 1 } },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} strangle[As|] {victim} with a rope.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} kill[As|] {victim} for supplies.",
      "attacker": { "count": "-1", "outcome": "thrives", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} shoots an arrow at {victim} but misses.",
      "attacker": { "count": "1", "outcome": "nothing", "weapon": { "name": "bow", "count": 2 } },
      "victim": { "count": "1", "outcome": "nothing" }
    },
    {
      "message": "{attacker} shoots an arrow at {victim} and kills them.",
      "attacker": { "count": "1", "outcome": "nothing", "killer": true, "weapon": { "name": "bow", "count": 2 } },
      "victim": { "count": "1", "outcome": "dies" }
    },
    {
      "message": "{attacker} decide[As|] to be nice, and let[As|] {victim} live.",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{attacker} grabs a radio and listens to some sick jams as they run from the cornucopia.",
      "attacker": { "count": "1", "outcome": "nothing" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{victim} find[Vs a pile| piles] of wood.",
      "victim": { "count": "-1", "outcome": "nothing", "weapon": { "name": "wood", "count": "3" } },
      "attacker": { "count": "0", "outcome": "nothing" },
      "custom": "260016427900076033"
    }
  ],
  "player": [
    {
      "message": "{attacker} grabs a sword from a supply cache.",
      "attacker": { "count": "1", "outcome": "nothing", "weapon": { "name": "sword", "count": 1 } },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} make[As|] a slingshot out of something... who knows.",
      "attacker": { "count": "-1", "outcome": "nothing", "weapon": { "name": "slingshot", "count": 1 } },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} receives a grenade from a sponsor.",
      "attacker": { "count": "1", "outcome": "nothing", "weapon": { "name": "grenade", "count": 1 } },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} takes a spear from the cornucopia.",
      "attacker": { "count": "1", "outcome": "nothing", "weapon": { "name": "spear", "count": 1 } },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{victim} receives a gun with bullets in it from a sponsor.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "nothing", "weapon": {"name": "gun", "count": 6 } }
    },
    {
      "message": "{attacker} manage[As|] to find [Aa bag|bags] full of explosives.",
      "attacker": { "count": "-1", "outcome": "nothing", "weapon": { "name": "explosive", "count": 3 } },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} find[As a|] kni[Afe|ves] on {dead}'s corpse[D|s].",
      "attacker": { "count": "-1", "outcome": "nothing", "weapon": { "name": "knife", "count": 1 } },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} craft[As a|] kni[Afe|ves] from materials they found.",
      "attacker": { "count": "-1", "outcome": "nothing", "weapon": { "name": "knife", "count": 1 } },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} craft[As a|] bow[A|s] and arrows from materials they found.",
      "attacker": { "count": "-1", "outcome": "nothing", "weapon": { "name": "bow", "count": 3 } },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} finds a few bottles of some alcoholic beverage.",
      "attacker": { "count": "1", "outcome": "nothing", "weapon": { "name": "alcohol", "count": 3 } },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} receives a toothbrush from a sponsor.",
      "attacker": { "count": "1", "outcome": "nothing", "weapon": { "name": "toothbrush", "count": 1 } },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} finds a bow, 5 arrows, and a quiver.",
      "attacker": { "count": "1", "outcome": "nothing", "weapon": { "name": "bow", "count": 5 } },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} receives a long rope from a sponsor.",
      "attacker": { "count": "1", "outcome": "nothing", "weapon": { "name": "rope", "count": 1 } },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} receive[As a|] handful[A|s] of throwing knives from [Aa |]sponsor[A|s].",
      "attacker": { "count": "-1", "outcome": "nothing", "weapon": { "name": "throwingknives", "count": 5 } },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} find[As a|] mace[A|s].",
      "attacker": { "count": "-1", "outcome": "nothing", "weapon": { "name": "mace", "count": 1 } },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} get[As|] vials of poison from sponsors.",
      "attacker": { "count": "-1", "outcome": "nothing", "weapon": { "name": "poison", "count": 3 } },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} receive[As a|] shovel[A|s] from [Aa |]sponsor[A|s].",
      "attacker": { "count": "-1", "outcome": "nothing", "weapon": { "name": "shovel", "count": "1" } },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{victim} pretend[Vs|] this is really Fortnite.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{victim} pretend[Vs|] this is really Fortnite, and die[Vs|] in a storm!",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{victim} pretend[Vs|] this is really PUBG.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{attacker} chat[As|] with {dead}.",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{dead} convince[Ds|] {victim} to jump off a cliff.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} find[As|] a gym and lift[As|] weights.",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} laughs at their own jokes.",
      "attacker": { "count": "1", "outcome": "nothing" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} wish[Aes|] they had memes.",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} find[As|] a taco.",
      "attacker": { "count": "-1", "outcome": "thrives" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} startle[As|] {victim} while they're taking a dump.",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{attacker} listen[As|] to music on a radio they found.",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} get[As|] a laptop from a sponsor.",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} stab[As|] {victim} to death!",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{victim} drowns!",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "dies" }
    },
    {
      "message": "{attacker} give[As|] {victim} clean water.",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "thrives" }
    },
    {
      "message": "{attacker} steal[As|] supplies from {victim} while {victim} sleep[Vs|].",
      "attacker": { "count": "-1", "outcome": "thrives" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{victim} form[Vs|] a suicide pact with {attacker}.",
      "attacker": { "count": "-1", "outcome": "dies" },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} sneak[As|] up on {victim}, but {victim} is actually a ninja and manages to kill {attacker}!",
      "attacker": { "count": "-1", "outcome": "dies" },
      "victim": { "count": "1", "outcome": "nothing", "killer": true }
    },
    {
      "message": "{attacker} hides in the bushes and stalks their prey...",
      "attacker": { "count": "1", "outcome": "nothing" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{victim} takes a nap.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "nothing" }
    },
    {
      "message": "{victim} goes hunting.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "nothing" }
    },
    {
      "message": "{victim} [Vis|are] clumsy and injure[Vs|] themsel[Vf|ves].",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "wounded" }
    },
    {
      "message": "{victim} explore[Vs|] the arena.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{attacker} [Ais|are] super intimidating and scare[As|] the sheepish {victim} away.",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{attacker} appear[As|] super intimidating and scare[As|] the sheepish {victim} away.",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "nothing" }
    },
    {
      "message": "{victim} barely escape[Vs|] from {attacker}.",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{victim} become[Vs|] one with the arena as they camouflage themsel[Vf|ves] into a bush.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{attacker} fashion[As|] themsel[Af|ves] a weapon.",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} collects a hatchet from a sponsor.",
      "attacker": { "count": "1", "outcome": "nothing", "weapon": { "name": "hatchet", "count": 1 } },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} collects water from a sponsor.",
      "attacker": { "count": "1", "outcome": "thrives" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} collects clean water from a sponsor.",
      "attacker": { "count": "1", "outcome": "thrives" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} collects food from a sponsor.",
      "attacker": { "count": "1", "outcome": "thrives" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{victim} search[Ves|] for water.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{victim} work together for the day.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "2", "outcome": "nothing" }
    },
    {
      "message": "{victim} work together for the day.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "3", "outcome": "nothing" }
    },
    {
      "message": "{victim} beg[Vs|] for {attacker} to kill them, but {attacker} refuse[As|].",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{victim} beg[Vs|] for {attacker} to kill them, and {attacker} oblige[As|].",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{victim} begins to go crazy and starts screaming at the top of their lungs until they pass out.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "wounded" }
    },
    {
      "message": "{victim} goes completely insane and starts to think they are invincible. To test if this was true, {victim} jumped off a cliff.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "dies" }
    },
    {
      "message": "{victim} sing[Vs|] songs around a campfire while {attacker} watch[Aes|] from the bushes.",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{victim} cries themself to sleep.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "nothing" }
    },
    {
      "message": "{victim} prances through a field of flowers.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "nothing" }
    },
    {
      "message": "{victim} and {attacker} agree that they may not survive, and decide to spend the night together.",
      "attacker": { "count": "1", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "nothing" }
    },
    {
      "message": "{victim} patch[Ves|] {attacker}'s wounds.",
      "attacker": { "count": "-1", "outcome": "thrives" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{attacker} see[As|] smoke in the distance, but decide[As|] not to investigate.",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} find[As|] higher ground.",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{victim} sprains their ankle because they are dumb.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "nothing" }
    },
    {
      "message": "{victim} sprains their ankle while running from {attacker}.",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "nothing" }
    },
    {
      "message": "{victim} sprains their ankle while running from {attacker}, allowing {attacker} to catch up and finish off {victim}.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "1", "outcome": "dies" }
    },
    {
      "message": "{victim} discovers their inner Zen while meditating.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "nothing" }
    },
    {
      "message": "{victim} discover[Vs|] a river.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{attacker} is bloodthirsty, and hunts for other tributes.",
      "attacker": { "count": "1", "outcome": "nothing" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} hunt[As|] for tributes.",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} start[As|] a campfire.",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} set[As|] up camp for the night.",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{victim} go[Ves|] blind after eating mushrooms.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "wounded" }
    },
    {
      "message": "{victim} climb[Vs|] a tree to get some sleep.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{victim} tell[Vs| each other] stories [Vto|about] themsel[Vf|ves].",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{victim} go[Ves|] to sleep.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{victim} sleep in shifts.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "4", "outcome": "nothing" }
    },
    {
      "message": "{victim} tend[Vs|] to their wounds.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "thrives" }
    },
    {
      "message": "{victim} scream[Vs|] for help, but no one hears them.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{victim} scream[Vs|] for help, and get[Vs|] a knife to the back because of it.",
      "attacker": { "count": "1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{victim} scream[Vs|] for help, but it's already too late, {attacker} ha[As|ve] already fired their crossbow[A|s].",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{victim} pass[Ves|] out from exhaustion.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "nothing" }
    },
    {
      "message": "{victim} cook[Vs|] their food before putting their fire out.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{attacker} cook[As|] {victim} for dinner.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{victim} fend[Vs|] {attacker} away from their fire.",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{victim} discuss[Ves|] the games out loud.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{victim} attempts to treat their infection.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "thrives" }
    },
    {
      "message": "{victim} attempts to treat their infection.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "wounded" }
    },
    {
      "message": "{victim} attempts to treat their infection, but fails.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "dies" }
    },
    {
      "message": "{victim} ha[Vs|ve] nightmares.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{victim} huddle together for warmth.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "2", "outcome": "nothing" }
    },
    {
      "message": "{victim} believes they will win.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "nothing" }
    },
    {
      "message": "{victim} consider[Vs|] maybe trying to win, but it sounds like effort.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{victim} tell[Vs|] ghost stories.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{victim} let[Vs|] {attacker} into their shelter.",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{victim} let[Vs|] {attacker} into their shelter, and {victim} [Vis|are] killed.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{victim} can't figure out how to start a fire.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{victim} hold hands.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "2", "outcome": "nothing" }
    },
    {
      "message": "{attacker} question[As|] {victim}'s sanity.",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "nothing" }
    },
    {
      "message": "{attacker} put[As|] {victim} out of their misery.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "1", "outcome": "dies" }
    },
    {
      "message": "{victim} beg[Vs|] {attacker} to kill them, {attacker} reluctantly oblige[As|].",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} drown[As|] {victim}.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} strangle[As|] {victim} after a fist fight.",
      "attacker": { "count": "1", "outcome": "nothing", "killer": true },
      "victim": { "count": "1", "outcome": "dies" }
    },
    {
      "message": "{attacker} sneaks up on {victim} and snaps {victim}'s neck from behind.",
      "attacker": { "count": "1", "outcome": "nothing", "killer": true },
      "victim": { "count": "1", "outcome": "dies" }
    },
    {
      "message": "{attacker} bashes {victim}'s head into a rock several times after they have died.",
      "attacker": { "count": "1", "outcome": "nothing", "killer": true },
      "victim": { "count": "1", "outcome": "dies" }
    },
    {
      "message": "{victim} unknowingly eat[Vs|] toxic berries.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{victim} dies from infection.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "dies" }
    },
    {
      "message": "{attacker} stabs {victim} in the back with a stick.",
      "attacker": { "count": "1", "outcome": "nothing", "killer": true },
      "victim": { "count": "1", "outcome": "dies" }
    },
    {
      "message": "{victim} attempt[Vs|] to climb a tree, but slip[Vs|] and fall[Vs|] to their death.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} push[Aes|] {victim} off a cliff.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker}'s trap kills {victim}.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} kill[As|] {victim} in their sleep.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{victim} falls into a frozen lake and drowns.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "dies" }
    },
    {
      "message": "{attacker} force[As|] {victim} to kill themsel[Vf|ves].",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} kill[As|] {victim} as they try to run away.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "1", "outcome": "dies" }
    },
    {
      "message": "{victim} die[Vs|] of hypothermia.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{victim} die[Vs|] of starvation.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{victim} die[Vs|] of dehydration.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{victim} die[Vs|] trying to escape the arena.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} ambush[Aes|] and kill[As|] {victim}.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{victim} return[Vs|] to the cornucopia to search for remaining supplies.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{victim} returns to the cornucopia to search for supplies, but walks into {attacker}'s trap and dies.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{victim} returns to the cornucopia and finds medical supplies.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "thrives" }
    },
    {
      "message": "{victim} get[Vs|] stung by a deadly bee.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "wounded" }
    },
    {
      "message": "{victim} shoot[Vs|] themsel[Vf|ves] in the foot accidentally.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "wounded" }
    },
    {
      "message": "{attacker} carves {victim}'s eyes out before finishing them off.",
      "attacker": { "count": "1", "outcome": "nothing", "killer": true },
      "victim": { "count": "1", "outcome": "dies" }
    },
    {
      "message": "{victim} look[Vs|] at the sun to tell the time, and go[Ves|] blind.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{attacker} stalk[As|] {victim} for the day before slitting their throat[V|s].",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{victim} form a pentagram, in the hopes they can summon Satan.",
      "attacker": { "count": "0", "outcome": "nothing"},
      "victim": { "count": "5", "outcome": "nothing" }
    },
    {
      "message": "{victim} form a pentagram, and manage to summon Satan who kills the 5 of them before disappearing.",
      "attacker": { "count": "0", "outcome": "nothing"},
      "victim": { "count": "5", "outcome": "dies" }
    },
    {
      "message": "{attacker} form a pentagram around {victim}'s body, and Satan kills the 5 of them in order to revive {victim}!",
      "victim": { "count": 1, "outcome": "revived" },
      "attacker": { "count": 5, "outcome": "dies" }
    },
    {
      "message": "{attacker} makes {victim} laugh while eating, and {victim} chokes to death on their food.",
      "attacker": { "count": "1", "outcome": "nothing", "killer": true},
      "victim": { "count": "1", "outcome": "dies" }
    },
    {
      "message": "{attacker} drop[As|] [Va |]rock[V|s] from a tree onto {victim}, killing them.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "A coconut falls from a tree and knocks out {victim}.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "wounded" }
    },
    {
      "message": "A coconut falls from a tree and {victim} falls unconscious into the water where they drown.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "dies" }
    },
    {
      "message": "{victim} find[Vs a|] banana[V|s] to eat.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "thrives" }
    },
    {
      "message": "{victim} begin[Vs|] yodeling.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{victim}, {attacker} celebrate {victim}'s birthday.",
      "attacker": { "count": "-2", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "nothing" }
    },
    {
      "message": "{victim} celebrates their birthday alone.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "nothing" }
    },
    {
      "message": "{victim} wants their mommy.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "nothing" }
    },
    {
      "message": "{attacker} jump[As|] onto {victim} from a tree and kill[As|] them.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{victim} eat[Vs|] food off the ground and get[Vs|] sick.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "wounded" }
    },
    {
      "message": "{attacker} find[As|] {dead}'s remains.",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{dead} wish[Des|] they were alive.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} kill[As|] {victim} with {dead}'s remains.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "In {attacker}'s bloodlust, they end up killing eachother.",
      "attacker": { "count": "-2", "outcome": "dies" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} begin to starve, and are so desperate they kill eachother for food.",
      "attacker": { "count": "-2", "outcome": "dies" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{victim} electrocutes themsel[Vf|ves] while setting a trap.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} push[Aes|] {victim} into the arena border, killing them.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} push[Aes|] {victim} into a fire, killing them.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} hold[As|] {victim}'s face in a campfire, scarring them.",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "wounded" }
    },
    {
      "message": "{attacker} hold[As|] {victim}'s face in a campfire, killing them.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "1", "outcome": "dies" }
    },
    {
      "message": "{victim} stop[Vs|] to smell the flowers.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{victim} stop[Vs|] to smell the flowers, and {attacker} stab[As|] them in the back.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{victim} mistake[Vs|] {attacker} for [Aa |]friend[A|s], and end[Vs|] up dead.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{victim} overdose[Vs|] on painkillers.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{victim} investigate[Vs|] a light in the forest, but {attacker} slit[As|] their throat[V|s] before they can see its source.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} find[As|] supplies left on {dead}'s remains.",
      "attacker": { "count": "-1", "outcome": "thrives" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} corner[As|] {victim} in a cave before killing them.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{victim} run[Vs|] into a cave to escape {attacker}, but end[Vs|] up trapped and [Vis|are] killed.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{victim} [Vis|are] so dumb, they die of stupidity.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "A deadly venomous spider bites {victim}, and they die shortly after.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{victim} get[Vs|] bored and begin[Vs|] watching the bugs in the dirt.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "nothing" }
    },
    {
      "message": "{victim} [Vis|are] choked to death by {attacker}.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "Something happened!",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} do[Aes|] something, idk.",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{attacker} do[Aes|] something, and {victim} die[Vs|].",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{victim} looked at me funny so I killed them.",
      "attacker": { "count": "0", "outcome": "nothing" },
      "victim": { "count": "1", "outcome": "dies" }
    },
    {
      "message": "{attacker} smother[As|] {victim} in their love, killing them.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} smother[As|] {victim} in their friendship, killing them.",
      "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
      "victim": { "count": "-1", "outcome": "dies" }
    },
    {
      "message": "{attacker} take[As|] one of {victim} arm[Vs|].",
      "attacker": { "count": "-1", "outcome": "nothing" },
      "victim": { "count": "-1", "outcome": "wounded" }
    },
    {
      "message": "{attacker} kill[As|] {victim}!",
      "victim": { "count": 1, "outcome": "dies" },
      "attacker": { "count": 1, "outcome": "nothing", "killer": true }
    },
    {
      "message": "{victim} is fat.",
      "victim": { "count": -1, "outcome": "nothing" },
      "attacker": { "count": 0, "outcome": "nothing" }
    },
    {
      "message": "Hello world!",
      "victim": { "count": "0", "outcome": "nothing" },
      "attacker": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{victim} get[Vs|] scratched in the face by a cat!",
      "victim": { "count": "-1", "outcome": "wounded" },
      "attacker": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{victim} [Vis|are] delighted by the sight of a few cats, and end up getting scratched to death!",
      "victim": { "count": "-1", "outcome": "dies" },
      "attacker": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{victim} find[Vs|] a cute little doggo in the woods. The doggo ended up killing them.",
      "victim": { "count": "-1", "outcome": "dies" },
      "attacker": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{victim} [Vis|are] surrounded by a pack of hungry wolves, and become[Vs|] their dinner.",
      "victim": { "count": "-1", "outcome": "dies" },
      "attacker": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "{victim} befriend[Vs|] a chicken.",
      "victim": { "count": "-1", "outcome": "nothing" },
      "attacker": { "count": "0", "outcome": "nothing" }
    },
    {
      "message": "Thousands of eyes watch {victim} as they walk into a cave.",
      "victim": { "count": -1, "outcome": "nothing" },
      "attacker": { "count": 0, "outcome": "nothing" }
    },
    {
      "message": "{victim} ha[Vs|ve] returned from the dead and [Vwas|were] put back into the arena!",
      "victim": { "count": -1, "outcome": "revived" },
      "attacker": { "count": 0, "outcome": "nothing" }
    },
    {
      "message": "{victim} ha[Vs|ve] been revived and [Vwas|were] put back into the arena!",
      "victim": { "count": -1, "outcome": "revived" },
      "attacker": { "count": 0, "outcome": "nothing" }
    },
    {
      "message": "{victim} ha[Vs a|ve] heart attack[V|s]!",
      "victim": { "count": -1, "outcome": "dies" },
      "attacker": { "count": 0, "outcome": "nothing" }
    },
    {
      "message": "{victim} ha[Vs a|ve] heart attack[V|s] but {attacker} always wanted to try CPR, and manage[As|] to revive them!",
      "victim": { "count": -1, "outcome": "wounded" },
      "attacker": { "count": -1, "outcome": "nothing" }
    },
    {
      "message": "An intense and bloody battle ends with {attacker} killing {victim}.",
      "victim": { "count": -1, "outcome": "dies" },
      "attacker": { "count": -1, "outcome": "nothing", "killer": true }
    },
    {
      "message": "After {victim} [Vis|are] knocked down, {attacker} put[As|] [Va |]spear[V|s] through their abdomen.",
      "victim": { "count": -1, "outcome": "dies" },
      "attacker": { "count": -1, "outcome": "nothing", "killer": true }
    },
    {
      "message": "{victim} makes {attacker} mad, and in a fit of rage, {attacker} snaps {victim}'s neck!",
      "victim": { "count": 1, "outcome": "dies" },
      "attacker": { "count": 1, "outcome": "nothing", "killer": true }
    },
    {
      "message": "{victim} [Vis|are] tied down by {attacker}, and [Vis|are] left to die.",
      "victim": { "count": -1, "outcome": "dies" },
      "attacker": { "count": -1, "outcome": "nothing", "killer": true }
    },
    {
      "message": "{victim} [Vis|are] suffocated in the dirt by {attacker}.",
      "victim": { "count": -1, "outcome": "dies" },
      "attacker": { "count": -1, "outcome": "nothing", "killer": true }
    },
    {
      "message": "{victim}'s life force is sucked out by {attacker} so that {attacker} can live again!",
      "victim": { "count": 1, "outcome": "dies" },
      "attacker": { "count": 1, "outcome": "revived", "killer": true }
    },
    {
      "message": "{victim} doesn't feel so good!",
      "victim": { "count": 1, "outcome": "dies" },
      "attacker": { "count": 0, "outcome": "nothing" },
      "_reference": "Avengers: Infinity War"
    },
    {
      "message": "{attacker} lets {victim} know they believe in destiny.",
      "victim": { "count": 1, "outcome": "dies" },
      "attacker": { "count": 1, "outcome": "nothing", "killer": true },
      "_reference": "RWBY"
    },
    {
      "message": "While {victim} are wondering why they're here, {attacker} kills them.",
      "victim": { "count": 2, "outcome": "dies" },
      "attacker": { "count": 1, "outcome": "nothing", "killer": true },
      "_reference": "Red Vs. Blue"
    },
    {
      "message": "{victim} wonder[Vs|] what in Sam Hell is a puma, then it bites them.",
      "victim": { "count": -1, "outcome": "dies" },
      "attacker": { "count": 0, "outcome": "nothing" },
      "_reference": "Red Vs. Blue"
    },
    {
      "message": "{attacker} rejects your reality and substitutes their own, consequently they end up dead.",
      "victim": { "count": 0, "outcome": "nothing" },
      "attacker": { "count": -1, "outcome": "dies" },
      "_reference": "Mythbusters / The Dungeonmaster"
    },
    {
      "message": "{victim} make[Vs|] a girl a promise they know they can't keep.",
      "victim": { "count": -1, "outcome": "nothing" },
      "attacker": { "count": 0, "outcome": "nothing" },
      "_reference": "Halo 2/3/4"
    },
    {
      "message": "Crazy fool! Why do you always jump? One of these days, {victim}, you're gonna land on somethin' as stubborn as you are!",
      "victim": { "count": 1, "outcome": "wounded" },
      "attacker": { "count": 0, "outcome": "nothing" },
      "_reference": "Halo 3"
    },
    {
      "message": "{victim} receive[Vd|] an \"unsatisfactory\" mark on their official testing report, then died.",
      "victim": { "count": -1, "outcome": "dies" },
      "attacker": { "count": 0, "outcome": "nothing" },
      "_reference": "Portal"
    },
    {
      "message": "{victim} didn't realize {attacker} [Awas|were] doing Science and [Awas|were] still alive.",
      "victim": { "count": -1, "outcome": "dies" },
      "attacker": { "count": -1, "outcome": "nothing", "killer": true },
      "_reference": "Portal"
    },
    {
      "message": "{victim} got mad and made life take the lemons back. \"I don't want your damn lemons!\"",
      "victim": { "count": -1, "outcome": "nothing" },
      "attacker": { "count": 0, "outcome": "nothing" },
      "_reference": "Portal 2"
    },
    {
      "message": "Oh, it's {victim}, it's been a long time. How have you been? I've been really busy being dead. You know, after you murdered me.",
      "victim": { "count": -1, "outcome": "nothing" },
      "attacker": { "count": 0, "outcome": "nothing" },
      "_reference": "Portal 2"
    },
    {
      "message": "Well, it looks like we won't be working together. No regrets, {victim}...",
      "victim": { "count": -1, "outcome": "dies" },
      "attacker": { "count": 0, "outcome": "nothing" },
      "_reference": "Half Life"
    },
    {
      "message": "{attacker} [Ais|are] afraid they can't open the pod bay doors, thus {victim} die[Vs|] in the void.",
      "victim": { "count": -1, "outcome": "dies" },
      "attacker": { "count": -1, "outcome": "nothing", "killer": true },
      "_reference": "2001 A Space Odyssey"
    },
    {
      "message": "{attacker} found {victim}'s lack of faith disturbing!",
      "victim": { "count": -1, "outcome": "dies" },
      "attacker": { "count": -1, "outcome": "nothing", "killer": true },
      "_reference": "Star Wars: Episode IV - A New Hope"
    },
    {
      "message": "{victim} told {attacker} the odds!",
      "victim": { "count": -1, "outcome": "dies" },
      "attacker": { "count": -1, "outcome": "nothing", "killer": true },
      "_reference": "Star Wars: Episode V - The Empire Strikes Back"
    },
    {
      "message": "{victim} find[Vs|] power! Unlimited power! And it electrocutes them.",
      "victim": { "count": -1, "outcome": "dies" },
      "attacker": { "count": 0, "outcome": "nothing" },
      "_reference": "Star Wars: Episode III - Revenge of the Sith"
    },
    {
      "message": "{victim} die[Vs|] of dysentery.",
      "victim": { "count": -1, "outcome": "dies" },
      "attacker": { "count": 0, "outcome": "nothing" },
      "_reference": "Oregon Trail"
    },
    {
      "message": "{attacker}, kill {victim}, would you kindly?",
      "victim": { "count": -1, "outcome": "dies" },
      "attacker": { "count": -1, "outcome": "nothing", "killer": true },
      "_reference": "Bioshock"
    },
    {
      "message": "{attacker} stood in the ashes of a trillion dead souls, and asked the ghosts if honor matters. The silence was their answer.",
      "victim": { "count": 0, "outcome": "nothing" },
      "attacker": { "count": -1, "outcome": "nothing" },
      "_reference": "Mass Effect 3"
    },
    {
      "message": "{attacker} came to kick ass and chew bubblegum... and they're all outta gum.",
      "victim": { "count": 0, "outcome": "nothing" },
      "attacker": { "count": -1, "outcome": "nothing" },
      "_reference": "Duke Nukem"
    },
    {
      "message": "{attacker} had the courage to walk into the Darkness, and the strength to kill {victim} in the Light.",
      "victim": { "count": -1, "outcome": "dies" },
      "attacker": { "count": -1, "outcome": "nothing", "killer": true },
      "_reference": "Destiny"
    },
    {
      "message": "It's dangerous to go alone, take this!",
      "victim": { "count": 0, "outcome": "nothing" },
      "attacker": { "count": -1, "outcome": "nothing", "weapon": { "name": "sword", "count": 1 } },
      "_reference": "The Legend of Zelda"
    },
    {
      "message": "{victim} endure[Vs|], and survives.",
      "victim": { "count": -1, "outcome": "thrives" },
      "attacker": { "count": 0, "outcome": "nothing" },
      "_reference": "The Last of Us"
    },
    {
      "message": "Grass grows, birds fly, sun shines, and brother, {attacker} kill[As|] {victim}.",
      "victim": { "count": -1, "outcome": "dies" },
      "attacker": { "count": -1, "outcome": "nothing", "killer": true },
      "_reference": "Team Fortress 2"
    },
    {
      "message": "{victim} ha[Vs|ve] been resurrected and [Vwas|were] put back into the arena!",
      "victim": { "count": -1, "outcome": "revived" },
      "attacker": { "count": 0, "outcome": "nothing" }
    },
    {
      "message": "{victim} chop[Vs|] down a tree for some wood.",
      "victim": { "count": "-1", "outcome": "nothing", "weapon": { "name": "wood", "count": "2" } },
      "attacker": { "count": "0", "outcome": "nothing" },
      "custom": "260016427900076033"
    },
    {
      "message": "{victim} find[Vs a piece of|] wood lying on the floor.",
      "victim": { "count": "-1", "outcome": "nothing", "weapon": { "name": "wood", "count": "1" } },
      "attacker": { "count": "0", "outcome": "nothing" },
      "custom": "260016427900076033"
    }
  ],
  "arena": [
    {
      "message": "Wolf mutts are let loose in the arena!",
      "outcomes": [
        {
          "message": "{victim} survive[Vs|]!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "nothing" }
        },
        {
          "message": "{victim} [Vis|are] crushed by a pack of wolf mutts!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{victim} [Vis|are] chased by a pack of wolf mutts, but manage[Vs|] to escape up a tree with wounds!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "wounded" }
        },
        {
          "message": "{victim} lure[Vs|] a pack of wolf mutts into a trap to survive!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "nothing" }
        },
        {
          "message": "{victim} [Vis|are] eaten by a pack of wolf mutts!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{attacker} knock[As|] out {victim} and leaves them to be eaten by wolf mutts!",
          "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{attacker} push[Aes|] {victim} into a pack of wolf mutts!",
          "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "As {victim} fight, a pack of wolf mutts shows up and kills them both!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "2", "outcome": "dies" }
        }
      ]
    },
    {
      "message": "Acidic rain pours down on the arena!",
      "outcomes": [
        {
          "message": "{victim} survive[Vs|]!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "nothing" }
        },
        {
          "message": "{victim} [Vis|are] unable to find shelter and die[Vs|]!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{victim} trip[Vs|] face first into a puddle of acidic rain!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{attacker} injure[As|] {victim} and leave[As|] them in the rain to die!",
          "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{attacker} refuse[As|] {victim} shelter, killing them!",
          "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{attacker} shove[As|] {victim} into a pond of acidic rain, but is pulled in by {victim}, killing them both!",
          "attacker": { "count": "1", "outcome": "dies", "killer": true },
          "victim": { "count": "1", "outcome": "dies", "killer": true }
        }
      ]
    },
    {
      "message": "A cloud of poisonous smoke starts to fill the arena!",
      "outcomes": [
        {
          "message": "{victim} survive[Vs|]!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "nothing" }
        },
        {
          "message": "{victim} [Vis|are] engulfed in the cloud of poisonous smoke!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{victim} sacrifice[Vs|] themsel[Vf|ves] so {attacker} can get away!",
          "attacker": { "count": "-1", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{attacker} slowly push[Aes|] {victim} closer into the cloud until they can't resist anymore!",
          "attacker": { "count": "-1", "outcome": "wounded", "killer": true },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{attacker}, and {victim} agree to die in the cloud together, but {attacker} pushes {victim} in without warning!",
          "attacker": { "count": "1", "outcome": "nothing", "killer": true },
          "victim": { "count": "1", "outcome": "dies" }
        },
        {
          "message": "{victim} decide to run into the cloud together!",
          "attacker": { "count": "0", "outcome": "nothing", "killer": true },
          "victim": { "count": "2", "outcome": "dies" }
        }
      ]
    },
    {
      "message": "A monstrous hurricane wreaks havoc on the arena!",
      "outcomes": [
        {
          "message": "{victim} survive[Vs|]!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "nothing" }
        },
        {
          "message": "{victim} [Vis|are] sucked into the hurricane!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{victim} [Vis|are] incapacitated by flying debris and die[Vs|]!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{attacker} push[Aes|] {victim} into [Van|] incoming boulder[V|s]!",
          "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{attacker} stabs {victim} then pushes them close enough to the hurricane to suck them in!",
          "attacker": { "count": "1", "outcome": "nothing", "killer": true },
          "victim": { "count": "1", "outcome": "dies" }
        },
        {
          "message": "{attacker} tr[Aies|y] to save {victim} from being sucked into the hurricane, only to be sucked in as well!",
          "attacker": { "count": "-1", "outcome": "dies" },
          "victim": { "count": "-1", "outcome": "dies" }
        }
      ]
    },
    {
      "message": "A swarm of tracker jackers invades the arena!",
      "outcomes": [
        {
          "message": "{victim} survive[Vs|]!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "nothing" }
        },
        {
          "message": "{victim} [Vis|are] stung to death!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{victim} slowly die[Vs|] from the tracker jacker toxins!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{attacker} knock[As|] {victim} unconscious and leaves them there as bait!",
          "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "While running away from the tracker jackers, {attacker} grabs {victim} and throws them to the ground!",
          "attacker": { "count": "1", "outcome": "nothing", "killer": true },
          "victim": { "count": "1", "outcome": "dies" }
        },
        {
          "message": "{victim} run[Vs|] out of places to run and [Vis|are] stung to death!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "dies" }
        }
      ]
    },
    {
      "message": "A tsunami rolls into the arena!",
      "outcomes": [
        {
          "message": "{victim} survive[Vs|]!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "nothing" }
        },
        {
          "message": "{victim} [Vis|are] swept away!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{victim} fatally injure[Vs|] themsel[Vf|ves] on debris!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{attacker} hold[As|] {victim} underwater to drown!",
          "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{attacker} defeats {victim}, but throws them in the water to make sure they die!",
          "attacker": { "count": "1", "outcome": "nothing", "killer": true },
          "victim": { "count": "1", "outcome": "dies" }
        },
        {
          "message": "{victim} smash their heads together as the tsunami rolls in, leaving them both to drown!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "2", "outcome": "dies" }
        }
      ]
    },
    {
      "message": "A fire spreads through the arena!",
      "outcomes": [
        {
          "message": "{victim} survive[Vs|]!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "nothing" }
        },
        {
          "message": "The fire catches up to {victim}, killing them!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "A fireball strikes {victim}, killing them!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{attacker} kill[As|] {victim} in order to utilize a body of water safely!",
          "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{attacker} falls to the ground, but kicks {victim} hard enough to push them into the fire!",
          "attacker": { "count": "1", "outcome": "nothing", "killer": true },
          "victim": { "count": "1", "outcome": "dies" }
        },
        {
          "message": "{victim} fail[Vs|] to find a safe spot and suffocate[Vs|]!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "dies" }
        }
      ]
    },
    {
      "message": "The arena's border begins to rapidly contract!",
      "outcomes": [
        {
          "message": "{victim} survive[Vs|]!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "nothing" }
        },
        {
          "message": "{victim} is electrocuted by the border!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{victim} trip[Vs|] on [Va|] tree root[V|s] and [Vis|are] unable to recover fast enough!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{attacker} restrain[As|] {victim} to a tree and leave[As|] them to die!",
          "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{attacker} push[Aes|] {victim} into the border while they weren't paying attention!",
          "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "Thinking they could escape, {victim} attempt to run through the border together!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "2", "outcome": "dies" }
        }
      ]
    },
    {
      "message": "Monkey mutts fill the arena!",
      "outcomes": [
        {
          "message": "{victim} survive[Vs|]!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "nothing" }
        },
        {
          "message": "{victim} die[Vs|] from internal bleeding caused by a monkey mutt!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{victim} [Vis|are] pummeled to the ground and killed by a troop of monkey mutts!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{attacker} use[As|] {victim} as a shield from the monkey mutts!",
          "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{attacker} injure[As|] {victim} and leaves them for the monkey mutts!",
          "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "While running {attacker} falls over and grabs {victim} on the way down. The monkey mutts kill them both!",
          "attacker": { "count": "1", "outcome": "dies", "killer": true },
          "victim": { "count": "1", "outcome": "dies", "killer": true }
        }
      ]
    },
    {
      "message": "Carnivorous squirrels start attacking the tributes!",
      "outcomes": [
        {
          "message": "{victim} survive[Vs|]!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "nothing" }
        },
        {
          "message": "{victim} [Vis|are] brutally attacked by a scurry of squirrels!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{victim} tr[Vies|y] to kill as many squirrels as they can, but there are too many!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{attacker} use[As|] the squirrels to their advantage, shoving {victim} into them!",
          "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{attacker}, in agony, kill[As|] {victim} so they do not have to be attacked by the squirrels!",
          "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "The squirrels separate and kill {victim}!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "2", "outcome": "dies" }
        }
      ]
    },
    {
      "message": "A volcano erupts at the center of the arena!",
      "outcomes": [
        {
          "message": "{victim} survive[Vs|]!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "nothing" }
        },
        {
          "message": "{victim} [Vis|are] buried in ash!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{victim} suffocate[Vs|]!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{attacker} push[Aes|] {victim} into the lava!",
          "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{attacker} dip[As|] their weapon[A|s] in the lava and kill[As|] {victim} with [Ait|them]!",
          "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{victim} trips over {attacker} into the lava, and pulls {attacker} down with them!",
          "attacker": { "count": "1", "outcome": "dies", "killer": true },
          "victim": { "count": "1", "outcome": "dies", "killer": true }
        }
      ]
    },
    {
      "message": "The arena turns pitch black and nobody can see a thing!",
      "outcomes": [
        {
          "message": "{victim} survive[Vs|]!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "nothing" }
        },
        {
          "message": "{victim} trip[Vs|] on a rock and falls off a cliff!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{victim} accidentally make[Vs|] contact with spiny, lethal plant life!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{attacker} flail[As|] their weapon around, accidentally killing {victim}!",
          "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{attacker} find[As|] and kill[As|] {victim}, who [Vwas|were] making too much noise!",
          "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "While fighting, {victim} lose their balance, roll down a jagged hillside, and die!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "2", "outcome": "dies" }
        }
      ]
    },
    {
      "message": "The remaining tributes begin to hallucinate!",
      "outcomes": [
        {
          "message": "{victim} survive[Vs|]!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "nothing" }
        },
        {
          "message": "{victim} eat[Vs|] [Va|] scorpion[V|s], thinking [Vit's a|they're a] delicate dessert!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{victim} hug[Vs|] a tracker jacker nest, believing it to be a pillow!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{attacker} mistake[As|] {victim} for a bear and kills them!",
          "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{attacker} drown[As|] {victim}, who they thought [Vwas a|were] shark[V|s] trying to eat them!",
          "attacker": { "count": "-1", "outcome": "nothing", "killer": true },
          "victim": { "count": "-1", "outcome": "dies" }
        },
        {
          "message": "{victim} decide to jump down a rabbit hole to Wonderland, which turns out to be a pit of rocks!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "2", "outcome": "dies" }
        }
      ]
    },
    {
      "message": "A mysterious gas begins to pour into the arena, causing the tributes to relax.",
      "outcomeProbs": {"kill": 15, "wound": 15, "thrive": 55, "nothing": 15},
      "outcomes": [
        {
          "message": "{victim} inhale[Vs|] the gas.",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "thrives" }
        },
        {
          "message": "{victim} take[Vs a|] deep breath[V|s] and feel[Vs|] rejuvenated.",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "thrives" }
        },
        {
          "message": "{victim} feel[Vs|] their senses heighten, and they manage to find a weapon in the grass.",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "thrives", "weapon": { "name": "toothbrush", "count": 1 } }
        },
        {
          "message": "{attacker} and {victim} stop fighting for the moment after {attacker} agree[As|] to \"Chill out dude[A|s]...\".",
          "attacker": { "count": "-1", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "nothing" }
        },
        {
          "message": "{victim}'s blood pressure was too low and the gas kills them!",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "1", "outcome": "dies" }
        },
        {
          "message": "{victim} feel[Vs|] light headed.",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "wounded" }
        },
        {
          "message": "{victim} use[Vs|] their clothing as a mask to avoid inhaling the gas.",
          "attacker": { "count": "0", "outcome": "nothing" },
          "victim": { "count": "-1", "outcome": "nothing" }
        }
      ]
    }
  ]
}