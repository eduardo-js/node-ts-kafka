# Event Driven System using Node - TypeScript - Prisma - Postgres - Kafka

-  Setup Environment 

   - Kafka and Postgres
        ```sh
        docker-compose up
        ```

   - Producer
       ```sh
       cd ./producer && pnpm i && pnpm dev
       ```

   - Consumer
       ```sh
       cd ./consumer && pnpm i && pnpm dev
       ```

- run the POST request
  - the request will be produced trough a REST API on `producer` running on `http:localhost:3000` and saved on `Kafka`
  - consumer will handle the request and process it on demand
    - view the db using `pnpm prisma studio`