// Copyright 2019-2020 Campbell Crowley. All rights reserved.
// Author: Campbell Crowley (dev@campbellcrowley.com)
const Locale = require('../../src/locale/Locale.js');

/**
 * @description Español España.
 * @augments Locale
 */
class EsEsHG extends Locale {
  /**
   * @description Constructor.
   */
  constructor() {
    super();
    this.title = 'HG';
    this.helpMessageSuccess = '¡Te envié un DM con comandos!';
    this.helpMessageFailed =
        'No pude enviarte un mensaje, probablemente me bloqueaste :(';
    this.unknownCommandSuggestionList =
        'Hmm, ¿te refieres a uno de los siguientes comandos?';
    this.unknownCommandSuggestOne = 'Hmm, quisiste decir';
    this.unknownCommand = '¡Oh, no! ¡No puedo entender eso!';
    // {} is replaced with command prefix.
    this.unknownCommandHelp = '`{}help` para ayudarte.';
    this.messageRejected =
        'Discord rechazó mi mensaje por alguna razón ...';
    this.legacyEventNoticeTitle = 'Aviso importante de eventos heredados';
    // {} is replaced with command prefix.
    this.legacyEventNoticeBody =
        'Se ha actualizado el almacenamiento para eventos personalizados.\nUsa `{}claimlegacy` para ' +
        'mover todos los eventos personalizados a su cuenta.\n\nTen en cuenta que quien pueda ' +
        'ejecutar el comando, será el único que puede editar los eventos y ' +
        'tendrá la propiedad exclusiva de los eventos.\n\nLos eventos personalizados no serán' +
        ' usados en el juego hasta que hayan sido reclamados..';
    this.legacyNoLegacyTitle = 'No hay eventos heredados.';
    this.legacyNoLegacyBody =
        'No se pueden encontrar eventos heredados y, por lo tanto, no hay ninguna operación para ' +
        'realizar.';
    this.legacyNoClaimed = 'No hay eventos reclamados';
    this.legacyClaimed = 'Eventos reclamados';
    this.legacyBackup = 'Copia de seguridad de los datos de eventos heredados guardados.';
    this.legacyWeaponReset =
        'Los eventos que dan armas fueron restablecidos.\n\nPuede editar eventos en el ' +
        'sitio web para dar las armas de nuevo.';
    this.legacyWeaponNoReset = 'No se ha eliminado la información del arma.';
    this.legacyFailuresUnknown =
        '\nAlgunos eventos no se pudieron convertir debido a errores desconocidos.';
    this.legacyNoFailures = '\nSin errores.';
    this.legacyNoneFound = 'No se encontraron eventos heredados para actualizar.';
    this.legacyEventCommandResponseTitle =
        'Este comando ya no está disponible.';
    this.legacyEventCommandResponseBody =
        'Por favor use https://www.spikeybot.com/hg/#?guild={} para gestionar eventos ' +
        'personalizados.';
    this.loadingTitle = 'Sigue cargando';
    this.loadingBody =
        'Todavía se está cargando un comando anterior. Por favor espere a que se complete.';
    this.makeMeWin = '¡La probabilidad de ganar de todos ha aumentado!';
    // {} is replaced with some word or symbol meaning "nothing".
    this.makeMeLose = 'Su probabilidad de perder ha aumentado en {}!';
    this.resetTitle = 'Restablecer HG';
    this.resetNoData = 'No hay datos para restablecer.';
    this.resetInProgress =
        'Un juego está actualmente en progreso. Por favor finalícelo antes de restablecer los datos' +
	' del juego.';
    this.resetAll = '¡Restablece TODOS los datos de Hungry Games para este servidor!';
    this.resetStats = '¡Restablece TODAS las estadísticas de Hungry Games para este servidor!';
    this.resetEvents = '¡Restablece TODOS los eventos de Hungry Games para este servidor!';
    this.resetCurrent = '¡Restablece TODOS los datos del juego actual!';
    this.resetOptions = '¡Restablece TODAS las opciones!';
    this.resetTeams = '¡Restablece TODOS los equipos!';
    this.resetUsers = '¡Restablece TODOS los datos del usuario!';
    this.resetNPCs = '¡Restablece todos los datos de la APN!';
    this.resetActions = '¡Restablece TODAS las acciones!';
    this.resetReact = '¡Restablece mensaje de reacción!';
    this.resetHelp =
        'Por favor, especifique qué datos restablecer.\nall (elimina todos los datos para ' +
        'este servidor),\nevents (elimina todos los eventos personalizados),\ncurrent (elimina todos ' +
        'los datos sobre el juego actual),\noptions (restablece todas las opciones a los valores ' +
        'predeterminados),\nteams (borra todos los equipos y crea nuevos),\n' +
        'users (elimina datos sobre dónde colocar a los usuarios al crear un nuevo ' +
        'juego),\nnpcs (elimina todos los NPCS).\nstats (elimina todas las estadísticas y ' +
        'grupos).\nactions (restablece todas las acciones a la configuración predeterminada).\nreact ' +
        '(cancela el comando hg react).';
    this.startedTitle = '¡Juego iniciado!';
    // {} is replaced with command prefix.
    this.gameStartNextDayInfo = '"{}next" para el dia siguiente.';
    this.startInProgressTitle = '¡Un juego ya está en progreso!';
    // Both {0} is replaced with command prefix.
    this.startInProgressBody = '`{0}next` para el dia siguiente, o `{0}end` para salir)';
    this.startNoAttachFiles = 'Lo siento, pero necesito permiso para enviar imágenes en' +
        ' este canal antes de que pueda comenzar los juegos.\nPor favor asegúrese de que tengo ' +
        'el permiso "Adjuntar archivos" en este canal.';
    this.startNoEmbedLinks = 'Lo siento, pero necesito permiso para insertar mensajes ' +
        'en este canal antes de que pueda comenzar los juegos.\nPor favor asegúrese de que tengo ' +
        'el permiso "Insertar enlaces" en este canal.';
    this.noPermStart =
        'Lo sentimos, pero no tienes permiso para iniciar los juegos.';
    this.reactFailedTitle = 'La unión por reacción falló';
    this.reactSuccessTitle = 'Unirse por reacción';
    this.reactToJoinTitle = '¡Reacciona con cualquier emoji para unirte!';
    this.reactToJoinBody =
        'Si ha reaccionado, será incluido en el próximo `{}`';
    this.reactFailedTitle = 'La unión por reacción falló';
    this.reactFailedNotStarted =
        'No se puede encontrar el mensaje con reacciones. ¿Se inició una unión a través de reacciones?';
    this.reactFailedNoChannel =
        'No se puede encontrar el mensaje con reacciones. ¿Se eliminó el canal?';
    this.reactFailedNoMessage =
        'No se puede encontrar el mensaje con reacciones. ¿Fue eliminado?';
    this.reactNoUsers = 'Ningún usuario reaccionó.';
    this.createFailedUnknown = 'No se pudo crear el juego por razones desconocidas.';
    this.pauseAutoNoAutoTitle = 'No se reproduce automáticamente.';
    // {} is replaced with command prefix.
    this.pauseAutoNoAutoBody = 'Si desea reproducir automáticamente, escriba `{}autoplay`.';
    // {} is replaced with the ID of the user that ran the command.
    this.pauseAuto =
        '<@{}> `La reproducción automática se detendrá al final del día actual.`';
    this.startAutoAlreadyEnabled = 'La reproducción automática ya está habilitada.';
    // {} is replaced with the command prefix.
    this.resumeAutoInstructions = 'Para reanudar el juego, usa `{}resume`.';
    // {} is replaced with the ID of the user that ran the command.
    this.startAutoDay = '<@{}> `¡Habilitando la reproducción automática! ¡A partir del día siguiente!`';
    // {} is replaced with the ID of the user that ran the command.
    this.startAutoGame = '<@{}> `La reproducción automática está habilitada. ¡Comenzando los juegos!`';
    this.enableAutoTitle = 'Habilitar la reproducción automática';
    // {} is replaced with the ID of the user that ran the command.
    this.enableAuto = '<@{}> `¡Habilitación de reproducción automática!`';
    this.pauseGameNoGame = 'Fallido: actualmente no hay un juego en progreso.';
    this.pauseGameAlreadyPaused = 'Fallido: el juego ya está en pausa.';
    this.pauseGameTitle = 'Pausa de juego';
    this.needStartGameTitle = '¡Debes comenzar un juego primero!';
    this.needStartGameBody = '¡Usa `{}start` para comenzar un juego!';
    this.nextDayAlreadySimulating = 'Ya simulando día.';
    this.nextDayAlredySimBroken =
        'Creo que ya estoy simulando ... si esto no es cierto, este juego se ha bloqueado y' +
        ' debes terminar el juego.';
    this.nextDayPermImagesTitle =
        'Lo siento, pero necesito permiso para enviar imágenes en este canal antes de' +
        ' poder comenzar los juegos.';
    this.nextDayPermImagesBody =
        'Asegúrese de tener el permiso "Adjuntar archivos" en este canal.';
    this.nextDayPermEmbedTitle =
        'Lo sentimos, pero necesito permiso para insertar mensajes en este canal ' +
        'antes de poder comenzar los juegos.';
    this.nextDayPermEmbedBody =
        'Asegúrese de tener el permiso "Insertar enlaces" en este canal.';
    this.noPermNext =
        'Lo sentimos, pero no tienes permiso para comenzar el día siguiente en los juegos.';
    this.endGameNoGame = 'No hay un juego en progreso.';
    this.endGameLoading =
        'El juego se está cargando actualmente. Por favor espere, inténtelo luego nuevamente.';
    this.endGameSuccess = '¡El juego ha terminado!';
    this.renameGameSuccess = 'Juego renombrado a';
    this.renameGameFail =
        '¡Uy! No pude cambiar el nombre a eso. Asegúrese de que tenga menos de 100 caracteres.';

    // {0} is the group that was modified (ie: "All users").
    // {1} is what was modified (ie: "have been added to the games.").
    this.excludeTemplate = '{0} {1}';
    this.usersAll = 'Todos los usuarios';
    this.usersOnline = 'Todos los usuarios en línea';
    this.usersOffline = 'Todos los usuarios desconectados';
    this.usersIdle = 'Todos los usuarios ausentes';
    this.usersDND = 'Todos los usuarios con estado DND';
    this.usersNPCs = 'Todos los NPC';
    this.usersBots = 'Bots';
    this.excludeBlocked = 'ahora están bloqueados de los juegos.';
    this.excludeFuture = 'serán eliminado del próximo juego.';
    this.excludePast = 'han sido eliminados de los juegos.';
    this.includeUnblocked = 'ahora pueden participar en los juegos.';
    this.includeFuture = 'se agregarán al próximo juego.';
    this.includePast = 'han sido agregados a los juegos.';
    this.noGame = 'No juego';

    this.excludeNoMention =
        'Debes especificar a quién deseas que excluya del próximo juego.';
    this.includeNoMention =
        'Debes especificar a quién deseas que incluya en el próximo juego.';

    this.stillLoading =
        'Todavía se está cargando un comando anterior.\nPor favor espere a que se complete.';
    this.usersInvalid = 'Usuarios inválidos';
    this.excludeInvalidId = '{} no es una ID válida.';
    this.includeBotsDisabled = '{} es un bot, pero los bot están deshabilitados.';
    this.includeSkipped = '{} omitido.';
    this.excludeLargeSuccess = 'Exitoso sin errores ({} excluidos)';
    this.includeLargeSuccess = 'Exitoso sin errores ({} excluidos)';
    this.excludeAlreadyExcluded = '{} ya está excluido.';
    this.includeAlreadyIncluded = '{} ya está incluido.';
    this.excludeUnableToFind = '{} no se puede encontrar (¿ya está excluido?)';
    this.includeUnableToFind = '{} no se puede encontrar (¿ya está incluido?)';
    this.excludeBlacklist = '{} añadido a la lista negra.';
    this.includeWhitelist = '{} añadido a la lista blanca.';
    this.excludeFailedUnknown = 'Error al eliminar a {} por una razón desconocida.';

    this.effectPlayerKillNoPlayer =
        'Por favor especifica un jugador en los juegos para matar.';
    this.effectPlayerHealNoPlayer =
        'Por favor especifica un jugador en los juegos para curar.';
    this.effectPlayerWoundNoPlayer =
        'Por favor especifique un jugador en los juegos a herir.';
    this.effectPlayerNoPlayer = 'No se dan jugadores.';
    this.effectPlayerNoPlayerFound = 'No se encontraron jugadores.';
    this.effectPlayerNoOutcome = 'Ningún resultado dado.';

    this.modifyPlayerTitle = 'Modificar jugador';
    this.modifyPlayerNoPlayer = 'Por favor especifique un jugador para modificar.';
    this.modifyPlayerNoPlayerInGame =
        'Por favor, especifique un jugador que esté en el juego.';
    this.modifyPlayerNoWeapon = 'Por favor, especifique un nombre de arma válido.';
    this.modifyPlayerMultipleWeapon =
        'No estoy seguro de qué arma querías, encontré más de una.';
    this.modifyPlayerCountNonZero = 'El recuento debe ser un número distinto de cero.';
    this.modifyPlayerUnableToFindWeapon = 'Incapaz de encontrar el arma.';
    // {0} is name of player modified, {1} is number of weapons player now has,
    // {2} is name of the consumable the player has.
    this.modifyPlayerNowHas = '{0} ahora tiene {1} {2}';
    // {0} is name of player modified, {1} is number of weapons player will
    // have, {2} is name of the consumable the player will have.
    this.modifyPlayerWillHave = '{0} tendrá {1} {2}';

    this.noGameInProgress = 'No hay juego en progreso.';
    this.unableToFindPlayer = 'No se puede encontrar el jugador.';

    this.playerRefreshInfo = 'Para actualizar: `{}create`';

    this.gameNotCreated = 'Aún no se ha creado un juego.';
    this.messageRejected =
        'Vaya, Discord rechazó mi mensaje por alguna razón ...';
    this.listPlayerTitle = 'Lista de jugadores';
    this.listPlayerNoPlayersTitle = 'No hay jugadores';
    this.listPlayerNoPlayersBody = 'Ningún juego creado o ningún jugador en el juego.';
    this.listPlayerIncludedNum = 'Incluido ({})';
    this.listPlayerExcludedNum = 'Excluido ({})';

    this.optionNoOptions = 'No se han establecido opciones.';
    this.optionCreateGame = 'Por favor crea un juego primero. `{}create`';
    this.optionInvalidChoice =
        '¡Esa no es una opción válida para cambiar! ({0})\nUsa `{1}options` para ver' +
        ' todas las opciones configurables.';
    this.optionTeamDuringGame =
        'Los equipos y los jugadores incluidos no pueden modificarse durante un juego.\n' +
        'Debes terminar el juego actual primero para hacer esto.';
    this.optionInvalidNumber =
        'Ese no es un valor válido para {0}, que requiere un número ' +
        '(Actualmente {1})';
    this.optionChangeTeam =
        'Establecido {0} desde {1} hasta {2}\nPara restablecer los equipos al tamaño correcto, escriba ' +
        '"{3}teams reset".\nEsto eliminará todos los equipos y creará nuevos.';
    this.optionChange = 'Establecido {0} de {2} a {1}';
    this.optionInvalidBoolean =
        'Ese no es un valor válido para {0}, que requiere true o false. ' +
        '(Actualmente {1})';
    this.optionServerToLargeExclude =
        'Debido a problemas de rendimiento, los servidores grandes deben excluir nuevos usuarios de forma predeterminada';
    this.optionInvalidString =
        'Ese no es un valor válido para {}, que requiere uno de los ' +
        'siguientes: {}. (Actualmente {})';
    this.optionInvalidObject = '¡`{}` no es una opción válida para cambiar!';
    this.optionInvalidType =
        'Cambiar el valor de esta opción aún no funciona. ({0}: {1})' +
        '\n{2}({3})';
    this.optionListTitle = 'Opciones actuales';
    this.optionListSimpleExampleTitle = 'Ejemplo simple';
    this.optionListSimpleExampleBody = '{}options includeBots true';
    this.optionListObjectExampleTitle = 'Ejemplo de cambio de objeto';
    this.optionListObjectExampleBody = '{}options playerOutcomeProbs kill 23';

    this.teamEditNoGame =
        'Actualmente no hay ningún juego para editar. Por favor cree uno primero.';
    this.teamEditInProgress =
        'Debes finalizar el juego actual antes de editar equipos.';
    this.teamEditNoTeams =
        'No hay equipos para editar. Si desea tener equipos, puede configurar ' +
        'teamSize para el tamaño de los equipos que deseas tener.';
    // {} is replaced with team number.
    this.teamDefaultName= 'Equipo {}';
    this.teamSwapNeedTwo =
        'El intercambio requiere mencionar a 2 usuarios para intercambiar equipos entre sí.';
    this.teamSwapNoTeam = 'Asegúrese de que ambos usuarios estén en un equipo.';
    this.teamSwapSuccess = '¡Jugadores intercambiados!';
    this.teamMoveNoMention = 'Debe mencionar al menos un usuario para moverse.';
    this.teamMoveNoTeam = '¿{} está en un equipo?';
    this.teamMoveBadFormat =
        'Asegúrese de que la primera opción sea el usuario y la segunda ' +
        'es el destino (ya sea una mención o una ID de equipo).';
    this.teamMoveSuccess = 'Moviendo `{0}` de {1} a {2}';
    this.teamRenameNoId =
        'Especifique una ID de equipo o mencione a alguien en un equipo para poder ' +
        'cambiar el nombre de su equipo.';
    this.teamRenameInvalidIdTitle = 'Por favor, especifique una ID de equipo válida';
    this.teamRenameInvalidIdBody = '(1 - {})';
    this.teamRenameSuccess = 'Renombrando "{0}" a "{1}"';
    this.teamRandomizeNoTeams = 'No hay equipos para aleatorizar.';
    this.teamRandomizeSuccess = '¡Los equipos han sido aleatorizados!';

    this.createInProgressTitle =
        'Este servidor ya tiene Hungry Games en progreso.';
    this.createInProgressBody =
        'Si desea crear uno nuevo, primero debe finalizar el actual ' +
        'haciendo "{}end".';
    this.createRefreshing = 'Actualizando el juego actual.';
    this.createNew =
        'Creé un Hungry Games con la configuración predeterminada y todos los miembros incluidos.';

    this.npcUnknownTitle = 'No estoy seguro de qué NPC es.';
    this.npcUnknownBody = '{0}\nUsa `{1}npc list` para mostrar todos los NPC actuales.';
    this.npcListTitle = 'Lista de NPC';
    this.npcTooMany =
        'Esto posiblemente se deba a que hay demasiados NPC en los juegos para ' +
        'mostrar en esta lista.';
    this.npcNoImage = 'Hmm, no me diste una imagen para usar como avatar.';
    this.npcNoUsername = 'Por favor, especifique un nombre de usuario válido.';
    this.npcBadURL = 'Hmm, ese enlace no parece funcionar.';
    this.npcBadURLMime =
        'Hmm, ese enlace no parece ser un formato compatible.';
    this.npcConfirmTitle = 'Confirmar creación de NPC';
    this.npcConfirmDescription =
        'Haga clic en la reacción {0} para confirmar, {1} para cancelar.';
    this.confirmed = 'Confirmado';
    this.cancelled = 'Cancelado';
    this.timedOut = 'Agotado el tiempo de espera';
    this.npcCreateWentWrongTitle =
        'Vaya, algo salió mal al crear ese NPC ...';
    this.npcCreateWentWrongBody = 'Esto no debería suceder D:';
    this.npcCreateFailed = 'Error al crear NPC';
    this.invalidAvatarURL = 'URL de avatar no válido.';
    this.invalidNPCId = 'ID de NPC no válido';
    this.avatarIdMismatch = 'La ID no coincide con la ID del avatar.';
    this.npcCreated = 'NPC creado: {}';
    this.npcRenameSpecify = 'Por favor especifique un NPC para cambiar el nombre.';
    this.npcRenameFailed = 'Error al cambiar el nombre de NPC';
    this.npcRenameSuccessTitle = 'NPC renombrado';
    this.npcRenameSuccessBody = '`{0}` a `{1}`';
    this.npcDeleteSpecify = 'Por favor especifique un NPC para eliminar.';
    this.npcDeleteFailed = 'Error al eliminar NPC';
    this.npcDeleteSuccess = 'NPC eliminado';
    this.npcHalfDiscovered =
        'Vaya, solo pude encontrar la mitad de ese NPC. Algo está roto...';

    this.statusCode = 'Código de estado: {}';
    this.invalidFileType = 'El tipo de archivo proporcionado no es compatible.';
    this.invalidFileSize = 'Asegúrese de que la imagen no sea más grande que {}MB.';
    this.unknownFileSize = 'No se puede determinar el tamaño de descarga.';
    this.invalidImage = 'No pude convertir ese archivo en una imagen.';

    this.noStats = 'No hay estadísticas';
    this.statsAfterGame =
        'No has comenzado un juego antes. Las estadísticas estarán disponibles después de ' +
        'que se inicie un juego.';
    this.statsUserTitle = 'Estadísticas de HG de {}';
    this.statsLifetime = 'Tiempo con vida';
    this.statsPrevious = 'Juego anterior';
    this.noGroupData = 'No hay datos de grupo todavía.';
    this.groupCreateFirst = 'Por favor crea un grupo primero.';
    this.groupTitle = 'Grupode estadísticas';
    this.groupNotFound = 'No pude encontrar ese grupo.';
    this.groupListFailedTitle = 'Error al obtener la lista de grupos.';
    this.groupListFailedBody = 'Algo se rompió ...';
    this.groupNone = 'No hay grupos creados.';
    this.groupCreatedAndSelected = 'Nuevo grupo de estadísticas creado y seleccionado';
    this.groupDisabled = 'Grupo de estadísticas deshabilitado';
    this.groupListCommand = 'Lista los grupos con `{}groups`';
    this.groupSelected = 'Grupo seleccionado';
    this.groupSpecifyId = 'Por favor, especifique una ID de grupo válida.';
    this.groupRenamed = 'Grupo renombrado';
    this.groupDeleted = 'Grupo eliminado: {}';
    this.statsNoData = 'No parece que hayas terminado un juego todavía.';
    this.groupNoData =
        'No parece que este grupo tenga datos del juego todavía.';
    this.completeGameFirst = '¡Vuelve después de un juego para ver tus estadísticas!';
    this.lbFailed =
        '¡Uy! Algo salió mal al buscar la clasificación ...';
    this.lbSendFailed =
        '¡Uy! No pude enviar la tabla de clasificación aquí por una razón desconocida.';
    this.rankedBy = 'Clasificar por {}';
    this.lifetime = 'Tiempo con vida';

    this.numsTitle = 'Estadísticas a través de shards';
    this.numsFailure = 'Vaya, algo salió mal al obtener estadísticas.';
    this.numsNumSimulating =
        'Actualmente hay {0} juegos simulando de {1} cargados actualmente.';
    this.numsLastListener = '';

    this.ended = 'Terminado';

    // English will only ever be used for this. Add languages to here, not
    // another language file.
    this.nothing = [
      'nix', 'naught', 'nothing', 'zilch', 'void', 'zero', 'zip', 'zippo',
      'diddly', '❌',
    ];

    this.groupWords = {
      everyone: ['everyone', '@everyone', 'all'],
      online: ['online', 'here', '@here'],
      offline: ['offline'],
      idle: ['idle', 'away', 'snooze', 'snoozed'],
      dnd: ['dnd', 'busy'],
      bots: ['bot', 'bots'],
      npcs: ['npc', 'npcs', 'ai', 'ais'],
    };

    this.pageNumbers = 'Página {0} de {1}';
    this.success = 'Correcto';
    this.noPermNext =
        'Lo sentimos, pero no tienes permiso para comenzar el día siguiente en los juegos.';

    this.genericNoPerm =
        'Error al ejecutar "{}" porque no tienes permiso para esto.';

    this.largeServerDisabled =
        'Lo sentimos, pero HG se ha deshabilitado temporalmente en servidores de más de 75000 personas.';
    this.largeServerDisabledSub =
        'Más información disponible en mi servidor de soporte.';
  }
}

module.exports = new EsEsHG();
