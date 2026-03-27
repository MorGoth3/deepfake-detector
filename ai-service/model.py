import random
from PIL import Image

def analyze_image(path):
    # Abrir imagen (ligero)
    image = Image.open(path).convert("RGB")

    # Simulación de probabilidad
    probability = random.uniform(0.2, 0.95)

    return {
        "probability": float(probability),
        "label": "FAKE" if probability > 0.5 else "REAL"
    }