const express = require("express");
const { registerUser, authUser } = require("../controllers/userController");

const router = express.Router();


/**
* @swagger
* tags:
*   name: User
*   description: Operations about users
*/


/**
*@swagger
* /user/login:
*    post:
*      tags:
*      - User
*      summary: "Create user"
*      description: "This can only be done by the logged in user."
*      operationId: "createUser"
*      produces:
*      - "application/xml"
*      - "application/json"
*      parameters:
*      - in: "body"
*        name: "body"
*        description: "Created user object"
*        required: true
*      example:
*       id: bob
*       name: geo
*      responses:
*        default:
*          description: "successful operation" 
*/
router.post("/login", authUser);

router.route("/").post(registerUser);

module.exports = router;
