# Utilise l’image officielle node.js Playwright  les navigateurs déja installé 

FROM mcr.microsoft.com/playwright:v1.56.1-jammy 

# Crée un dossier /app dans le conteneur
RUN mkdir /app

# Définit /app comme répertoire de travail 
WORKDIR /app

# Copie tous les fichiers du projet local dans le conteneur
COPY . /app

# Installe les dépendances NPM
# --force permet d’ignorer les conflits de peer dependencies
RUN npm install --force


# commande pour lancer les tests 
CMD ["npm", "run", "test:bdd:html"]

# construire l'image docker !!! depuis le rep ou se trouve le docker file 
## docker build -t playwright-tests .

# commande pour executer le docker image builded ( lance + l'execution des tests l'image puis la supprime )
## docker run --rm playwright-tests

# pour monter un volume 
## docker run --rm -v ${PWD}/test-results:/app/test-results playwright-tests 

# run in interactive way 
## docker run -it docker_image_name
## puis on a le terminal du docker file ( comme acceder avec ssh a une aws EC2 instance )
