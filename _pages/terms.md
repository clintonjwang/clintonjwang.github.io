---
permalink: /spatial-intensity-transforms/
title: "High Fidelity Medical Image-to-Image Translation with Spatial-Intensity Transforms"
---

{% include base_path %}
{% include toc %}

# High Fidelity Medical Image-to-Image Translation with Spatial-Intensity Transforms

<img src="images/sit_teaser.png" />

### Abstract

Image-to-image translation has seen major advances in computer vision, but can be difficult to apply to medical images, where imaging artifacts and data scarcity compromise the performance of conditional generative adversarial networks. We develop the spatial-intensity transform (SIT) to improve output image quality while closely matching the target domain. Our SIT constrains the generator to a smooth spatial transform (diffeomorphism) composed with sparse intensity changes. SIT is a lightweight, modular network component that is effective on a variety of model architectures and training schemes. Relative to several unconstrained baselines, this technique significantly improves image quality. Our models generalize robustly to different scanners without retraining. Additionally, SIT provides a disentangled view of anatomical and textural changes for each translation, making it easier to interpret the model's predictions in terms of physiological phenomena. We demonstrate SIT on two tasks: predicting longitudinal brain MRIs in patients with various stages of neurodegeneration, and visualizing changes in age and stroke severity in clinical brain scans of stroke patients. On the first task, our model accurately forecasts brain aging trajectories without supervised training on paired scans. On the second task, it captures associations between ventricle expansion and aging, as well as between white matter hyperintensities and stroke severity. As conditional generative models become increasingly versatile tools for visualization and forecasting, our approach demonstrates a simple and powerful technique for improving robustness, which is critical for translation to clinical settings.


### Paper

[Google Analytics Privacy Policy](http://www.google.com/analytics/learn/privacy.html).