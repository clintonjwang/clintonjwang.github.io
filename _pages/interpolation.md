---
permalink: /interpolation
title: Interpolating between Images with Diffusion Models
author_profile: false
sidebar: false
---

<style>
  .container {
    /* width: 100%;
    height: 0;
    padding-bottom: 19.2%;
    position: relative; */
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .container img {
    /* position: absolute; */
    max-width: 100%;
    height: auto;
  }

  .container input[type="range"] {
    position: absolute;
    bottom: -35px;
    width: 100%;
  }
</style>

<style type="text/css">
	th, td {
		font-size: 18px;
	}
</style>

[Paper](https://arxiv.org/abs/2307.12560) \| [Code](https://github.com/clintonjwang/ControlNet)

One little-explored frontier of image generation and editing is the task of interpolating between two input images. We present a method for zero-shot controllable interpolation using latent diffusion models. 

<figcaption><b><i>Drag the slider left and right. The first and last frames are the inputs.</i></b> By leveraging the powerful conditioning abilities of pre-trained diffusion models, we can generate controllable and creative interpolations between images with diverse styles, layouts, and subjects.</figcaption>
<div class="container">
  <img class="image" src="images/interp/collated1/008.png" data-path="images/interp/collated1/">
  <input class="slider" type="range" min="0" max="16" step="1">
</div>

<br>

We apply interpolation in latent space at a sequence of decreasing noise levels, then perform denoising conditioned on interpolated text embeddings derived from textual inversion and (optionally) subject poses derived from OpenPose. For greater consistency, or to specify additional criteria, we can generate several candidates and use CLIP to select the highest quality image.

<figcaption>To generate a new frame, we interpolate the noisy latents of two existing frames. Text prompts and (if applicable) poses are extracted from the original input images, and interpolated to provide to the denoiser as conditioning inputs. This process can be repeated for different noise vectors to generate multiple candidates. The best candidate is selected by computing its CLIP similarity to a prompt describing desired characteristics.</figcaption>
![](images/interp/pipeline.png){: width="95%" }

We obtain convincing interpolations across diverse subject poses, image styles, and image content.

<figcaption>Drag the slider left and right. The first and last frames are the inputs.</figcaption>
<div class="container">
  <img class="image" src="images/interp/collated2/008.png" data-path="images/interp/collated2/">
  <input class="slider" type="range" min="0" max="16" step="1">
</div>

<br>

<div class="container">
  <img class="image" src="images/interp/collated3/008.png" data-path="images/interp/collated3/">
  <input class="slider" type="range" min="0" max="16" step="1">
</div>

<br>

<div class="container">
  <img class="image" src="images/interp/collated4/008.png" data-path="images/interp/collated4/">
  <input class="slider" type="range" min="0" max="16" step="1">
</div>

<br>

<div class="container">
  <img class="image" src="images/interp/collated5/008.png" data-path="images/interp/collated5/">
  <input class="slider" type="range" min="0" max="16" step="1">
</div>

<br>


<script>
  const sliders = document.querySelectorAll(".slider");
  const images = document.querySelectorAll(".image");

  for (let i = 0; i < sliders.length; i++) {
    const slider = sliders[i];
    const image = images[i];

    slider.oninput = function() {
      const imageName = image.dataset.path + this.value.toString().padStart(3, '0') + ".png";
      image.src = imageName;
    };
  }
</script>

Paper presented at ICML 2023 Workshop on Challenges of Deploying Generative AI. Read [our paper](https://arxiv.org/abs/2307.12560) for more details, or check out [our code](https://github.com/clintonjwang/ControlNet).

### Bibtex
```
@misc{wang2023interpolate,
      title={Approximate Discretization Invariance for Deep Learning on Implicit Neural Datasets}, 
      author={Clinton J. Wang and Polina Golland},
      year={2022},
      eprint={2206.01178},
      archivePrefix={arXiv},
      primaryClass={cs.LG}
}
```