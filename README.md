# 99HERO-API

## Install

    `npm i`

## Run the app

    `npm run dev`

# Heroes route

## 1 - Cadastro

### Request

`POST api/hero/`

    {
        "name": "Tommy Oliver",
        "heroName": "Power Ranger Branco",
        "cities": [
            "New York",
            "Tóquio"
        ],
        "disasters": [
            "monstros gigantes",
            "desastres naturais"
        ],
        "teamwork": "Sim"
    }

### Response

    {
        "name": "Tommy Oliver",
        "heroName": "Power Ranger Branco",
        "cities": [
            "New York",
            "Tóquio"
        ],
        "disasters": [
            "monstros gigantes",
            "desastres naturais"
        ],
        "teamwork": "Sim",
        "message": "Success"
    }
    Status: 201 CREATED