/*
WRITTEN BY:                                                                                                                                                
      __                               __                              
__  _| |_(_)_  _    _  _   __  __    _| | ___  ___ 
\ \/ / __| | '_ \ / _` | / __/ _ \ / _` |/ _ \/ __|
 >  <| |_| | | | | (_| || (_| (_) | (_| |  __/\__ \
/_/\_\\__|_|_| |_|\__,_(_)___\___/ \__,_|\___||___/
                                                                                        
PURPOSE: 
    - controller for the collection that holds both relationships
    - modularizes logic for db manipulation   

*/
import MODEL from "../models/obj.model.js";

let temp = {}

export default {
    create: async (req, res) => {
        try {
            temp = await (
                    await MODEL.create(req.body))
                        // JOIN TO GET THE RELATIONSHIP'S ARR
                                    .populate("holds")
                                        .populate("user")
            res.json(temp);
        } catch (e) {
            // all mongo created model errors
            temp = e.errors;
            res.status(400).json(temp);
        }
    },
    readAll: async (req, res) => {
        try {
            temp = await MODEL.find()
                                .populate("holds")
                                    .populate("user")
            res.json(temp);
        } catch (e) {
            // custom error message
            console.log(e)
            temp = {
                message: 'problem finding reading all',
                error: e
            }
            res.status(400).json(temp)
        }
    },
    readOne: async (req, res) => {
        try {
            temp = await MODEL.findById(req.params.id)
                                .populate("holds")
                                    .populate("user")
            res.json(temp);
        } catch (e) {
            // custom error message
            temp = {
                message: 'Error finding one.',
                error: e
            }
            res.status(400).json(temp);
        }
    },
    update: async (req, res) => {
        try {
            // .findOneAndUpdate(id, body, options)
            temp = await MODEL.findOneAndUpdate(
                                    { _id: req.params.id }, req.body,
                                    { new: true, runValidators: true })
                                .populate("holds")
                                    .populate("user")
            res.json(temp);
        } catch (e) {
            // all mongo created model errors
            temp = e.errors
            res.status(400).json(temp);
        }
    },
    delete: async (req, res) => {
        try {
            temp = await MODEL.findByIdAndDelete(req.params.id)
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
