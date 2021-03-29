# NEO MK FIGHTERS API
## Created By: Dimetri Shearwood // Matthew Wilson // Brandon Mays

##### Technologies:
* Language: Javascript
* Libraries: React, Mongoose
* Framework: Express
* Database: MongoDB

  


### End Points: 
`https://over-9000.herokuapp.com/fighters/fighters/` `https://over-9000.herokuapp.com/fighters/tracks/`

#### JSON Object Abstractions

* Fighter: `name`, `attack`, `description`, `origin`
* Tracks: `name`, `url`

*Engineer's Note:* *The following CRUD Operations are interchangeable between endpoints... use JSON object names accordingly*

## This API uses HTTP GET to query
### Initiating retrieval of objects

#### Example: `$ https://over-9000.herokuapp.com/fighters/tracks/`

##### Successful Output: 

```
"tracks": [
        {
            "name": "Rick and Morty Theme Song",
            "url": "https://www.youtube.com/watch?v=wh10k2LPZiI"
        },
        {
            "name": "Mewtwo Theme Song",
            "url": "https://www.youtube.com/watch?v=2WZsZReahfg"
        },
        {
            "name": "Yu Yu Hakusho Theme Song",
            "url": "https://www.youtube.com/watch?v=8IDTNHRXhXY"
        },
        {
            "name": "Death Note Opening Song",
            "url": "https://www.youtube.com/watch?v=K526mjMCDfQ"
        },
        {
            "name": "Space Ghost Theme Intro",
            "url": "https://www.youtube.com/watch?v=7FRW2bOqvzI"
        },
        {
            "name": "Naruto Theme Song",
            "url": "https://www.youtube.com/watch?v=jqXUm2YS-mM"
        },
        {
            "name": "Vegeta Theme Song",
            "url": "https://www.youtube.com/watch?v=6lGuDTRilKQ"
        }

    ]....

```

## POST
### This will allow you to create a new fighter.


#### Template: `$ http post https://over-9000.herokuapp.com/fighters/fighters/<word here> name=" " attack=" " description=" " origin=" "`



##### Successful Output: 
```
   {
            "name": " ",
            "attack": " ",
            "description": " ",
            "origin": " "
        }
    
```

## PUT
### This will the user to edit the prebuilt fighter.

#### Template: `$ http put https://over-9000.herokuapp.com/fighters/fighters/ description=" "`



##### Successful Output: 
```
{
       {
            "name": "Edited Content",
            "attack": " ",
            "description": " ",
            "origin": " "
        },
}
```

## DELETE
### This will delete the targeted JSON object (fighter or track) 

#### Template: `$ http delete https://over-9000.herokuapp.com/fighters/fighters/`



##### Expected result: 
```
{
    "ok": true
}
```
