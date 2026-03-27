import torch
from PIL import Image
from transformers import pipeline

# ---------------------------
# LOAD MODEL (AUTO DOWNLOAD)
# ---------------------------
classifier = pipeline(
    "image-classification",
    model="dima806/deepfake_vs_real_image_detection",
    device=-1  # CPU
)

# ---------------------------
# ANALYZE
# ---------------------------
def analyze_image(path):
    image = Image.open(path).convert("RGB")

    results = classifier(image)

    # Buscar label FAKE
    fake_prob = 0.0
    for r in results:
        if "fake" in r["label"].lower():
            fake_prob = r["score"]

    return {
        "probability": float(fake_prob)
    }