---
sidebar_position: 2
---

# Cheatsheet

Hooks tell when a code should be executed, there are different hooks which are useful depending on the situation.

<hr />

`Create` = The code will be executed if the player enters a room

`Destroy` = The code will be executed if the asset is destroyed

`Interact` = The code will be executed if the player interacts with the object

`Over` = The code will be executed if the player is over the object

`Next` = The code will be executed if the player is next to the object


# Functions

### imGameMaster

```ts
// checks if the current player is the game master
imGameMaster(): boolean
```
---

## Messages
### displaySpeechBubble
```ts
// displays a speech bubble on the map position (default: current asset name)
displaySpeechBubble(text: string, name?: string, targetName?: string)
```

### displayMessage
```ts
// displays a common message box ( default: asset image)
displayMessage(text: string, img?: string)
```

### addTextToAsset
```ts
// adds a text to the asset (DEFAULT : current asset), returns an Pixi container, remove it with removePixiObjectFromAsset(obj)
addTextToAsset(text: string, assetId?: string)
```

---

## Movement / Warping
### movePlayerTo (Player)
```ts
// moves the player to the given position
movePlayerTo(x: number, y: number, isRelocate?: boolean, playerId?: string)
```

### moveTo (Asset)
```ts
// moves the asset to the given x,y position, if isRelocate is true, the asset will be relocated to the position, otherwise it will be moved to the position (DEFAULT : current asset)
moveTo(x, y, isRelocate? :booleab, assetId?:string) 
```

### warp
```ts
// warps the current player to the given world and position
warp(world: string, x: number, y: number)
```


---

## State handling

### setWorldState
```ts
// set the world state, can be used to save data in the world, must be a json object
setWorldState(data: any)

//example :
setState({
	raining:true // if its raining
})
```


### updateWorldState
```ts
// update the world state with a key and value like "goatCount", 10
updateWorldState(keyname: string, value: any)
```

### getWorldState
```ts
// get the world state as object
getWorldState():Object
```

---

### setState
```ts
// set the temporary world state, must be a json object, will be resetted after the player left the world
setState(data: any)

//example :
setState({
	isImposter:true // if xy is imposter
})
```


### updateState
```ts
// update the temporary world state
updateState(property: string, value: any)
```


### getState
```ts
// get the temporary world state
getState(): Object
```

---

## Quest


