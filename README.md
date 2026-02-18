# Pagina Type 1

Sitio web estático para Type 1, preparado para despliegue con Docker.

## Despliegue en VPS

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/3lsaya/pagina-type-1.git
   cd pagina-type-1
   ```

2. Ejecutar con Docker Compose:
   ```bash
   docker-compose up -d --build
   ```

3. El sitio estará disponible en el puerto 8080 (o el configurado en docker-compose.yml).
   http://TU_VPS_IP:8080

## Desarrollo Local

Para probar localmente, usar el mismo comando de Docker Compose o abrir el `index.html` directamente.

## Estructura

- `index.html`: Página principal
- `assets/`: Imágenes y recursos
- `css/`: Estilos
- `js/`: Scripts
- `Dockerfile` & `docker-compose.yml`: Configuración de despliegue
