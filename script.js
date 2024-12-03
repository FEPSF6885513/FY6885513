// Word Count Script
function updateWordCount() {
    const section1 = document.getElementById('Section1').textContent;
    const section2 = document.getElementById('Section2').textContent;

    const totalWords = section1.split(/\s+/).length + section2.split(/\s+/).length;

    document.getElementById('wordCount').textContent = totalWords;
}

// Run word count on page load
window.addEventListener('load', updateWordCount);

// Timestamp Script
function getLastUpdatedTime() {
    // Placeholder GitHub API URL (replace with actual username and repository)
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
