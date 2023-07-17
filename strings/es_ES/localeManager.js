// Copyright 2019-2020 Campbell Crowley. All rights reserved.
// Author: Campbell Crowley (dev@campbellcrowley.com)
const Locale = require('../../src/locale/Locale.js');

/**
 * @description Español España.
 * @augments Locale
 */
class EsEsLocaleManager extends Locale {
  /**
   * @description Constructor.
   */
  constructor() {
    super();
    this.title = 'Configurar localización';
    this.invalidLocale =
        'Lenguaje desconocido No sé qué idioma ha solicitado.';
    this.confirmLocale = '¿Estás seguro de que deseas cambiar tu idioma?';
    this.confirmLocaleReact = '{}\nReaccione con {} para confirmar.';
    this.currentLocale = 'Idioma actual: `{}`';
  }
}

module.exports = new EsEsLocaleManager();
