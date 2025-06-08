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


<details class="puzzle-dropdown">
  <summary>Hints</summary>
  <div class="hint-content">
    <div class="hint-item">
      <strong>Hint 1:</strong> 
      <span class="spoiler" onclick="this.classList.toggle('revealed')">Each subgrid contains one of each type of piece, but why are some numbers repeated?</span>
    </div>
    <div class="hint-item">
      <strong>Hint 2:</strong> 
      <span class="spoiler" onclick="this.classList.toggle('revealed')">Each number represents the piece's point value and 0 means there is no piece. What puzzle has 92 answers?</span>
    </div>
    <div class="hint-item">
      <strong>Hint 3:</strong> 
      <span class="spoiler" onclick="this.classList.toggle('revealed')">Chess pieces of the same type must be placed so they are not attacking each other (like in the 8 queens puzzle). The complete piece placement is underspecified, but the circled pieces are unambiguous.</span>
    </div>
    <div class="hint-item">
      <strong>Hint 4:</strong> 
      <span class="spoiler" onclick="this.classList.toggle('revealed')">The final answer uses only English characters. Find a way to convert the circled pieces to English characters.</span>
    </div>
  </div>
</details>

<div class="puzzle-actions">
  <input type="text" id="puzzle-answer-input" class="puzzle-input" placeholder="Enter answer...">
  <button id="check-answer-btn" class="puzzle-button check-answer-button">Check Answer</button>
  <a href="{{ site.baseurl }}/puzzles/駒独/solution" class="puzzle-button reveal-solution-button">Reveal Solution</a>
</div>

<div id="answer-feedback" class="answer-feedback" style="display: none;"></div>

<style>
.puzzle-dropdown {
  margin: 20px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fafafa;
}

.puzzle-dropdown summary {
  padding: 15px;
  cursor: pointer;
  font-weight: normal;
  background-color: #f5f5f5;
  border-radius: 5px 5px 0 0;
  user-select: none;
}

.puzzle-dropdown summary:hover {
  background-color: #e8e8e8;
}

.puzzle-dropdown[open] summary {
  border-bottom: 1px solid #ddd;
  border-radius: 5px 5px 0 0;
}

.hint-content {
  padding: 15px;
  line-height: 1.6;
  color: #333;
}

.hint-content p {
  margin: 0 0 10px 0;
}

.hint-content p:last-child {
  margin-bottom: 0;
}

.hint-item {
  margin-bottom: 15px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  border-left: 3px solid #007acc;
}

.hint-item:last-child {
  margin-bottom: 0;
}

.spoiler {
  background-color: #333;
  color: #333;
  cursor: pointer;
  border-radius: 3px;
  padding: 2px 4px;
  transition: all 0.3s ease;
  user-select: none;
}

.spoiler:hover {
  background-color: #555;
  color: #555;
}

.spoiler.revealed {
  background-color: transparent;
  color: inherit;
  cursor: default;
}

.spoiler::before {
  content: "🔍";
  font-size: 0.8em;
  opacity: 0.7;
  margin-right: 5px;
}

.spoiler.revealed::before {
  content: "";
  margin-right: 0;
}
</style>

<script src="{{ site.baseurl }}/assets/js/puzzle-checker.js"></script>
<script>
initializePuzzle("KBBQ RN");
</script>