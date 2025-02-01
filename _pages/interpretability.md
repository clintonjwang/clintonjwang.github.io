---
permalink: /interpretability
title: "Interpretable deep learning for liver tumor diagnosis"
author_profile: false
sidebar: false
---

[Paper (European Radiology)](https://doi.org/10.1007/s00330-019-06214-8) \| [Paper (SPIE Medical Imaging)](https://doi.org/10.1117/12.2512473) \| [Code](https://github.com/clintonjwang/voi-classifier)

Hepatic lesion classification is a challenging task that requires identifying subtle radiological features. A convolutional neural network can achieve comparable performance to radiologists on this task, but how can we interpret what it looks at?

<figcaption>The difference between malignant and benign lesions on liver MRI often comes down to fairly subtle image features.</figcaption>
![](images/interpretability/lesion_examples.png){: width="80%" }

By asking radiologists or scraping reports, we can find a collection of radiological features that are commonly used to support a particular diagnosis.

![](images/interpretability/radiological_features.png){: width="80%" }

We determine whether our CNN pays attention to each of these radiological features by examining the distribution of CNN activations. We can use the correlation between CNN activations and each radiological feature as a proxy for the degree that the network is able to detect that feature. The influence of those activations on the predicted class tells us how much the CNN weighs that feature in making its prediction.

Performing logistic regression on the CNN activations tells us which features the CNN struggles to detect.

<figcaption>Predictive power for radiological features reveals a model's strengths and weaknesses.</figcaption>
![](images/interpretability/feature_id.png){: width="80%" }

This method also helps highlight mistakes in the model. When the CNN activations point to radiological features that are consistent with the model's predictions, we find that the model also tends to produce better predictions.

<figcaption>Bad explanations often lead to wrong diagnoses.</figcaption>
![](images/interpretability/robustness.png){: width="80%" }

We can combine this method with other interpretability techniques such as saliency maps to give a holistic picture of what the CNN pays attention to.

![](images/interpretability/teaser.png){: width="80%" }

Read our papers in [European Radiology](https://doi.org/10.1007/s00330-019-06214-8) and [SPIE Medical Imaging](https://doi.org/10.1117/12.2512473) for more details, or check out [our code](https://github.com/clintonjwang/voi-classifier)

### Bibtex

```
@inproceedings{wang2019probabilistic,
  title={A probabilistic approach for interpretable deep learning in liver cancer diagnosis},
  author={Wang, Clinton J and Hamm, Charlie A and Letzen, Brian S and Duncan, James S},
  booktitle={Medical Imaging 2019: Computer-Aided Diagnosis},
  volume={10950},
  pages={220--228},
  year={2019},
  organization={SPIE}
}
```