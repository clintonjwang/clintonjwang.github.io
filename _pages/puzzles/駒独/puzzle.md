---
layout: single
permalink: /puzzles/駒独/
author_profile: false
---

[All Puzzles]({{ site.baseurl }}/puzzles)

<h1 class="puzzle-title">駒独</h1>

<div class="puzzle-difficulty">
  <span class="difficulty-label">Difficulty:</span>
  <span class="difficulty-rating hard">Hard</span>
</div>

<p class="puzzle-flavor-text">They told me this puzzle has 92 answers.</p>

<div class="puzzle-images">
  <img src="{{ site.baseurl }}/assets/puzzles/駒独/image1.png" alt="Puzzle Image 1" class="puzzle-image">
</div>

<p>What do we want? _____</p>
    
<p>When do we want it? _____</p>

<div class="puzzle-actions">
  <input type="text" id="puzzle-answer-input" class="puzzle-input" placeholder="Enter answer...">
  <button id="check-answer-btn" class="puzzle-button check-answer-button">Check Answer</button>
  <a href="{{ site.baseurl }}/puzzles/駒独/solution" class="puzzle-button reveal-solution-button">Reveal Solution</a>
</div>

<div id="answer-feedback" class="answer-feedback" style="display: none;"></div>

<script src="{{ site.baseurl }}/assets/js/puzzle-checker.js"></script>
<script>
initializePuzzle("KBBQ RN");
</script>