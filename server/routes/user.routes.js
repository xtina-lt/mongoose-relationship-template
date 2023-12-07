/*
WRITTEN BY:                                                                                                                                                
      __                               __                              
__  _| |_(_)_  _    _  _   __  __    _| | ___  ___ 
\ \/ / __| | '_ \ / _` | / __/ _ \ / _` |/ _ \/ __|
 >  <| |_| | | | | (_| || (_| (_) | (_| |  __/\__ \
/_/\_\\__|_|_| |_|\__,_(_)___\___/ \__,_|\___||___/
                                                                                        
PURPOSE: 
    - routes for the "one" in one to many
    - modularization: from the server, creates a direction between the client's input and the db
*/
import { Router } from 'express'
import CONTROLLER from '../controllers/user.controller.js'

const router = Router()

router.route("/user")
    .post(CONTROLLER.create)
    .get(CONTROLLER.readAll)

router.route("/user/:id")
    .get(CONTROLLER.readOne)
    .patch(CONTROLLER.update)
    .delete(CONTROLLER.delete)

export default router