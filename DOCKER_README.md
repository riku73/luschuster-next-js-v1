# Docker Setup for Luschuster Communications Website

This guide will help you run the Luschuster Communications website using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose installed

## Quick Start (Development)

To quickly see the website running, use the development setup:

### Option 1: Development Mode (Recommended for viewing)

```bash
# Navigate to the project directory
cd /Users/marcomartins/Desktop/luschter-website-3/luschuster-nextjs/luschuster-nextjs

# Run the development server with Docker
docker-compose -f docker-compose.dev.yml up --build
```

This will:
- Build the development Docker image
- Start the Next.js development server
- Make the website available at http://localhost:3000
- Enable hot reloading for code changes

### Option 2: Production Mode

For a production-like experience:

```bash
# Build and run production version
docker-compose up --build
```

## Accessing the Website

Once the container is running, open your web browser and go to:

**http://localhost:3000**

You should see the Luschuster Communications website with:
- Modern homepage with hero section
- Services overview
- Company information
- Contact forms
- Quote request system

## Available Pages

- **Homepage**: `/` - Main landing page
- **Services**: `/services` - Overview of all services
- **About**: `/about` - Company history and team
- **Contact**: `/contact` - Contact form and information
- **Quote**: `/quote` - Multi-step quote request form

## Docker Commands Reference

### Development Commands

```bash
# Start development server
docker-compose -f docker-compose.dev.yml up

# Start in background (detached mode)
docker-compose -f docker-compose.dev.yml up -d

# View logs
docker-compose -f docker-compose.dev.yml logs -f

# Stop the containers
docker-compose -f docker-compose.dev.yml down

# Rebuild and start
docker-compose -f docker-compose.dev.yml up --build
```

### Production Commands

```bash
# Start production server
docker-compose up

# Start in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop containers
docker-compose down

# Rebuild and start
docker-compose up --build
```

### Useful Docker Commands

```bash
# Remove all containers and images
docker-compose down --rmi all

# Remove volumes (if any)
docker-compose down -v

# Check running containers
docker ps

# Access container shell
docker exec -it <container_name> sh
```

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, you can change it in the docker-compose file:

```yaml
ports:
  - "3001:3000"  # Use port 3001 instead
```

### Container Won't Start

1. Make sure Docker is running
2. Check if port 3000 is available
3. Try rebuilding the image:
   ```bash
   docker-compose down
   docker-compose up --build
   ```

### File Changes Not Reflecting (Development Mode)

The development mode uses volume mounting, so changes should reflect immediately. If not:

1. Restart the container
2. Check file permissions
3. Try rebuilding the image

### Performance Issues

If the website is slow:
- Use production mode for better performance
- Ensure Docker has enough resources allocated
- Check system resource usage

## Stopping the Application

To stop the application:

```bash
# If running in foreground, press Ctrl+C

# If running in background:
docker-compose down
# or for development:
docker-compose -f docker-compose.dev.yml down
```

## Features Available

The Docker setup includes:

✅ **Full Website Functionality**
- Responsive design for all devices
- Interactive forms with validation
- Modern UI components
- SEO-optimized pages

✅ **Development Features**
- Hot reloading for code changes
- TypeScript compilation
- Error reporting
- Development tools

✅ **Production Features**
- Optimized build
- Compressed assets
- Security headers
- Performance optimizations

## Next Steps

After viewing the website, you can:
1. Explore all the pages and functionality
2. Test the responsive design on different screen sizes
3. Try the contact and quote request forms
4. Review the code structure
5. Customize content and styling as needed

## Support

For issues with Docker setup:
1. Check Docker and Docker Compose versions
2. Ensure sufficient disk space and memory
3. Review Docker logs for error messages
4. Try rebuilding containers from scratch