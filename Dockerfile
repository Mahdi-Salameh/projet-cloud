# stage compilation
# image de départ
FROM alpine:3.15 as builder

# chemin de travail
WORKDIR /projet-cloud

# downgrade des privilèges
#USER mahdi
COPY package*.json ./

# installation des paquets système
RUN apk add --update nodejs npm && apk add --update npm

# copie des fichiers du dépôt
COPY . .

# installation des dépendances avec npm
RUN npm install

# build avec npm
RUN npm run build

# stage exécution
FROM alpine:3.15 as runner

RUN apk add --update nodejs
RUN apk --no-cache add ca-certificates

COPY --from=builder /projet-cloud/dist ./dist
COPY --from=builder /projet-cloud/node_modules/systeminformation ./node_modules/systeminformation
CMD ["node","/dist/server.js"]