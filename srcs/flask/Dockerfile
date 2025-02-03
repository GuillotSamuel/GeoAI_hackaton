FROM python:3-alpine3.15

RUN pip install --no-cache-dir virtualenv && \
    apk --no-cache update && apk --no-cache upgrade

RUN python -m venv /venv

ENV PATH="/venv/bin:$PATH"

WORKDIR /app
COPY ./src /app

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8080

CMD ["gunicorn", "-b", "0.0.0.0:8080", "index:app"]
