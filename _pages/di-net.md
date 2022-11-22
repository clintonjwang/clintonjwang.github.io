---
permalink: /di-net
title: Discretization Invariant Learning on Neural Fields
author_profile: false
sidebar: false
---

While neural fields have emerged as powerful representations of continuous data, there is a need for neural networks that can perform inference on such data without being sensitive to how the field is sampled, a property called discretization invariance.

DI-Net is a framework for learning discretization invariant operators on neural fields of any type. Whereas current theoretical analyses of discretization invariant networks are restricted to the limit of infinite samples, our analysis does not require infinite samples and establishes upper bounds on the variation in DI-Net outputs given different finite discretizations. Our framework leads to a family of neural networks driven by numerical integration via quasi-Monte Carlo sampling with discretizations of low discrepancy.

DI-Nets manifest desirable theoretical properties such as universal approximation of a large class of maps between $L^2$ functions, and gradients that are also discretization invariant. DI-Nets can also be seen as generalizations of many existing network families as they bridge discrete and continuous network classes, such as convolutional neural networks (CNNs) and neural operators respectively. Experimentally, DI-Nets derived from CNNs are demonstrated to classify and segment visual data represented by neural fields under various discretizations, and sometimes even generalize to new types of discretizations at test time.


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