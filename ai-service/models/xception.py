import torch
import torch.nn as nn
import torchvision.models as models

class DeepfakeModel(nn.Module):
    def __init__(self):
        super(DeepfakeModel, self).__init__()

        # base model (puedes cambiar por xception real si quieres)
        self.base = models.efficientnet_b0(pretrained=False)

        self.base.classifier[1] = nn.Linear(
            self.base.classifier[1].in_features, 1
        )

    def forward(self, x):
        return self.base(x)