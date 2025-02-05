FROM python:3.9-slim

WORKDIR /app

# Installer les dépendances système pour datashader
RUN apt-get update && apt-get install -y \
    gdal-bin \
    libgdal-dev \
    libproj-dev \
    libgl1-mesa-glx \
    libglib2.0-0 \
    && rm -rf /var/lib/apt/lists/*

COPY /src /app

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8501

CMD ["streamlit", "run", "app.py", "--server.enableCORS=false", "--server.enableWebsocketCompression=false", "--server.port=8501", "--server.address=0.0.0.0"]