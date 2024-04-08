# Utilisez une image officielle de Node.js comme image de base
FROM node:18

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json
COPY back-end/package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers du projet dans le conteneur
COPY back-end/ .

# Exposez le port 3000 pour permettre l'accès à votre application
EXPOSE 3000

# Commande pour démarrer votre application
CMD ["node", "your-app-entrypoint.js"]
