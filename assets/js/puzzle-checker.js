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

// Global function to initialize puzzle
function initializePuzzle(answer) {
    document.addEventListener('DOMContentLoaded', function() {
        new PuzzleChecker(answer);
    });
}

// Make it available globally
window.PuzzleChecker = PuzzleChecker;
window.initializePuzzle = initializePuzzle; 