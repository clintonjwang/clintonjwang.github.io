---
layout: single
title: "駒独 Solution"
permalink: /puzzles/駒独/solution/
author_profile: false
---

[Back to Puzzle]({{ site.baseurl }}/puzzles/駒独)

<div class="puzzle-solution">
  <h2 class="solution-answer">Answer: KBBQ RN</h2>

  <p>The title 駒独 is a reference to Sudoku (数独), but 駒 is the term for a (game) piece whereas 数 refers to digits. This hints that the numbers written in the given Sudoku-like puzzle refer to pieces from some game.</p>

  <p>The first step is to realize that these are chess pieces, and the number represents the piece's point value (infinity represents King, and 0 represents an empty space).</p>

  <p>The second step is to uncover the logic for piece placement:</p>
  <ul>
    <li>Chess pieces of the same type must be placed so they are not attacking each other (like in the 8 queens puzzle, hinted by "92 answers" in the flavor text)</li>
    <li>Each subgrid contains one of each type of piece (also hinted by the title 駒独)</li>
  </ul>

  <p>The complete piece placement is underspecified, but the circled pieces are unambiguous. Although bishops and knights cannot be distinguished initially, by looking for diagonals that pass through two 3s in a single subgrid, we know that both a bishop and a knight exist on this diagonal, hence any other 3s on the diagonal must be knights.</p>

  <p>One possible piece placement is:</p>

  <div class="puzzle-images">
    <img src="{{ site.baseurl }}/assets/puzzles/駒独/image2.png" alt="Puzzle Solution" class="puzzle-image">
  </div>

  <p>Going clockwise, the 8 circled spots contain:</p>
  <ul>
    <li><strong>King, Bishop, Bishop, Queen</strong> → <strong>KBBQ</strong> ("What do we want?")</li>
    <li><strong>(empty cell or pawn), Rook, Knight</strong> → <strong>RN</strong> ("When do we want it?")</li>
  </ul>

  <div class="solution-buttons">
    <a href="{{ site.baseurl }}/puzzles/駒独" class="puzzle-button back-button">Back to Puzzle</a>
    <a href="{{ site.baseurl }}/puzzles" class="puzzle-button all-puzzles-button">View All Puzzles</a>
  </div>
</div>