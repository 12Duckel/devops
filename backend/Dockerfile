FROM python:latest

WORKDIR /app

COPY . /app

COPY requirements.txt /app/  # Supprimez le point et le slash avant /app/

RUN pip install -r requirements.txt

EXPOSE 8000

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]  # Correction de l'adresse IP 0.0.0.O -> 0.0.0.0
