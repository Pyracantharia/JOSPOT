FROM php:8.2-apache

RUN apt-get update

RUN apt-get install -y

RUN usermod -u 1000 www-data 

RUN a2enmod rewrite 