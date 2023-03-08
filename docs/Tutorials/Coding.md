---
sidebar_position: 3
---

## About

We offer the possibility to manipulate a whole world with javascript and provide easy usable functions & snippets.

## Requirements

Basic knowledge in javascript

## Hello world popup

1. Open an code editor by editing an asset or room.
2. Write

```jsx
alert('Hello world');
```

3. Save and reload

Hello world should appear now directly for every user.

---

Ok that was easy ... let me explain the different hooks.

## Hooks

`Create` = The code will be executed if the player enters a room

`Destroy` = The code will be executed if the asset is destroyed

`Interact` = The code will be executed if the player interacts with the object

`Over` = The code will be executed if the player is over the object

`Next` = The code will be executed if the player is next to the object

Please note : World code will always execute on start hooks cant be changed here

## Object classes

## Asset
| Property        | Data Type | Description                          |
|-----------------|-----------|--------------------------------------|
| id              | string    | Asset ID                             |
| worldId         | string    | World ID that the asset belongs to   |
| mapPos          | MapPosition | Asset's position on the map          |
| builderAssetId  | string    | ID of the related asset builder pack            |
| isTile          | boolean   | Boolean indicating if the asset is a tile or not |
| source          | string    | Source string of the asset, fetched from assetService |
| data            | AssetData | Dynamic object containing data for the asset |

## AssetData
| Property        | Data Type | Description                          |
|-----------------|-----------|--------------------------------------|
| respawn         | RespawnData | Data for asset's respawn           |
| direction       | DIRECTION | Asset's direction on the map          |
| canAttack       | boolean   | Boolean indicating if the asset can attack or not |
| moveable        | boolean   | Boolean indicating if the asset can be moved or not |
| underlining     | boolean   | Boolean indicating if the asset is underlining or not |
| hasCode         | boolean   | Boolean indicating if the asset has a code or not |
| life            | number    | Current life of the asset            |
| maxLife         | number    | Maximum life of the asset            |
| x               | number    | Asset's x position on the map         |
| y               | number    | Asset's y position on the map         |
| zHeight         | number    | Asset's z height on the map           |
| width           | number    | Asset's width on the map              |
| height          | number    | Asset's height on the map             |


## Player
| Property        | Data Type | Description                          |
|-----------------|-----------|--------------------------------------|
| id              | string    | Player ID                            |
| name            | string    | Player's name                        |
| worldId         | string    | World ID that the player belongs to  |
| source          | string    | Source string of the player          |
| mapPos          | MapPosition | Player's position on the map         |
| direction       | DIRECTION | Player's direction on the map        |
| walletAddress   | string    | Player's wallet address              |
| data            | PlayerData | Dynamic object containing data for the player |

PlayerData interface:
| Property        | Data Type | Description                          |
|-----------------|-----------|--------------------------------------|
| life            | number    | Current life of the player           |
| maxLife         | number    | Maximum life of the player           |

## Variables

| Name                  | Type              | Description                                            |
|-----------------------|-------------------|--------------------------------------------------------|
| $this                 | Asset      | Current asset                                   |
| $thisObject           | Pixi.js map object| The asset map object                                          |
| destroyedByPlayerId   | string? | Player id that destroyed the asset                   |
| player                | Player      | Current player                                         |
| playerObject          | Player     | Current player           map object                               |
| players               | Player[] | List of players in the game                             |
| assets                | Asset[] | List of assets in the game                              |
| hunting               | boolean           | Flag to indicate if the asset is hunting the player       |


## Functions
| Name                  | Parameters              | Description                                           |
|-----------------------|-------------------------|-------------------------------------------------------|
| setProvider           | provider: `string`               | Change the web3 http provider                         |
| hitPlayer             | playerId: `string`                | Send a request to hit a player                        |
| addTokens             | tokenAddress: `string`             | Add a specific token address to the player's token list|
| transferToken         | receiverAddress: `string`, tokenAddress: `string`, amount: `string`  | Transfer a token to a receiver address     |
| warp                  | world: `string`, x: `number`, y: `number`             | Teleport the player to a specific location            |
| warpToPlace           | x: `number`, y: `number`                    | Teleport the player to a specific location            |
| showLink              | link: `string`                     | Open an external link                                 |
| displaySpeechBubble   | text: `string`                     | Display a speech bubble with the specified text       |
| displayEventMessage   | text: `string`                    | Display a message with the specified text             |
| displayMessage        | text: `string`                    | Display a message with the specified text             |
| showDialog            | title: `string`, body: `string`, buttons: `Button[]`     | Display a dialog with the specified title, body, and buttons |
| attackPlayerIfNextTo  | None                    | Check if the player is next to the asset and attack it |
| attackNextTo          | None                    | Move the asset towards the player and attack           |
| moveTo                | x: `number`, y: `number`                    | Move the asset to a specific location                  |
| isPlayerInRadius      | radius: `number`                  | Check if the player is within a specified radius of the asset |
| huntPlayer            | radius: `number`                  | Hunt the player in the given radius                    |
| executeIfPlayerInRadius| radius: `number`, func: `function`           | Execute a function if the player is within a specified radius of the asset |
| moveToPlayerIfInRadius| radius: `number`                  | Move the asset towards the player if within a specified radius |
| addPlayerMoveListner  | callback: `function`                | Listen to the player's movements                       |
| addOpenAiAnswerListner| None                    | Listen to the player's messages and respond with OpenAI |
| displayEffect         | mapPos: `{c:number,r:number}`, effectPath: `string`, duration: `number`, data: `todo` | Function to display a visual effect          |
| getTokenBalance       | address: `string`, tokenAddress: `string`   | Function to get the token balance of an address and token |
| getNFTCount           | address: `string`, nfttokenAddress: `string`| Function to get the number of NFTs owned by an address |