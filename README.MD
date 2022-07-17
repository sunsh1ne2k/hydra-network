# HYDRA NETWORK

## Project Structure

```text
/   
    /etc - contain configuration
    /app - front-end javascript files
        /config - loads config
        /models - loads models
    /bin - helper scripts
    /lib - back-end express files
        /config - loads config to app.settings
        /models - loads mogoose models
        /routes - sets up app.get('..')....
    /srv - contains public files
    /test - contains test files
```

## Dependencies Starter Pack

```bash
yarn add express zod config cors express mongoose pino pino-pretty dayjs bcrypt jsonwebtoken lodash nanoid
    
yarn add @types/body-parser @types/config @types/cors @types/express @types/node @types/pino @types/mongoose @types/bcrypt @types/jsonwebtoken @types/lodash @types/nanoid ts-node-dev typescript -D
```
