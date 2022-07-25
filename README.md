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
    StatusCode: 201 CREATED

## 2 - Alterar um

### Request

`PUT api/hero/`

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
        "teamwork": "Indiferente"
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
        "teamwork": "Indiferente",
        "message": "Success"
    }
    StatusCode: 200 OK

## 3 - Listar todos

### Request

`GET api/hero/`


### Response

    [
        {
            "id": 1658774450348,
            "heroName": "Capitão América",
            "cities": [
                "New York"
            ],
            "disasters": [
                "assalto a bancos",
                "desastres naturais"
            ],
            "teamwork": "Indiferente"
        },
        {
            "id": 1658774866253,
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
        },
        {
            "id": 1658775650137,
            "heroName": "Wolverine",
            "cities": [
                "New York",
                "Tóquio"
            ],
            "disasters": [
                "assalto a bancos",
                "monstros gigantes",
                "desastres naturais"
            ],
            "teamwork": "Sim"
        },
        {
            "id": 1658775691989,
            "heroName": "Superman",
            "cities": [
                "New York"
            ],
            "disasters": [
                "assalto a bancos",
                "monstros gigantes",
                "desastres naturais"
            ],
            "teamwork": "Indiferente"
        },
        {
            "id": 1658775741648,
            "heroName": "Ninja Jiraya",
            "cities": [
                "Tóquio"
            ],
            "disasters": [
                "monstros gigantes"
            ],
            "teamwork": "Sim"
        },
        {
            "id": 1658775783659,
            "heroName": "Macha Solar",
            "cities": [
                "Rio de Janeiro",
                "New York"
            ],
            "disasters": [
                "monstros gigantes",
                "assalto a bancos",
                "desastres naturais"
            ],
            "teamwork": "Sim"
        },
        {
            "id": 1658775814113,
            "heroName": "Magma",
            "cities": [
                "Rio de Janeiro"
            ],
            "disasters": [
                "desastres naturais"
            ],
            "teamwork": "Sim"
        }
    ]
    StatusCode: 200 OK

## 3 - Listar um

### Request

`GET api/hero/:id`

### Response

        {
        "id": 1658774866253,
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
        StatusCode: 200 OK   

## 3 - Deletar um

### Request

`DELETE api/hero/:id`

### Response

    {
        "message": "Success"
    }
    StatusCode: 200 OK   