### addQuest
[QuestData](#QuestData)[]
```ts
// adds a quest to the player's quest log (default: current player)
addQuest(questData: QuestData, playerId?: string)
```

### removeQuest
```ts
// removes a quest from the player's quest log (default: current player)
removeQuest(questId: string, playerId?: string)
```

### hasQuest
```ts
// checks if the player has a specific quest in their quest log (default: current player)
hasQuest(questId: string, playerId: string = player.id): boolean
```
---
## Items

### addItem
[ItemData](#ItemData)[]
```ts
// adds an item to the player's inventory (default: current player)
addItem(assetData: AssetData, playerId?: string)
```

### removeItem
```ts
// removes an item from the player's inventory (default: current player)
removeItem(itemId: string, playerId?: string)
```

### hasItem
```ts
// checks if the player has a specific item in their inventory (default: current player)
hasItem(assetId: string, playerId?: string): boolean
```
---
## Other functions

### sleep

```ts
// waits for X seconds
sleep(ms: number): Promise<void>
```
### setCanBuild

```ts
// grants the player build permissions
setCanBuild(canBuild: boolean)
```


### playSound

```ts
// plays a sound, with absolute https path
playSound(path:string, loop :boolean, volume : number) 
```

### stopAllSounds
```ts
// stops all sounds
stopAllSounds()
```

### addCss

```ts
// adds css style classes to the game
addCss(css:string)

// example 
add(".text-white{ 	color :white }	")
```


### addScript
```ts
// adds a 3rd party js script to the game
addScript(url: string)
```

### displayEffect
```ts
interface Data{
	 from: { x: number, y: number }
	 to: { x: number, y: number }
	 size: { width: number, height: number }
	 speed: number 
}

// displays an effect with the given https path on the map position (default: current player)
displayEffect(effectPath: string, position?: {x, y}, duration?:number, data?: Data)

//example:
displayEffect("https://myImage.com/img.png");
```

### placeAsset
```ts
// places an asset on the map, builderAssetId or https source
placeAsset(builderAssetIdOrSrc: string, position: { x: number, y: number }, data?: AssetData, id?: string)

// example:
placeAsset("https://myImage.com/img.png", {12,12})
```

### destroyAsset
```ts
// destroys the asset with the given id (default: current asset)
destroyAsset(assetId?: string)
```

### hitPlayer
```ts
// hits a player
hitPlayer(playerId: string)
```

### showLink
```ts
// opens an external link in a dialog
showLink(link: string)
```

### showDialog
```ts
// shows a global dialog box
showDialog(title: string, body: string, buttons: Array<{ text: string, onClick: Function }>)

// example : 
showDialog({
	title: "Hi",
	body : "<h1>Grettings</hi>",
	buttons : [{
		text : "ok",
		onclick : function(){
			moveTo(1,1)
		}
	}]
})
```
---
## Asset manipulations

If you arent fimilar with Pixi.js give it a quick read, it is simple [Pixi.js Container](https://pixijs.download/dev/docs/PIXI.Container.html)

### addImageToAsset

```ts
// // adds a image to the asset, with https path or base64, data : { width: 64, height: 64, x: -32, y: -64 } (DEFAULT : current asset), returns an Pixi container
addImageToAsset(image:string, assetId?:string, data?: { width: 64, height: 64, x: -32, y: -64 })
```

### addPixiObjectToAsset

```ts
// // adds a pixi container to the asset (DEFAULT : current asset), returns an Pixi container
addPixiObjectToAsset(pixiContainer:PixiContainer)
```

### removePixiObjectFromAsset

```ts
// // removes a pixi container from the asset (DEFAULT : current asset)
removePixiObjectFromAsset(pixiContainer:PixiContainer)
```
---

## Listeners

### isPlayerInRadius

```ts
    // checks if the current player is in the given radius
isAnyPlayerInRadius(radius:number)
```

### isPlayerInRadius

```ts
// checks if any player is in the given radius
isPlayerInRadius(radius:number)
```

### executeIfPlayerInRadius

```ts
// executes the given function if the player is in the given radius
executeIfPlayerInRadius(radius: number, func: () => void): Listener
```

### executeIfPlayerInRadius

```ts
// moves to the player if they are in the given radius
moveToPlayerIfInRadius(radius: number)
```

### playerMoved

```ts
// listener for current player movement events
playerMoved(callback: (mapPos: {x,y}) => void): Listener
```

### anyoneTalked

```ts
// listener for speech events
anyoneTalked(callback: (text: {name:stirng, text:string}) => void): Listener
```

### assetMoved

```ts
// listener for asset movement events
assetMoved(callback: (mapPos: {x,y}) => void): Listener
```

### anyAssetGotHit

```ts
// listener for any asset getting hit events
anyAssetGotHit(callback: (data: { attackerId:string, receiverId:string }) => void): Listener
```

### assetGotHit

```ts
// listener for current asset getting hit events
assetGotHit(callback: (data: { attackerId:string }) => void): Listener
```
---

## Web3

### getTokenBalance
```ts
// gets the token balance of the given token address (DEFAULT : current player primaryWalletAddress OR walletAddress)
getTokenBalance(tokenAddress: string, http_provider:string, walletAddress?:string)
```

### getNFTCount
```ts
// gets the nft count of the given nft token address (DEFAULT : current player)
getNFTCount(tokenAddress: string, http_provider:string, walletAddress?:string)
```

### transferToken
```ts
// transfers a specific token to the player's wallet (DEFAULT : current player)
// E.g ewwLockerAddress = matic 0xD40C94BF410537dC1C71C6Cab3900B14B23BFF67
transferToken(tokenAddress: string, amount:number, http_provider:string, ewwLockerAddress:string, walletAddress?:string)
```
Ask for further help here we TODO on how to

## Interfaces

## Asset


```jsx
interface Asset {
  id: string; // Asset ID
  worldId: string; // World ID that the asset belongs to
  builderAssetId: string; // ID of the related asset builder pack
  isTile: boolean; // Boolean indicating if the asset is a tile or not
  source: string; // Source string of the asset, fetched from assetService
  data?: AssetData; // Dynamic object containing data for the asset
  getPosition() // get the {x,y} position of the asset
  getSize() // get the size {widht, height} of the asset 
}
```
## AssetData

```jsx
interface AssetData {
  respawn?: RespawnData; // Data for asset's respawn
  direction?: Direction; // Asset's direction on the map
  moveable?: boolean; // Indicating if players can move over the asset
  underlining?: boolean; // Indicating if the asset is underlining like a floor tile
  hasCode?: boolean; // Indicating if the asset has code or not
  life?: number; // Life of the asset
  maxLife?: number; // Maximum life of the asset
  width?: number; // Asset's width on the map
  height?: number; // Asset's height on the map
  name?:string; // assets name
}
```


## Player
```jsx
interface Player {
  id: string; // Player ID
  name: string; // Player's name
  worldId: string; // World ID that the player belongs to
  source: string; // Image src string of the player
  direction: Direction; // Player's direction on the map
  walletAddress: string; // Player's wallet address
  data: PlayerData; // Dynamic object containing data for the player
  getPosition() // get the {x,y} position of the player
}
```

## QuestData

```jsx
interface QuestData {
	id: string;
	name: string;
	description: string;
	image?: string; // absolute https image path
}
```

## ItemData

```jsx
interface ItemData {
	id: string;
	name: string;
	description: string;
	image?: string; // absolute https image path
	action:()=>{}
}
```

## PlayerData

```jsx
export interface PlayerData {
	life: number;
	maxLife: number;
	assets: PlayerAsset[];
	quests: PlayerQuest[];
	wearables: PlayerWearable[];
}

export interface PlayerAsset {
	id: string;
	name?: string;
	description?: string;
	image: string;
	action: () => void; // executes code e.g () => {moveTo(1,2)}
}
export interface PlayerQuest {
	id: string;
	name: string;
	description: string;
	image?: string;
}

export interface PlayerWearable {
	source: string; // absolute https image path
	x: number;
	y: number;
}
```

## Direction

```jsx
export enum DIRECTION {
    SW = 2,
    NW = 4,
    NE = 6,
    SE = 8
};
```

## RespawnData

```jsx
export interface RespawnData {
	lastDeathTime?: number;
	respawnSeconds: number;
	cPos: number;
	rPos: number;
}
```

# Variables

| Name                | Type                                                                      | Description                            |
| ------------------- | ------------------------------------------------------------------------- | -------------------------------------- |
| $this               | [Asset](#asset)                                                           | Current asset object                   |
| $thisObject         | [Pixi.js Container](https://pixijs.download/dev/docs/PIXI.Container.html) | The asset container pixijs object      |
| destroyedByPlayerId | string                                                                    | Player id that destroyed the asset     |
| player              | [Player](#player)                                                         | Current player                         |
| playerObject        | [Pixi.js Container](https://pixijs.download/dev/docs/PIXI.Container.html) | Current player container object object |
| players             | [Player](#player)[]                                                       | List of players in the game            |
| assets              | [Asset](#asset)[]                                                         | List of assets in the game             |
| gamefield           | HtmlElement (readonly)                                                    | The gamefield panel                    |

