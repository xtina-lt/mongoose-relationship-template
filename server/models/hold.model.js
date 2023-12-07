/*
WRITTEN BY:                                                                                                                                                
      __                               __                              
__  _| |_(_)_  _    _  _   __  __    _| | ___  ___ 
\ \/ / __| | '_ \ / _` | / __/ _ \ / _` |/ _ \/ __|
 >  <| |_| | | | | (_| || (_| (_) | (_| |  __/\__ \
/_/\_\\__|_|_| |_|\__,_(_)___\___/ \__,_|\___||___/
                                                                                        
PURPOSE: 
    - model for the one to many relationship
    - modularization: creates collection structure
    - can be used for comments on an object  

*/
import { model, Schema } from 'mongoose';

const HoldSchema = new Schema(
    {
        attribute: {
            type: String,
            required: [true, "attribute required 🦄!"],
            minlength: [2, "Oh no! Too short! Min 2 characters🦄!"],
            maxlength: [255, "Oh no! Too long! Max 255 characters🦄.."]
        },
    },
    { timestamps: true }
);


const Hold = model("Hold", HoldSchema);
export default Hold;
