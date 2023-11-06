/**
 * Module providing configuration for the Dummy Data API URL.
 * @module dummyConfig
 */

/**
 * Configuration object for the Dummy Data API URL.
 * @property {string} url - The URL of the Dummy Data API.
 */
const dummyData = {
  url: process.env.DUMMY_DATA_URL || 'https://dummyjson.com/products'
};

module.exports = {
  dummyData
};