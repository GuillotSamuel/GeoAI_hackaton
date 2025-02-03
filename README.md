# 🌍 GeoAI_hackaton

## Usage Guide

### Prerequisites
- Docker and Docker Compose
- Node.js 18+ and npm
- Python 3.10+
- Configured .env file at project root
- InstaGeo : install with th efollowing command `pip install git+https://github.com/instadeepai/InstaGeo-E2E-Geospatial-ML`

### Commands
- Full build : make
- Rebuild and restart : make re
- Full cleanup : make prune
- Lots of other commands in the makefile

### Access Ports:
- Frontend: http://localhost:8081 (dev)
- Backend: http://localhost:8080 (dev)
- Nginx: http://localhost:8082 (prod)

## GeoAI solution


## DevOps Architecture

### Technical Stack
graph TD  
    A[Makefile] --> B[Docker Compose]  
    B --> C[Services]  
    C --> D[Flask/Gunicorn]  
    C --> E[Vite/React]  
    C --> F[Nginx]  
    A --> G[CI/CD Pipeline]

### Key Components
1. Orchestration:
    - Makefile: Workflow automation
    - docker-compose.yml: Multi-container deployment
2. Containerized Services:
    - Flask: REST API (Python) on port 8080
    - Vite: React frontend (Node.js) on port 8081
    - Nginx: Reverse Proxy/Routing on port 8082
3. Dependency Management:
    - Isolated layer builds (dedicated Dockerfiles)
    - Python/Node virtual environments
4. Network:
    - geoAI_network bridge for inter-service communication
    - Internal/external traffic isolation
