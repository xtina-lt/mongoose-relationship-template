/*
WRITTEN BY:                                                                                                                                                
      __                               __                              
__  _| |_(_)_  _    _  _   __  __    _| | ___  ___ 
\ \/ / __| | '_ \ / _` | / __/ _ \ / _` |/ _ \/ __|
 >  <| |_| | | | | (_| || (_| (_) | (_| |  __/\__ \
/_/\_\\__|_|_| |_|\__,_(_)___\___/ \__,_|\___||___/
                                                                                        
PURPOSE: 
    - TODO: Update with JWT's
    - model for the a anything concting to another collection
    - modularization: creates collection structure
    - can be used for: user, address, etc.
*/

import {model, Schema} from 'mongoose';
const UserSchema = new Schema(
    {
        fName: {
            type: String,
            required: [true, "Name required 🦄!"],
            minlength: [2, "Oh no! Too short! Min 2 characters🦄!"],
            maxlength: [255, "Oh no! Too long! Max 255 characters🦄.."]
        },
        lName: {
            type: String,
            required: [true, "Name required 🦄!"],
            minlength: [2, "Oh no! Too short! Min 2 characters🦄!"],
            maxlength: [255, "Oh no! Too long! Max 255 characters🦄.."]
        },
        age: {
            type: Number,
            required: [true, "Age required 🦄!"],
            min: [2, "Oops too young 🦄"]
        },
        level: {
            type: String,
            enum : ["general", "star", "superstar"],
            default: "general"
        }
    },
    { timestamps: true }
);
const User = model("User", UserSchema);
export default User;
