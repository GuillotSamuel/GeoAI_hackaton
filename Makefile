### Makefile for Docker (not customized) ###

# Define
YELLOW = \033[1;33m
NC = \033[0m
COMPOSE_FILE = srcs/docker-compose.yml

# Build and run

all: build up

# prepare_directories:
# 	@echo "$(YELLOW)Preparing directories for Docker containers volumes...$(NC)"
# 	@mkdir -p $(HOME)/data/db
# 	@mkdir -p $(HOME)/data/static
# 	@mkdir -p $(HOME)/data/media

build: # prepare_directories
	@echo "$(YELLOW)Building Docker images...$(NC)"
#	cd ./srcs/vite/app && npm run build && cd - 
	docker-compose -f $(COMPOSE_FILE) build

up:
	@echo "$(YELLOW)Starting containers...$(NC)"
	docker-compose -f $(COMPOSE_FILE) up -d

down:
	@echo "$(YELLOW)Stopping and removing Docker containers...$(NC)"
	docker-compose -f $(COMPOSE_FILE) down

stop:
	@echo "$(YELLOW)Stopping Docker containers...$(NC)"
	docker-compose -f $(COMPOSE_FILE) stop

restart: remove up
	@echo "$(YELLOW)Restarting Docker containers...$(NC)"

re: remove all


# Logs and status 

logs:
	@echo "$(YELLOW)Displaying Docker logs...$(NC)"
	docker-compose -f $(COMPOSE_FILE) logs -f

status:
	@echo "$(YELLOW)Displaying Docker status...$(NC)"
	docker-compose -f $(COMPOSE_FILE) ps -a


# Cleaning containers and datas

remove:
	@echo "$(YELLOW)Stopping Docker containers and removing all resources...$(NC)"
	docker-compose -f $(COMPOSE_FILE) down --volumes --remove-orphans

prune: remove
	@echo "$(YELLOW)Pruning all unused Docker resources...$(NC)"
	@docker system prune -a --volumes -f


# Accessing container terminals (to customize)

shellFlask:
	@echo "$(YELLOW)Accessing the shell of the flask container...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec flask sh

shellVite:
	@echo "$(YELLOW)Accessing the shell of the vite container...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec vite sh

shellNginx:
	@echo "$(YELLOW)Accessing the shell of the nginx container...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec nginx sh

shellStreamlit:
	@echo "$(YELLOW)Accessing the shell of the streamlit container...$(NC)"
	docker-compose -f $(COMPOSE_FILE) exec streamlit sh


.PHONY: all prepare_directories build up down stop restart re logs status remove prune shellStreamlit shellNginx shellVite shellFlask