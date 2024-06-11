
# CHATBOT

A modern chatbot assistant that will reply your queries. That helps us to make productive.


## Features

- Authentication
- Removing chat history


## Installation

Install All dependecy

```bash
  npm install
```


    
## Run development server

```bash
  npm run dev
```

## Run development server in Docker container

```bash
   docker build -t app .
   docker run -it -p 8000:8000 -v $(pwd):/app  --env-file ./.env app 
```

    
## Note

There was a problem with conversation API response is not showing the content. its only showing the level id . if we want to query all the content by the level id then need to pass inefficient query to the server. that is why i showing the history with the conversation id only

