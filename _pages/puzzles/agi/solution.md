---
layout: single
title: "AGI Solution"
permalink: /puzzles/agi/solution/
author_profile: false
---

[Back to Puzzle]({{ site.baseurl }}/puzzles/agi)

<div class="puzzle-solution">
  <h2 class="solution-answer">Answer: AUTOMAGICAL GRADIENT IMPROVEMENTS</h2>

  <p>Each subplot corresponds to a character. The starting value of each plot is the character's ASCII value divided by 10, as hinted by the comment: "The loss curves look decimated at the start". This yields "ARTIFICIAL(L) GENERAL(T) INTELLIGENCE" as suggested by the title "AGI".</p>

  <table class="solution-table">
    <tr>
      <td>A</td><td>R</td><td>T</td><td>I</td><td>F</td><td>I</td><td>C</td><td>I</td><td>A</td><td>L</td><td class="empty-cell">L</td>
    </tr>
    <tr>
      <td>G</td><td>E</td><td>N</td><td>E</td><td>R</td><td>A</td><td>L</td><td class="empty-cell">T</td>
    </tr>
    <tr>
      <td>I</td><td>N</td><td>T</td><td>E</td><td>L</td><td>L</td><td>I</td><td>G</td><td>E</td><td>N</td><td>C</td><td>E</td>
    </tr>
  </table>

  <p>This approach is validated by the fact that the graphs corresponding to extra characters have NaN losses.</p>

  <p>The graphs in the image all have integer differences between the starting and ending losses. Transcribing those differences, we get:</p>

  <table class="solution-table">
    <tr>
      <td>0</td><td>3</td><td>0</td><td>6</td><td>7</td><td>-8</td><td>4</td><td>0</td><td>2</td><td>-11</td><td class="empty-cell">NaN</td>
    </tr>
    <tr>
      <td>0</td><td>13</td><td>-13</td><td>-1</td><td>-9</td><td>4</td><td>2</td><td class="empty-cell">NaN</td>
    </tr>
    <tr>
      <td>0</td><td>-1</td><td>-4</td><td>13</td><td>3</td><td>10</td><td>-4</td><td>6</td><td>0</td><td>0</td><td>17</td><td>14</td>
    </tr>
  </table>

  <p>Take the corresponding letter and increment its ASCII representation by this amount to yield "AUTOMAGICAL GRADIENT IMPROVEMENTS".</p>

  <div class="solution-buttons">
    <a href="{{ site.baseurl }}/puzzles/agi" class="puzzle-button back-button">Back to Puzzle</a>
    <a href="{{ site.baseurl }}/puzzles" class="puzzle-button all-puzzles-button">View All Puzzles</a>
  </div>
</div>