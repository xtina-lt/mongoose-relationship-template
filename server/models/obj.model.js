
/*
WRITTEN BY:                                                                                                                                                
      __                               __                              
__  _| |_(_)_  _    _  _   __  __    _| | ___  ___ 
\ \/ / __| | '_ \ / _` | / __/ _ \ / _` |/ _ \/ __|
 >  <| |_| | | | | (_| || (_| (_) | (_| |  __/\__ \
/_/\_\\__|_|_| |_|\__,_(_)___\___/ \__,_|\___||___/
                                                                                        
PURPOSE: 
    - model for the connecting collections
    - modularization: creates collection structure
    - can be used for: movies, books, playlists, etc. 
*/

import { model, Schema, mongoose } from 'mongoose';

// 1 ) SCHEMA 
//      - attributes, datatypes, and validations
//      - NO ID NEEDED
const ObjSchema = new Schema(
    {
        // attribute
        attribute: {
            // datatype
            type: String,
            // validations
            required: [true, "attribute required 🦄!"],
            minlength: [2, "Oh no! Too short! Min 2 characters🦄!"],
            maxlength: [255, "Oh no! Too long! Max 255 characters🦄.."]
        },
        holds: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Hold',
            }
        ],
        // TO DO: PUT BACK IN FOR LOGIN
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        isCeleb: {
            type: Boolean,
            default: false
        }
    },
    // OPTIONS OBJECT
    //  - including timestamp
    { timestamps: true }
);

//  2 )  EXPORT
const Obj = model("Obj", ObjSchema);
export default Obj;
