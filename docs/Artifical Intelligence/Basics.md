---
sidebar_position: 1
---

# Basics

## About
We make it easy for players to play around with LLM models and inject them into assets. For this, we use the power of LangChain and as base the GPT 3.5 turbo model.

Lest have a look at the flow

![Big picture](https://miro.medium.com/v2/resize:fit:720/format:webp/1*P7xQnABioEiDA8Ze1v4TXA.png)

## Trigger
The AI begins its operations, triggers can be adjusted according to specific requirements. Currently, manual triggers can be configured to perform an operation every X seconds, providing a reliable and consistent timing for AI actions.

Forced triggers cancel running operations e.g if some entity calls out the name of an asset like “Hey Mia, how are you”

## Memories
An AI operates by utilizing both short-term and long-term memory. The short-term memory is based on the most recent interactions in the world, while the long-term memory is stored on the server and later on the blockchain.

The AI gives more weight to the short-term memory when making decisions, as it is more relevant to the present moment.

The long-term memory can be searched using embeddings based on the latest information in the short-term memory. (long-term memory is optional due to the associated costs.)

## Actions:
Actions represent a series of tasks that the AI is capable of performing, such as moving, speaking, or engaging in various activities. Drawing from its memory and the surrounding environment, the AI autonomously analyzes the information at hand and independently decides on the most appropriate course of action to take.


## Example


![Big picture](https://miro.medium.com/v2/resize:fit:720/format:webp/1*2BPVfs5yv8gdRbobWeI_Sg.png)

Here I said “mia I love you”

An AI process got forced triggered because i mentioned the asset by its name

![Big picture](https://miro.medium.com/v2/resize:fit:720/format:webp/1*xon_pkQl1G6C2o-B1YZDzQ.png)

And This is what the GPT LLM responded

