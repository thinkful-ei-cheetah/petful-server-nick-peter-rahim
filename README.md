# FIFO Pet Adoption Agency - Server

[FIFO PAA Live](https://fifo-paa.now.sh/ "Live App")

[Client Repo](https://github.com/thinkful-ei-cheetah/petful-client-nick-peter-rahim/tree/nick "Client Repo")

## Introduction

FIFO PAA - Server provides API services to FIFO PAA - client. 

_This server does not use a database and is intended to serve static data._

FIFO PAA simulates a web application for pet adoption. The server maintains three singly-linked queues: one for available dogs, one for available cats, and another for logged-in users.
The application communicates with the server to update the queues when a pet is adopted and re-renders the updated information received from the backend. 


## API Services

```
/api
├── /cats
│   └── GET
│   |   └── /queue
│   └── DELETE
│       └── /adopt
|
├── /dogs
│   └── GET
│   |   └── /queue
│   └── DELETE
│       └── /adopt
|
└── /users
    └── GET
        └── /queue
    └── DELETE
        └── /adopt
```

## Core Technologies

- Node.js
- express

### Authors

>Peter Pae<br/>
>Rahim Morgan<br />
>Nick Lee
