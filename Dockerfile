FROM php:8.2-apache

# Mise à jour des paquets et installation des dépendances
RUN apt-get update && apt-get install -y \
    apache2-utils \
    ssl-cert

# Changer l'UID de l'utilisateur www-data
RUN usermod -u 1000 www-data

# Activer les modules Apache nécessaires
RUN a2enmod rewrite ssl headers

# Copier les fichiers de configuration et les certificats SSL
COPY ./server/cert/ssl-cert-snakeoil.pem /etc/ssl/certs/ssl-cert-snakeoil.pem
COPY ./server/key/ssl-cert-snakeoil.key /etc/ssl/private/ssl-cert-snakeoil.key
# Exposer les ports nécessaires
EXPOSE 80 443

# Commande pour démarrer Apache en mode premier plan
CMD ["apache2-foreground"]
