FROM denoland/deno:latest

COPY entrypoint.sh /entrypoint.sh
COPY ./src/create.ts /create.ts

ENTRYPOINT [ "/entrypoint.sh" ]
