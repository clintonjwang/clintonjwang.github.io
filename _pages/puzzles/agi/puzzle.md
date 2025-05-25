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
  <img src="{{ site.baseurl }}/assets/puzzles/agi/image1.png" alt="Puzzle Image 1" class="puzzle-image">
  <img src="{{ site.baseurl }}/assets/puzzles/agi/image2.png" alt="Puzzle Image 2" class="puzzle-image">
  <img src="{{ site.baseurl }}/assets/puzzles/agi/image3.png" alt="Puzzle Image 3" class="puzzle-image">
</div>

<div class="puzzle-actions">
  <input type="text" id="puzzle-answer-input" class="puzzle-input" placeholder="Enter answer...">
  <button id="check-answer-btn" class="puzzle-button check-answer-button">Check Answer</button>
  <a href="{{ site.baseurl }}/puzzles/agi/solution" class="puzzle-button reveal-solution-button">Reveal Solution</a>
</div>

<div id="answer-feedback" class="answer-feedback" style="display: none;"></div>

<script>
// Puzzle functionality for checking answers
class PuzzleChecker {
    constructor(correctAnswer) {
        this.correctAnswer = this.normalizeAnswer(correctAnswer);
        this.answerInput = document.getElementById('puzzle-answer-input');
        this.checkButton = document.getElementById('check-answer-btn');
        this.feedback = document.getElementById('answer-feedback');
        
        this.init();
    }
    
    // Normalize answer by removing non-alphanumeric characters and converting to uppercase
    normalizeAnswer(answer) {
        return answer.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
    }
    
    init() {
        if (!this.answerInput || !this.checkButton || !this.feedback) {
            console.error('Required puzzle elements not found');
            return;
        }
        
        // Event listeners
        this.checkButton.addEventListener('click', () => this.checkAnswer());
        
        // Allow Enter key to submit answer
        this.answerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.checkAnswer();
            }
        });
    }
    
    checkAnswer() {
        const userAnswer = this.normalizeAnswer(this.answerInput.value.trim());
        
        if (userAnswer === '') {
            this.showFeedback('Please enter an answer first.', 'warning');
            return;
        }
        
        if (userAnswer === this.correctAnswer) {
            this.showFeedback('🎉 Correct! Well done!', 'success');
            // Disable the input and button after correct answer
            this.answerInput.disabled = true;
            this.checkButton.disabled = true;
            this.checkButton.textContent = 'Solved!';
        } else {
            this.showFeedback('❌ Not quite right. Try again!', 'error');
            // Clear the input for another attempt
            this.answerInput.value = '';
            this.answerInput.focus();
        }
    }
    
    showFeedback(message, type) {
        this.feedback.textContent = message;
        this.feedback.className = `answer-feedback ${type}`;
        this.feedback.style.display = 'block';
        
        // Auto-hide feedback after 3 seconds for non-success messages
        if (type !== 'success') {
            setTimeout(() => {
                this.feedback.style.display = 'none';
            }, 3000);
        }
    }
}

// Initialize puzzle when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const PUZZLE_ANSWER = "AUTOMAGICAL GRADIENT IMPROVEMENTS";
    new PuzzleChecker(PUZZLE_ANSWER);
});
</script>