// Copyright 2019 Campbell Crowley. All rights reserved.
// Author: Campbell Crowley (dev@campbellcrowley.com)
const Locale = require('../../src/locale/Locale.js');

/**
 * @description Español España.
 * @augments Locale
 */
class EsEsGlobal extends Locale {
  /**
   * @description Constructor.
   */
  constructor() {
    super();
  }
}

module.exports = new EsEsGlobal();
