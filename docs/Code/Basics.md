---
sidebar_position: 1
---

## About

We offer the possibility to manipulate a whole world with javascript and provide easy usable functions & snippets.

## Requirements

Basic knowledge in javascript, or you use chatGPT

## Technology

All assets and game are rendered with pixi.js. Each asset is a Pixi.js [Sprite](https://pixijs.download/dev/docs/PIXI.Sprite.html) or
[AnimatedSprite](https://pixijs.download/dev/docs/PIXI.AnimatedSprite.html).

## Game master

The game master can be only one player in the world and will determined automatically. This player should mostly handle all operations like asset movements. For
example: Move an asset. If you fire an asset move for the player on every create, the move would be executed for every player.


