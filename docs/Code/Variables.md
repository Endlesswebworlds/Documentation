---
sidebar_position: 4
---

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
