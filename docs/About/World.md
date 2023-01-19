---
sidebar_position: 4
---

## World

You can find the source [here](https://github.com/Endlesswebworlds/EwwWorld)

Every world created by the oracle has the flexibility to operate on the blockchain of their choice. The key is to have the appropriate nodes connected, which
allow for operations on that specific blockchain.

The blockchain is utilized as a decentralized database for storing dynamic world data, such as the positions of assets, image and code sources, and other
relevant information for in-game objects and tiles. The data is stored in a distributed manner across the network, ensuring it's secure and immutable. The use
of blockchain technology also ensures transparent and verifiable record-keeping, as all data stored on the blockchain is visible to all nodes within the
network. This allows for greater trust and accountability within the virtual world.

Contract snippet :

```jsx title="Dynamic world & asset data"
struct World {
   bytes backgroundSource;
   bytes codeSource;
   string data;
}

struct Asset {
  bytes imageSource;
  bytes codeSource;
  string data;
}

```
