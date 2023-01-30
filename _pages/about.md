---
permalink: /
title: #"About"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% include base_path %}

I am a PhD candidate at MIT CSAIL advised by [Polina Golland](https://people.csail.mit.edu/polina/). My research focuses on medical image analysis, particularly robust and interpretable techniques for both generative and discriminative models. I also work on 3D vision, including neural fields and trajectory estimation. I make [AI-generated art](#ai-generated-art-more).
<!-- My projects have included analyzing brain MRI (stroke, Alzheimer's disease), liver MRI (hepatocellular carcinoma), fetal MRI (placental oxygenation), and colonoscopy videos (inflammatory bowel disease).  -->

I previously worked with [Jim Duncan](https://medicine.yale.edu/profile/james_duncan/) and [Julius Chapiro](https://medicine.yale.edu/profile/julius_chapiro/) in the [Yale Radiology Research Lab](https://medicine.yale.edu/lab/radresearch/), and interned at [Iterative Scopes](https://www.iterativescopes.com/). I am supported by the [Takeda Fellowship](https://mittakedaprogram.mit.edu/) and [Siebel Scholarship](http://www.siebelscholars.com/). I received a B.S. in Biomedical Engineering at Yale, where I did research with [Stuart Campbell](https://seas.yale.edu/faculty-research/faculty-directory/stuart-campbell).

<style type="text/css">
	.paper_metadata a {
		text-decoration: none!important;
		color: #494e52;
	}
	table, th, td {
		border: 0px solid black;
	}
	table.pub_table {
		width: 100%;
		font-size: 12pt;
	}
	td.pub_td1 {
		width: 33%;
	}
	td.pub_td2 {
		width: 67%;
	}
	span.subbullet {
		font-size: 11pt;
		margin-left: 20px
	}
	oral {
		font-weight: bold;
		color: red;
	}

    /* Style the gallery */
    #gallery {
		/* display: block; */
		display: flex;
		flex-wrap: wrap;
    }

    /* Style the art pieces */
    .gallery-row {
		display: block; /* Display the art pieces in a row */
		width: 100%; /* Set the width of each art piece to 30% of the gallery width */
    }

    .art-piece {
		width: 30%; /* Set the width of each art piece to 30% of the gallery width */
		margin: 1%; /* Add some margin around each art piece */
    }

    /* Style the images */
    .art-piece img {
    	cursor: pointer;
		width: 100%;
    }
	
	/* Style the modals */
	#modal {
		display: none;
		margin: auto;
		position: fixed;
		z-index: 1; /* Sit on top */
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		--r: 1/1;
		aspect-ratio: var(--r);
		width:min(90%, min(960px, 90vh*(var(--r))));
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		padding: 10px;
		overflow: auto;
		background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
	}
	
	.button {
		display: none;
		background: white;
		border-radius: 50%;
		box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
		position: fixed;
		cursor: pointer;
		margin-left: 2px;
		margin-right: 2px;
		margin-top: -20px;
  		color: rgb(102, 102, 102);
		opacity: 1;
		transition-duration: .2s;
		transition-property: opacity;
		z-index: 3;
		top: 50%;
		align-items: center;
		border: none;
		justify-content: center;
		padding: 2px 10px 4px;
	}
	#leftarrow {
		left: 5px;
	}
	#rightarrow {
		right: 5px;
	}

</style>
<script src="assets/js/gallery.js"></script>
<script src="https://unpkg.com/vanilla-back-to-top@7.2.1/dist/vanilla-back-to-top.min.js"></script>
<script>addBackToTop({
  diameter: 56,
  backgroundColor: 'rgb(255, 82, 82)',
  textColor: '#fff'
})</script>

{% include publications %}

## AI-Generated Art ([more](https://www.instagram.com/clintonjwang/))
<div id="gallery">
</div>
<img id="modal" src="">
<div id="leftarrow" class="button">
	<
</div>
<div id="rightarrow" class="button">
	>
</div>

<!-- ## Selected Awards
* Takeda Fellowship, 2021-2022
* Siebel Foundation Scholar, 2020
* Yale Department of Biomedical Engineering Prize, 2015
* Tau Beta Pi Engineering Honor Society, 2015

## Invited Talks
* Google Brain, Toronto 2022<br>
	<span class="subbullet">
	Deep learning on neural fields
* Boston Medical Imaging Workshop 2022<br>
	<span class="subbullet">
	Robust counterfactual image generation with spatial-intensity transforms
* MIT-Takeda Presentation Series 2022<br>
	<span class="subbullet">
	Identifying radiological biomarkers with generative models -->

<!--
## Teaching
* Teaching Assistant, Advances in Computer Vision (6.819/6.869), MIT, 2021
* Undergraduate Mentor, MIT Undergraduate Research Opportunities Program
* Guest Lecture, Intro to Computer Graphics (6.4400), MIT, 2022

## Academic Service
* Program Committee, Medical Imaging Meets NeurIPS Workshop (MedNeurIPS)
* Reviewer, International Conference on Machine Learning (ICML)
* Reviewer, Medical Image Analysis (MedIA)
* Reviewer, Conference on Neural Information Processing Systems (NeurIPS)
* Reviewer, Medical Image Computing and Computer Assisted Intervention (MICCAI)
-->
