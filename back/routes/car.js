const express = require("express");

const router = express.Router();

const { newCar, getCars } = require("../controllers/carController");
const protect = require("../middleware/authMiddleware");

/**
* @swagger
*  components:
*   schemas:
*    Car:
*     type: object
*     required:
*      - marque
*      - modele
*      - annee
*      - carburant
*     properties:
*      id:
*       type: string
*       description: mongo id
*      marque:
*       type: string
*       description: marque de la voiture
*      modele:
*       type: string
*       description: modele de la voiture
*      annee:
*       type: string
*       description: annee de la voiture
*      carburant:
*       type: string
*       description: carburant de la voiture
*     example:
*      id: d5fE_asz
*      marque: Ferrari
*      modele: Joli modele
*      annee: 1998
*      carburant: essence
*/

 /**
  * @swagger
  * tags:
  *   name: Car
  *   description: Operations about cars
  */


/**
 * @swagger
 * /car/car:
 *   post:
 *     summary: Create a new car
 *     tags: [Car]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *       parameters:
 *        - name: marque
 *          description: marque de la voiture
 *          in: formData
 *          required: true
 *          type: string
 *       responses:
 *        200:
 *         description: The car was successfully added
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Car'
 *       500:
 *         description: Some server error
 */
router.route("/car").post(protect, newCar);

/**
 * @swagger
 * /cars/cars:
 *  get:
 *      summary: "Get all cars from the collection"
 *      tags: [Car]
 *      description: Get All cars
 *      responses: 
 *          200:
 *              description: Success
 */


router.get("/cars", getCars);

module.exports = router;
