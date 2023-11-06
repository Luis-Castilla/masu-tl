const axios = require('axios');
const CustomError = require('../utils/error-handler');
const config = require('../config/config');

/**
 * Module Products Service.
 * @module ProductsService
 */

/**
 * Fetches a product by its ID from the external API.
 *
 * @function
 * @async
 * @param {number} productId - The ID of the product to retrieve.
 * @returns {Promise<Object>} The product data if found.
 * @throws {CustomError} If an error occurs during the API request.
 */
const getProductById = async (productId) => {

  const baseUrl = config.dummyData.url;
  const apiUrl = `${baseUrl}/${productId}`;

  try {
    const response = await axios.get(apiUrl);

    if (!response.data) {
      throw new CustomError(404, 'Product not found');
    }

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new CustomError(404, 'Product not found');
    }

    throw new CustomError(500, 'Something went wrong');
  }
};

/**
 * Fetches products from an external API with options for pagination, selection, and searching.
 *
 * @function
 * @async
 * @param {Object} options - The options for the product retrieval.
 * @param {number} [options.limit] - The number of products to limit per page.
 * @param {number} [options.skip] - The number of products to skip before starting.
 * @param {string} [options.select] - A comma-separated list of fields to select.
 * @param {string} [options.search] - A search query to filter products.
 *
 * @returns {Promise<Object>} The list of products based on the specified options.
 * @throws {CustomError} If an error occurs during the API request.
 */
const getProducts = async (options) => {
  const { limit, skip, select, search } = options;
  const baseUrl = config.dummyData.url;

  const params = {};
  if (limit) params.limit = limit;
  if (skip) params.skip = skip;
  if (select) params.select = select;
  if (search) {
    params.q = select;
    const response = await axios.get(`${baseUrl}/search`, { params });
    return response.data;
  };

  try {
    const response = await axios.get(baseUrl, { params });
    return response.data;
  } catch (error) {
    throw new CustomError(500, 'Something went wrong');
  }
};

module.exports = {
  getProductById,
  getProducts
};