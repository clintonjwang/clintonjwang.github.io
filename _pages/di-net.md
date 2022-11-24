---
permalink: /di-net
title: Discretization Invariant Learning on Neural Fields
author_profile: false
sidebar: false
---

<style type="text/css">
	th, td {
		font-size: 18px;
	}
</style>

[Paper](http://arxiv.org/abs/2206.01178) \| [Code](https://github.com/clintonjwang/di-net) \| [Poster](images/di-net/poster.png)

<!-- <video width="480" height="270" controls>
  <source src="files/neurreps_video.mp4" type="video/mp4">
Your browser does not support the video tag.
</video> -->
<iframe width="420" height="315" src="https://www.youtube.com/embed/NlcOBLxbekc"></iframe>

Neural fields (NFs) like [NeRF](https://www.matthewtancik.com/nerf) and [SIREN](https://www.vincentsitzmann.com/siren/) are powerful representations of continuous data, but there's a need for deep learning architectures that perform inference on such data without being sensitive to how the neural field is sampled, a property called **discretization invariance**.

We propose **DI-Net**, a general framework for discretization invariant learning on neural fields. DI-Net layers map NFs to NFs using the quasi-Monte Carlo method: they sample the input along a low discrepancy sequence and perform numerical integration with respect to some parametric map.

<figcaption>DI-Net processes a neural field by evaluating it on a point set (discretization) which is used to perform numerical integration throughout the network. DI-Nets are interoperable between all types of NFs and can be trained on a broad range of tasks.</figcaption>
![](images/di-net/framework.png){: width="90%" }

Choosing a low discrepancy sequence minimizes the error between the discrete sample mean and the continuous integral. The parametric map can take on many familiar forms such as convolutions, attention and pooling.

DI-Nets generalize many existing network families as they bridge discrete and continuous network classes, such as convolutional neural networks (CNNs) and neural operators.
They have desirable theoretical properties such as universal approximation of a large class of maps between $L^2$ functions of bounded variation, and gradients that are also discretization invariant.

<figcaption>Convolutional DI-Nets generalize convolutional neural networks to arbitrary discretizations of the domain. Low discrepancy point sets used in QMC integration are amenable to the multi-scale structures often found in discrete networks. Convolutional DI-Nets may be initialized directly from pre-trained CNNs.</figcaption>
![](images/di-net/conv_layers.png){: width="80%" }

DI-Nets derived from CNNs can learn tasks on neural fields under various discretizations, and often generalize to new types of discretizations at test time.

## Signed Distance Function Prediction

<figcaption>2D slices of two toy 3D scenes with signed distance functions predicted by DI-Net and a fully convolutional network.</figcaption>
![](images/di-net/sdf.png){: width="57%" }

## Segmentation

<figcaption>Cityscapes NF segmentations for models trained on coarse segmentations only. NF-Net produces NF segmentations, which can be evaluated at the subpixel level.</figcaption>
![](images/di-net/segs.png){: width="90%" }

## Classification

<figcaption>Classifier performance with different resolutions at test time.</figcaption>
![](images/di-net/cls_plot.png){: width="45%" }

<figcaption>Performance under different types of discretizations at training and test time.</figcaption>

| **Train $\to$ Test Discretization** | **Accuracy** |
| --- | --- |
| QMC $\to$ QMC | **32.9%** |
| Grid $\to$ Grid | 30.5% |
| Shrunk $\to$ Shrunk | 30.3% |
| --- | --- |
| QMC $\to$ Grid | 27.1% |
| Grid $\to$ QMC | 27.8% |
| QMC $\to$ Shrunk | 25.4% |
| Shrunk $\to$ QMC | 13.4% |

Read [our paper](http://arxiv.org/abs/2206.01178) for more details, or check out [our code](https://github.com/clintonjwang/di-net)

### Bibtex

```
@misc{wang2022dinet,
      title={Approximate Discretization Invariance for Deep Learning on Implicit Neural Datasets}, 
      author={Clinton J. Wang and Polina Golland},
      year={2022},
      eprint={2206.01178},
      archivePrefix={arXiv},
      primaryClass={cs.LG}
}
```