# Pagina Type 1

Sitio web estático para Type 1, preparado para despliegue con Docker y Docker Swarm (Traefik).

## Despliegue en VPS (Producción)

Este proyecto está configurado para integrarse con tu infraestructura existente (Orion/Traefik).

### Pasos:

1. Clonar el repositorio en el VPS:
   ```bash
   git clone https://github.com/3lsaya/pagina-type-1.git
   cd pagina-type-1
   ```

2. Construir la imagen:
   ```bash
   docker build -t typegroup-web:latest .
   ```

3. Desplegar usando el archivo de producción:
   ```bash
   # Si usas Docker Swarm:
   docker stack deploy -c docker-compose.prod.yml typegroup_stack
   
   # O si usas Docker Compose tradicional:
   docker-compose -f docker-compose.prod.yml up -d
   ```

### Notas Importantes
- **Volumen HTML**: Se ha eliminado el montaje del volumen `typegroup_html` porque ahora el código HTML/CSS/JS va empaquetado **dentro** de la imagen Docker. Esto facilita las actualizaciones (solo necesitas hacer `git pull` y reconstruir la imagen).
- **Configuración Nginx**: Se mantiene el volumen `typegroup_nginx_config` para respetar tus configuraciones personalizadas del servidor.

## Estructura

- `docker-compose.prod.yml`: Configuración para Producción (Traefik, Swarm, Redes).
- `docker-compose.yml`: Configuración básica para desarrollo local.
