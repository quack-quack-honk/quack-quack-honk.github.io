const spinner = document.querySelector('.spinner');
const result = document.getElementById('result');
const spinButton = document.getElementById('spinButton');

spinButton.addEventListener('click', () => {
    // Disable the button while spinning
    spinButton.disabled = true;
    
    // Hide previous result
    result.style.opacity = '0';
    
    // Add spin animation
    spinner.classList.add('spin');
    
    // After 3 seconds, show the result
    setTimeout(() => {
        result.textContent = 'YES! 🌟';
        result.style.opacity = '1';
        
        // Remove spin class for next spin
        spinner.classList.remove('spin');
        
        // Re-enable the button
        spinButton.disabled = false;
    }, 3000);
});
