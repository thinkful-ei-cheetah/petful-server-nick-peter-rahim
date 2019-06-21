# Petful - Server

## Introduction

Petful - server provides API services to Petful - client. 

> This server does not use a database and is intended to serve static data.

Petful-server leverages the queue data structure to manage the list of cats and dogs available for 'adoption'. The queue can be updated to dequeue adopted pets and re-enqueue them to the end of the list.

## API Services

```
/api/dog GET
/api/dog DELETE

/api/cat GET
/api/cat DELETE
```

## Core Technologies

- Node.js
- express
