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

I am a Research Scientist at [Scale AI](https://scale.com/), focusing on LLM capabilities and alignment. My previous research includes computer vision, neural radiance fields, and medical image analysis. I did a PhD at MIT CSAIL advised by [Polina Golland](https://people.csail.mit.edu/polina/). I was a student researcher at Google with [Daniel Duckworth](https://scholar.google.com/citations?user=2fWmq-4AAAAJ&hl=en) and [Peter Hedman](https://www.phogzone.com/), and interned at Adobe with [Jiawen Chen](http://people.csail.mit.edu/jiawen/) and [Cecilia Zhang](https://ceciliavision.github.io/). I worked with [Jim Duncan](https://medicine.yale.edu/profile/james_duncan/) and [Julius Chapiro](https://medicine.yale.edu/profile/julius_chapiro/) in the [Yale Radiology Research Lab](https://medicine.yale.edu/lab/radresearch/), and as an undergrad I did research with [Stuart Campbell](https://seas.yale.edu/faculty-research/faculty-directory/stuart-campbell).

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

## Fun AI Creations ([more](https://www.instagram.com/clintonjwang/))
<div id="gallery">
</div>
<img id="modal" src="">
<div id="leftarrow" class="button">
	<
</div>
<div id="rightarrow" class="button">
	>
</div>
