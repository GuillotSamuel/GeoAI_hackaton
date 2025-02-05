FROM python:3-alpine3.15

RUN apk --no-cache update && apk --no-cache upgrade

WORKDIR /app
COPY ./src /app

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8080

CMD ["gunicorn", "-b", "0.0.0.0:8080", "index:app"]
