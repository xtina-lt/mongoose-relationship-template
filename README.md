Mongoose Relationships Template

 - [x] One to One
 - [x] One to Many
 - [x] Two relationships on one collection
 - [x] Populate
 - [x] Delete functionality that updates other collections.
 - [ ] Add JWT Tokens (will do later)

# One to One
```
const ObjSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    }
);

```

# One to Many
```
const ObjSchema = new Schema(
    {
        holds: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Hold',
            }
        ]
    }
);

```

# Controller - Populate

```
// NORMAL DOUBLESHIP
readAll: async (req, res) => {
    try {
        temp = await MODEL.find()
                 // ONE FOR EACH RELATIONSHIP
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
}

// FOR CREATE YOU WANT TO CREATE FIRST,
// THEN YOU CAN POPULATE
create: async (req, res) => {
    try {
            // create
        temp = await (
                // populate created
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
```


# Response Screenshots

### Relationships Show
 - [x] One to One
 - [x] One to Many
 - [x] Two relationships on one collection
 - [x] Populate

![Showing Resoonse](/assets-readme/results.png)

### Deleteing a Document in a Joined Collection
 - [x] Populate
 - [x] Delete functionality that updates other collections.

- Deleted holds just takes one off of the list.

 ![Showing Deleted User](/assets-readme/show-delete.png)


 # Just for Funsies 🦄
 - [x] Made utility from boxen and chalk
 - [x] Colorize port success message.
 - [x] Colorize db connection message.

  ![Console Log Fun](/assets-readme/fun.png)