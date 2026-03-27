FROM python:3.10

WORKDIR /app


COPY models/best_efficientnet_b0.pth models/

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install transformers

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]