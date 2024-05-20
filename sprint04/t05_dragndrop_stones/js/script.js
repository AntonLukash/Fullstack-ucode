document.addEventListener('DOMContentLoaded', function() {
    const blocks = document.querySelectorAll('.block');
    let selectedBlock = null;
    let offsetX, offsetY;

    document.addEventListener('mousedown', function(event) {
        const block = event.target.closest('.block');
        if (event.detail === 1 && block) {
            selectedBlock = block;
            const rect = selectedBlock.getBoundingClientRect();
            offsetX = event.clientX - rect.left;
            offsetY = event.clientY - rect.top;
            selectedBlock.classList.add('dragging');
            selectedBlock.style.zIndex = 1000;
        }
    });

    document.addEventListener('mousemove', function(event) {
        if (selectedBlock) {
            const newX = event.clientX - offsetX;
            const newY = event.clientY - offsetY;
            selectedBlock.style.left = newX + 'px';
            selectedBlock.style.top = newY + 'px';
        }
    });

    document.addEventListener('mouseup', function() {
        if (selectedBlock) {
            selectedBlock.classList.remove('dragging');
            selectedBlock.style.zIndex = '';
            selectedBlock = null;
        }
    });
});

