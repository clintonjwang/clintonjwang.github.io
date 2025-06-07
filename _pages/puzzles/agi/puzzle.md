---
layout: single
permalink: /puzzles/agi/
author_profile: false
---

[All Puzzles]({{ site.baseurl }}/puzzles)

<h1 class="puzzle-title">AGI</h1>

<div class="puzzle-difficulty">
  <span class="difficulty-label">Difficulty:</span>
  <span class="difficulty-rating easy">Easy</span>
</div>

<p class="puzzle-flavor-text">What do AI researchers dream of?</p>

<div class="puzzle-images">
  <img src="{{ site.baseurl }}/assets/puzzles/agi/image1.png" alt="Puzzle Image" class="puzzle-image">
</div>

<details class="puzzle-table-dropdown">
  <summary>Show Transcribed Numbers</summary>
  <div class="puzzle-table-container">
    <table class="puzzle-table">
    <tbody>
      <tr>
        <td rowspan="2">Row 1</td>
        <td class="start-end-cell">Start</td>
        <td>6.5</td>
        <td>8.2</td>
        <td>8.4</td>
        <td>7.3</td>
        <td>7.0</td>
        <td>7.3</td>
        <td>6.7</td>
        <td>7.3</td>
        <td>6.5</td>
        <td>7.6</td>
        <td>7.6</td>
        <td></td>
      </tr>
      <tr>
        <td class="start-end-cell">End</td>
        <td>6.5</td>
        <td>11.2</td>
        <td>8.4</td>
        <td>13.3</td>
        <td>14.0</td>
        <td>-0.7</td>
        <td>10.7</td>
        <td>7.3</td>
        <td>8.5</td>
        <td>-3.4</td>
        <td>NaN</td>
        <td></td>
      </tr>
      <tr>
        <td rowspan="2">Row 2</td>
        <td class="start-end-cell">Start</td>
        <td>7.1</td>
        <td>6.9</td>
        <td>7.8</td>
        <td>6.9</td>
        <td>8.2</td>
        <td>6.5</td>
        <td>7.6</td>
        <td>8.4</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td class="start-end-cell">End</td>
        <td>7.1</td>
        <td>19.9</td>
        <td>-5.2</td>
        <td>5.9</td>
        <td>-0.8</td>
        <td>10.5</td>
        <td>9.6</td>
        <td>NaN</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td rowspan="2">Row 3</td>
        <td class="start-end-cell">Start</td>
        <td>7.3</td>
        <td>7.8</td>
        <td>8.4</td>
        <td>6.9</td>
        <td>7.6</td>
        <td>7.6</td>
        <td>7.3</td>
        <td>7.1</td>
        <td>6.9</td>
        <td>7.8</td>
        <td>6.7</td>
        <td>6.9</td>
      </tr>
      <tr>
        <td class="start-end-cell">End</td>
        <td>7.3</td>
        <td>6.8</td>
        <td>4.4</td>
        <td>19.9</td>
        <td>10.6</td>
        <td>17.6</td>
        <td>3.3</td>
        <td>13.1</td>
        <td>6.9</td>
        <td>7.8</td>
        <td>23.7</td>
        <td>20.9</td>
      </tr>
    </tbody>
  </table>
  </div>
</details>

<style>
.puzzle-table-dropdown {
  margin: 20px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fafafa;
}

.puzzle-table-dropdown summary {
  padding: 15px;
  cursor: pointer;
  font-weight: normal;
  background-color: #f5f5f5;
  border-radius: 5px 5px 0 0;
  user-select: none;
}

.puzzle-table-dropdown summary:hover {
  background-color: #e8e8e8;
}

.puzzle-table-dropdown[open] summary {
  border-bottom: 1px solid #ddd;
  border-radius: 5px 5px 0 0;
}

.puzzle-table-container {
  overflow-x: auto;
  margin: 0;
  padding: 15px;
}

.puzzle-table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Courier New', monospace;
  font-size: 14px;
}

.puzzle-table th,
.puzzle-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.puzzle-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.puzzle-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.puzzle-table tr:hover {
  background-color: #f5f5f5;
}

.puzzle-table td:first-child {
  font-weight: bold;
  background-color: #f8f8f8;
}

.puzzle-table .start-end-cell {
  font-weight: bold;
  background-color: #f0f0f0;
}
</style>

<div class="puzzle-actions">
  <input type="text" id="puzzle-answer-input" class="puzzle-input" placeholder="Enter answer...">
  <button id="check-answer-btn" class="puzzle-button check-answer-button">Check Answer</button>
  <a href="{{ site.baseurl }}/puzzles/agi/solution" class="puzzle-button reveal-solution-button">Reveal Solution</a>
</div>

<div id="answer-feedback" class="answer-feedback" style="display: none;"></div>

<script src="{{ site.baseurl }}/assets/js/puzzle-checker.js"></script>
<script>
initializePuzzle("AUTOMAGICAL GRADIENT IMPROVEMENTS");
</script>