FROM denoland/deno:latest

COPY entrypoint.sh /entrypoint.sh
COPY ./src/create.ts ./src/create.ts
COPY ./deps.ts /deps.ts
COPY ./@types /@types

ENTRYPOINT [ "/entrypoint.sh" ]
