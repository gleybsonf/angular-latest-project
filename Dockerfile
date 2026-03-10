# Usamos o Node 22 que é a base estável para o Angular 21
FROM node:22-bookworm

# Instala a CLI do Angular 21 globalmente no container
RUN npm install -g @angular/cli@21

# Define onde o projeto vai morar dentro do Docker
WORKDIR /app

# Expõe a porta do servidor de desenvolvimento
EXPOSE 4200

# O comando padrão será abrir um terminal para podermos digitar os comandos
CMD ["/bin/bash"]