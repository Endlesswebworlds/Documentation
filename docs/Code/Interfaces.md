---
sidebar_position: 3
---

## Asset

| Property       | Data Type                   | Description                                           |
| -------------- | --------------------------- | ----------------------------------------------------- |
| id             | string                      | Asset ID                                              |
| worldId        | string                      | World ID that the asset belongs to                    |
| mapPos         | [MapPosition](#mapposition) | Asset's position on the map                           |
| builderAssetId | string                      | ID of the related asset builder pack                  |
| isTile         | boolean                     | Boolean indicating if the asset is a tile or not      |
| source         | string                      | Source string of the asset, fetched from assetService |
| data           | [AssetData](#assetdata)     | Dynamic object containing data for the asset          |

## AssetData

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

## Player

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

## PlayerData

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

## MapPosition

| Property | Data Type | Description         |
| -------- | --------- | ------------------- |
| c        | number    | Reflects the Y-Axis |
| r        | number    | Reflects the X-Axis |

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
