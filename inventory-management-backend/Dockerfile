FROM node:22-alpine

WORKDIR /app

# Instala dependencias
COPY package*.json ./
RUN npm install

# Copia el código (en dev luego será sobreescrito por el volumen)
COPY . .

EXPOSE 3000

# NestJS en modo watch
CMD ["npm", "run", "start:dev"]


# # ---------- PRODUCTION STAGE ----------
# FROM node:22-alpine

# WORKDIR /app

# COPY --from=builder /app/dist ./dist
# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package*.json ./

# EXPOSE 3000

# CMD ["node", "dist/main"]