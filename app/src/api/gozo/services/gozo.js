'use strict';

/**
 * gozo service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gozo.gozo');
