window.onload = function() {
    // Word Count
    const wordCount = document.querySelector('#analysis').textContent.split(' ').length;
    document.querySelector('#wordCount').textContent = wordCount;

    // Timestamp
    document.querySelector('#timestamp').textContent = new Date().toLocaleString();
};
