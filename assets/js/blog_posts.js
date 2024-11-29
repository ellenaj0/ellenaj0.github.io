document.addEventListener('DOMContentLoaded', () => {
    const blogContainer = document.getElementById('blog-entries');

    // Fetch posts from the JSON file
    fetch('../blog/blog_posts.json')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const blogEntry = document.createElement('div');
                blogEntry.classList.add('blog-entry');

                blogEntry.innerHTML = `
                    <h2><a href="${post.link}">${post.title}</a></h2>
                    <p class="date">Published on: ${post.date}</p>
                    <p>${post.summary}</p>
                `;
                blogContainer.appendChild(blogEntry);
            });
        })
        .catch(error => {
            console.error('Error loading posts:', error);
            blogContainer.innerHTML = '<p>Failed to load blog posts.</p>';
        });
});
