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

`Start` = The code will be executed if the player enters a room

`Destroy` = The code will be executed if the asset is destroyed

`Interact` = The code will be executed if the player interacts with the object

`Nearby` = The code will be executed if the player is nearby the object

Please note : Room code will always execute on start hooks cant be changed here

## General

We offer a variety of functions that can be executed a world. These functions are general functions and can be executed on world or assets

| Name                                           | Description                                                                                                                              |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| displayBubble(string, assetId)                 | Displays a speech bubble on the asset by the given assetId                                                                               |
| displayMessage(string)                         | Displays a messagebox message                                                                                                            |
| displayDialog(title, message)                  | Displays a dialog message, can be in HTML format                                                                                         |
| displayEventMessage(message)                   | Displays a event message, can be in HTML format                                                                                          |
| displayConfirmDialog(message,option, callback) | Displays a confirm dialog with yes or no option. `callback` returns an boolean of `yes=true`. On `option={yesText : "Yes", noText:"No"}` |
| moveTo(x,y,assetId)                            | Moves asset to x,y position                                                                                                              |
| addAsset(x,y, ressourceId)                     | Adds an asset to the specific position                                                                                                   |
| destroyAsset(assetId)                          | removes an asset                                                                                                                         |
| applyStyle(str)                                | applies basic CSS style to the header use it like that `.btn-success{background-color:"red"}`.                                           |

### Special web3 functions

EWW directly loaded the web3 script, therefore you can use web3js without the need to import it. We created some basic comfort functions that can be useful.

It is important to connect at first :

HTTP : `web3ConnectHttp(URL)` or Websocket : `web3ConnectSocket(URL)` . This will return the basic
[web3js object](https://web3js.readthedocs.io/en/v1.8.1/web3.html)

| Name                                           | Description                                                                                      |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| DisplayWeb3ConnectionDialog()                  | Displays a connection dialog                                                                     |
| hasAmountOf(CoinContract, amount)              | Checks if currentplayer hasAmount xy of specific coin                                            |
| getNftCount(NFTContract)                       | Gets the count of a specific NFT                                                                 |
| transferCoin(CoinContract, amount, playerName) | Transfers an amount of coins from the servernode wallet to x (function in review to check abuse) |

---

## Assets

These functions allow players to perform various actions and manipulations with the assets in the game, such as moving, modifying, and interacting with them.

### Functions

| Name                      | Description                                  |
| ------------------------- | -------------------------------------------- |
| displayBubbleSelf(string) | Display a speech bubble on the current asset |
| moveToSelf(x,y)           | Moves the current asset to x,y position      |
| destroySelf()             | Destroys the asset                           |

TODO: attack
