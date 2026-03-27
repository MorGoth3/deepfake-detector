from PIL import Image
from transformers import pipeline

# ---------------------------
# GLOBAL (lazy loading)
# ---------------------------
classifier = None

def get_model():
    global classifier
    if classifier is None:
        classifier = pipeline(
            "image-classification",
            model="google/vit-base-patch16-224",  modelo ligero
            device=-1  # CPU
        )
    return classifier


# ---------------------------
# ANALYZE
# ---------------------------
def analyze_image(path):
    model = get_model()

    image = Image.open(path).convert("RGB")

    results = model(image)

    # ⚠️ Este modelo NO es de deepfake
    # Simulamos probabilidad basada en confianza máxima
    top_result = max(results, key=lambda x: x["score"])

    probability = float(top_result["score"])

    return {
        "label": top_result["label"],
        "probability": probability
    }