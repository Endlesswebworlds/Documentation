---
sidebar_position: 5
---

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
| addPlayerMoveListner    | callback: `function`                                                                          | Listen to the player's movements                                           |
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
