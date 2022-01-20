# image de départ
FROM alpine:3.15

# chemin de travail
WORKDIR /projet-cloud

# downgrade des privilèges
#USER mahdi

# installation des paquets système
RUN apk add --update nodejs npm && apk add --update npm

# copie des fichiers du dépôt
COPY . .

# installation des dépendances avec npm
RUN npm install

#  # build avec npm
RUN npm run build

# exécution
#  CMD ["npm","run","watch"]
CMD ["npm","run","watch"]