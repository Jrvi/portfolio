# Käytä Node.js -kuvaa
FROM node:18-alpine

# Aseta työskentelyhakemisto
WORKDIR /app

# Kopioi package.json ja package-lock.json
COPY package*.json ./

# Asenna riippuvuudet
RUN npm install

# Kopioi koko sovelluksen koodi konttiin
COPY . .

# Rakenna React-sovellus tuotantoa varten
RUN npm run build

# Käynnistä React-sovellus
CMD ["npm", "start"]