// Word Count Script
function updateWordCount() {
    const sections = [
        document.getElementById('Section1').textContent,
        document.getElementById('Section2').textContent,
        document.getElementById('Section3').textContent,
        document.getElementById('Section4').textContent,
        document.getElementById('Section5').textContent,
        document.getElementById('Section6').textContent,
        document.getElementById('Section7').textContent
    ];

    const totalWords = sections.reduce((acc, section) => acc + section.split(/\s+/).length, 0);

    document.getElementById('wordCount').textContent = totalWords;
}

// Run word count on page load
window.addEventListener('load', updateWordCount);

// Timestamp Script
function getLastUpdatedTime() {
    const apiUrl = "https://api.github.com/repos/username/repository/commits?per_page=1";

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const lastModified = new Date(data[0].commit.committer.date).toLocaleString();
            document.getElementById('lastModified').textContent = lastModified;
        })
        .catch(error => {
            console.error('Error fetching last modified time:', error);
            document.getElementById('lastModified').textContent = "Error fetching data";
        });
}

// Fetch last modified time on page load and button click
window.addEventListener('load', getLastUpdatedTime);
document.getElementById('verifyButton').addEventListener('click', getLastUpdatedTime);

