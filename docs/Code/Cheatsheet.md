---
sidebar_position: 6
---

## Hooks

Hooks tell when a code should be executed, there are different hooks which are useful depending on the situation.

<hr />

`Create` = The code will be executed if the player enters a room

`Destroy` = The code will be executed if the asset is destroyed

`Interact` = The code will be executed if the player interacts with the object

`Over` = The code will be executed if the player is over the object

`Next` = The code will be executed if the player is next to the object

## Interfaces

### Asset

| Property       | Data Type                   | Description                                           |
| -------------- | --------------------------- | ----------------------------------------------------- |
| id             | string                      | Asset ID                                              |
| worldId        | string                      | World ID that the asset belongs to                    |
| mapPos         | [MapPosition](#mapposition) | Asset's position on the map                           |
| builderAssetId | string                      | ID of the related asset builder pack                  |
| isTile         | boolean                     | Boolean indicating if the asset is a tile or not      |
| source         | string                      | Source string of the asset, fetched from assetService |
| data           | [AssetData](#assetdata)     | Dynamic object containing data for the asset          |

### AssetData

| Property    | Data Type                   | Description                                              |
| ----------- | --------------------------- | -------------------------------------------------------- |
| respawn     | [RespawnData](#respawndata) | Data for asset's respawn                                 |
| direction   | [Direction](#direction)     | Asset's direction on the map                             |
| moveable    | boolean                     | Indicating if playeres can move over the asset           |
| underlining | boolean                     | Indicating if the asset is underlining like a floor tile |
| hasCode     | boolean                     | Indicating if the asset has code or not                  |
| life        | number                      | life of the asset                                        |
| maxLife     | number                      | Maximum life of the asset                                |
| width       | number                      | Asset's width on the map                                 |
| height      | number                      | Asset's height on the map                                |

### Player

| Property      | Data Type                   | Description                                   |
| ------------- | --------------------------- | --------------------------------------------- |
| id            | string                      | Player ID                                     |
| name          | string                      | Player's name                                 |
| worldId       | string                      | World ID that the player belongs to           |
| source        | string                      | Image src string of the player                |
| mapPos        | [MapPosition](#mapposition) | Player's position on the map                  |
| direction     | [Direction](#direction)     | Player's direction on the map                 |
| walletAddress | string                      | Player's wallet address                       |
| data          | PlayerData                  | Dynamic object containing data for the player |

### PlayerData

```jsx
export interface PlayerData {
	life: number;
	maxLife: number;
	sate: 'sleep' | 'offline' | 'online';
	assets: PlayerAsset[];
	quests: PlayerQuest[];
	wearables: PlayerWearable[];
}

export interface PlayerAsset {
	id: string;
	name?: string;
	description?: string;
	image: string;
	action: () => void; // executes code
}
export interface PlayerQuest {
	id: string;
	name: string;
	description: string;
	image?: string;
	action: () => void; // executes code
}

export interface PlayerWearable {
	source: string; // image source
	x: number;
	y: number;
}
```

### MapPosition

| Property | Data Type | Description         |
| -------- | --------- | ------------------- |
| c        | number    | Reflects the Y-Axis |
| r        | number    | Reflects the X-Axis |

### Direction

```jsx
export enum DIRECTION {
    SW = 2,
    NW = 4,
    NE = 6,
    SE = 8
};
```

### RespawnData

```jsx
export interface RespawnData {
	lastDeathTime?: number;
	respawnSeconds: number;
	cPos: number;
	rPos: number;
}
```

## Variables

| Name                | Type                                                                      | Description                                                                |
| ------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| $this             | [Asset](Interfaces#asset)                                                 | Current asset object                                                       |
| $thisObject         | [Pixi.js Container](https://pixijs.download/dev/docs/PIXI.Container.html) | The asset container object object                                          |
| destroyedByPlayerId | string                                                                   | Player id that destroyed the asset                                         |
| player              | [Player](Interfaces#player)                                               | Current player                                                             |
| playerObject        | [Pixi.js Container](https://pixijs.download/dev/docs/PIXI.Container.html) | Current player container object object                                     |
| players             | [Player](Interfaces#player)[]                                             | List of players in the game                                                |
| assets              | [Asset](Interfaces#asset)[]                                               | List of assets in the game                                                 |
| imGameMaster        | boolean (readonly)                                                        | Indicates if the current player is the player who is lifting all movements |


## Functions

| Name                    | Parameters                                                                                    | Description                                                                |
| ----------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| setProvider             | provider: `string`                                                                            | Change the web3 http provider (Default is set)                             |
| hitPlayer               | playerId: `string`                                                                            | Send a request to hit a player                                             |
| addTokens               | tokenAddress: `string`                                                                        | Add a specific token address to the player's token list                    |
| transferToken           | receiverAddress: `string`, tokenAddress: `string`, amount: `string`                           | Transfer a token to a receiver address(Locker)                             |
| warp                    | world: `string`, x: `number`, y: `number`                                                     | Teleport the player to a specific location                                 |
| warpToPlace             | x: `number`, y: `number`                                                                      | Teleport the player to a specific location                                 |
| showLink                | link: `string`                                                                                | Open an external link                                                      |
| displaySpeechBubble     | text: `string`                                                                                | Display a speech bubble with the specified text                            |
| displayEventMessage     | text: `string`                                                                                | Display a event message with the specified text                            |
| displayMessage          | text: `string`, imgSrc?:`string`                                                              | Display a message with the specified text                                  |
| showDialog              | title: `string`, body: `string`, buttons: `Button[]`                                          | Display a dialog with the specified title, body, and buttons               |
| attackPlayerIfNextTo    | None                                                                                          | Check if the player is next to the asset and attack it                     |
| attackNextTo            | None                                                                                          | Move the asset towards the player and attack                               |
| moveTo                  | x: `number`, y: `number`                                                                      | Move the asset to a specific location                                      |
| isPlayerInRadius        | radius: `number`                                                                              | Check if the player is within a specified radius of the asset              |
| huntPlayer              | radius: `number`                                                                              | Hunt the player in the given radius                                        |
| executeIfPlayerInRadius | radius: `number`, func: `function`                                                            | Execute a function if the player is within a specified radius of the asset |
| moveToPlayerIfInRadius  | radius: `number`                                                                              | Move the asset towards the player if within a specified radius             |
| playerMoved             | callback: `function`                                                                          | Listen to the player's movements                                           |
| playerTalked            | callback: `function`                                                                          | Listen to the player's talk event                                          |
| speechDisplayed         | callback: `function(test,name)`                                                               | Listen to the general speech bubble events                                 |
| displayEffect           | effectPath: `string`,mapPos?: `{c:number,r:number}`, duration?: `number`, data?: `EffectData` | Display a visual effect, default on player position                        |
| getTokenBalance         | address: `string`, tokenAddress: `string`                                                     | Function to get the token balance of an address and token                  |
| getNFTCount             | address: `string`, nftAddress: `string`                                                       | Function to get the number of NFTs owned by an address                     |
| placeAsset              | builderAssetId: `string`, position?: `MapPosition`, data? : `AssetData`                       | Place a asset to the map                                                   |
| destroyAsset            | assetId: `string`                                                                             | Destroys a specific asset (Default current asset)                          |
| addQuest                | questData: `QuestData`, playerId?: `string`                                                   | Adds a quest to the specific player (Default current player)               |
| removeQuest             | questId: `string`, playerId?: `string`(Default current player)                                | Removes a quest of the specific player (Default current player)            |
| hasQuest                | questId: `string`, playerId?: `string`(Default current player)                                | Checks if a player has the specific quest                                  |
| addItem                 | itemData: `ItemData`, playerId?: `string`(Default current player)                             | Adds a item to the specific player (Default current player)                |
| removeItem              | itemId: `string`, playerId?: `string`(Default current player)                                 | Removes a item from the player (Default current player)                    |
| hasItem                 | itemId: `string`, playerId?: `string`(Default current player)                                 | Checks if the player holds a specific item (Default current player)        |

\* ?=The questionmark behind functions means that these parameters are optional

## Special interfaces for functions

### Buttons

```jsx
interface Button {
	type: string; // additional classes, not a good name
	onClick: function;
	text: string;
}
```

### QuestData

```jsx
interface QuestData {
	id: string;
	name: string;
	description: string;
	image?: string; // absolute image path
}
```

### EffectData

```jsx
interface Button {
	type: string; // additional classes, not a good name
	onClick: function;
	text: string;
}
```

### ItemData

```jsx
interface ItemData {
	id: string;
	image: string; // absolute image path
	name?: string;
	description?: string;
	action?: string; // executes action js code when item is used
}
```

### AssetData

```jsx
interface AssetData {
	respawn?: RespawnData;
	moveable?: boolean;
	underlining?: boolean;
	hasCode?: boolean;
	life?: number;
	maxLife?: number;
	x?: number;
	y?: number;
	width?: number;
	height?: number;
}

export interface RespawnData {
	lastDeathTime?: number;
	respawnSeconds: number;
	cPos: number;
	rPos: number;
}
```
