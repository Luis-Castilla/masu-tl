const productService = require('../services/products-service')
const {
    setResponseWithError,
    setResponseWithOk,
} = require('../utils/common-response')

/**
 * Module Products Controller.
 * @module ProductsController
 */

/**
 * Handles the retrieval of a product by its ID and sends an HTTP response.
 *
 * @function
 * @async
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {Promise<Object>} The product data if found.
 * @throws {Error} If the product is not found or an error occurs.
 */
const getProductById = async (req, res) => {
    try {
        const productId = req.params.id
        const product = await productService.getProductById(productId)
        setResponseWithOk(res, 200, { product: product })
    } catch (error) {
        setResponseWithError(res, error.status, error.message)
    }
}

/**
 * Retrieves and handles products based on request parameters.
 * Uses options for pagination, selection, and searching.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 *
 * @returns {Promise<{ products: Array<Product>, limit: number, skip: number, total: number }>} The products data if found.
 * @throws {Error} If an error occurs.
 */
const getProducts = async (req, res) => {
    const { limit, skip, select, q: search } = req.query

    const options = {
        limit: limit || undefined,
        skip: skip || undefined,
        select: select || undefined,
        search: search || undefined,
    }

    try {
        const products = await productService.getProducts(options)
        setResponseWithOk(res, 200, products)
    } catch (error) {
        setResponseWithError(res, error.status, error.message)
    }
}

module.exports = {
    getProductById,
    getProducts,
}
