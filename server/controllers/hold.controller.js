/*
WRITTEN BY:                                                                                                                                                
      __                               __                              
__  _| |_(_)_  _    _  _   __  __    _| | ___  ___ 
\ \/ / __| | '_ \ / _` | / __/ _ \ / _` |/ _ \/ __|
 >  <| |_| | | | | (_| || (_| (_) | (_| |  __/\__ \
/_/\_\\__|_|_| |_|\__,_(_)___\___/ \__,_|\___||___/
                                                                                        
PURPOSE: 
    - controller for the one to many relationship
    - modularizes logic for db manipulation   

*/
import Hold from "../models/hold.model.js";

let temp = {}

export default {
    create: async (req, res) => {
        try {
            temp = await Hold.create(req.body);
            res.json(temp);
        } catch (e) {
            // all mongo created model errors
            temp = e.errors;
            res.status(400).json(temp);
        }
    },
    readAll: async (req, res) => {
        try {
            temp = await Hold.find();
            res.json(temp);
        } catch (e) {
            // custom error message
            temp = {
                message: 'problem finding reading all',
                error: e
            }
            res.status(400).json(temp)
        }
    },
    readOne: async (req, res) => {
        try {
            temp = await Hold.findById(req.params.id);
            res.json(temp);
        } catch (e) {
            // custom error message
            temp = {
                message: 'Error finding one.',
                error: e
            }
            res.status(400).json( temp );
        }
    },
    update: async (req, res) => {
        try {
            // .findOneAndUpdate(id, body, options)
            temp = await Hold.findOneAndUpdate(
                { _id: req.params.id }, req.body,
                { new: true, runValidators: true }
            )
            res.json(temp);
        } catch (e) {
            // all mongo created model errors
            temp = e.errors
            res.status(400).json(temp);
        }
    },
    delete: async (req, res) => {
        try {
            temp = await Hold.findByIdAndDelete(req.params.id)
            res.status(201).json(temp)
        } catch (e) {
            // custom error message
            temp = {
                message: 'problem finding reading all',
                error: e
            }
            res.status(400).json(temp)
        }
    }

}





// WHAT E LOOKS LIKE WITHOUT SPECIFYING E.ERRORS:
// rror: Validation failed: attribute: Oh no! Too short! Min 2 characters🦄!
//     at ValidationError.inspect (C:\Users\xtina_hc135xt\Dropbox\new-mern\mongo-db\basic\mongoose-connect\server\node_modules\mongoose\lib\error\validation.js:50:26)
//     at formatValue (node:internal/util/inspect:805:19)
//     at inspect (node:internal/util/inspect:364:10)
//     at formatWithOptionsInternal (node:internal/util/inspect:2298:40)
//     at formatWithOptions (node:internal/util/inspect:2160:10)
//     at console.value (node:internal/console/constructor:342:14)
//     at console.log (node:internal/console/constructor:379:61)
//     at update (file:///C:/Users/xtina_hc135xt/Dropbox/new-mern/mongo-db/basic/mongoose-connect/server/controllers/hold.controller.js:41:21)
//     at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
//   errors: {
//     attribute: ValidatorError: Oh no! Too short! Min 2 characters🦄!
//         at validate (C:\Users\xtina_hc135xt\Dropbox\new-mern\mongo-db\basic\mongoose-connect\server\node_modules\mongoose\lib\schemaType.js:1365:13)
//         at SchemaType.doValidate (C:\Users\xtina_hc135xt\Dropbox\new-mern\mongo-db\basic\mongoose-connect\server\node_modules\mongoose\lib\schemaType.js:1349:7)
//         at C:\Users\xtina_hc135xt\Dropbox\new-mern\mongo-db\basic\mongoose-connect\server\node_modules\mongoose\lib\helpers\updateValidators.js:151:22
//         at module.exports (C:\Users\xtina_hc135xt\Dropbox\new-mern\mongo-db\basic\mongoose-connect\server\node_modules\mongoose\lib\helpers\updateValidators.js:202:7)
//         at C:\Users\xtina_hc135xt\Dropbox\new-mern\mongo-db\basic\mongoose-connect\server\node_modules\mongoose\lib\query.js:3784:7
//         at new Promise (<anonymous>)
//         at model.Query.validate (C:\Users\xtina_hc135xt\Dropbox\new-mern\mongo-db\basic\mongoose-connect\server\node_modules\mongoose\lib\query.js:3783:11)
//         at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
//         at async model.Query._findOneAndUpdate (C:\Users\xtina_hc135xt\Dropbox\new-mern\mongo-db\basic\mongoose-connect\server\node_modules\mongoose\lib\query.js:3292:5)
//         at async model.Query.exec (C:\Users\xtina_hc135xt\Dropbox\new-mern\mongo-db\basic\mongoose-connect\server\node_modules\mongoose\lib\query.js:4290:63) {
//       properties: [Object],
//       kind: 'minlength',
//       path: 'attribute',
//       value: '!',
//       reason: undefined,
//       [Symbol(mongoose#validatorError)]: true
//     }
//   },
//   _message: 'Validation failed'
// }
