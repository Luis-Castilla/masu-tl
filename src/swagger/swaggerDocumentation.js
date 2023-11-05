/**
/**
 * @swagger
 * /api/v1/products:
 *   get:
 *     summary: Get a list of products with pagination and filtering
 *     description: Retrieve a list of products from the API with support for pagination and filtering.
 *     tags:
 *       - Products
 *     parameters:
 *       - in: query
 *         name: page
 *         description: The page number for pagination (default is 1).
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         description: The number of items to return per page (default is 10).
 *         schema:
 *           type: integer
 *       - in: query
 *         name: offset
 *         description: The starting position for items to return per page (default is 10).
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A successful response with a list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

/**
 * @swagger
 * /api/v1/product/{id}:
 *   get:
 *     summary: Get a single product by ID
 *     description: Retrieve a product by its unique ID from the API.
 *     tags:
 *       - Products
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the product to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A successful response with a single product.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Bad request (Product not found).
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         price:
 *           type: number
 *         discountPercentage:
 *           type: number
 *         rating:
 *           type: number
 *         stock:
 *           type: integer
 *         brand:
 *           type: string
 *         category:
 *           type: string
 *         thumbnail:
 *           type: string
 *         images:
 *           type: array
 *           items:
 *             type: string
 */
