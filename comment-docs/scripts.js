// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const commentTextarea = document.getElementById('comment-text');
    const commentSubmitButton = document.getElementById('submit');

        commentTextarea.addEventListener('input', () => {
            if (commentTextarea.value.trim()) {
                commentSubmitButton.classList.remove('comment-submit-disabled');
                commentSubmitButton.classList.add('comment-submit-enable');
            } else {
                commentSubmitButton.classList.remove('comment-submit-enable');
                commentSubmitButton.classList.add('comment-submit-disabled');
            }
        });
});
