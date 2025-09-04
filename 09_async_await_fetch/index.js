document.addEventListener('DOMContentLoaded', () => {

    const fetchBtn = document.getElementById('fetch-btn');
    const dataContainer = document.getElementById('data-container');

    // This is where we will write our main async function
    async function fetchPosts() {
        // Clear the container and show a loading message
        dataContainer.innerHTML = 'Loading...';

        try {
            // 1. Await the fetch call to the API
            // We're getting 5 posts from the JSONPlaceholder API
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');

            // fetch() doesn't throw an error for HTTP error statuses (like 404 or 500).
            // So, we need to check the 'ok' status and throw an error ourselves.
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // 2. Await the .json() call to parse the response body
            const posts = await response.json();

            // Clear the "Loading..." message
            dataContainer.innerHTML = '';

            // 3. Loop through the data and display it
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `
                    <h3 class="post-title">${post.title}</h3>
                    <p>${post.body}</p>
                `;
                dataContainer.appendChild(postElement);
            });

        } catch (error) {
            // This catch block will handle network errors or the error we threw
            console.error('Failed to fetch posts:', error);
            dataContainer.innerHTML = `<p class="error">Failed to load posts. Please try again later.</p>`;
        }
    }

    // Add a click event listener to the button to trigger our async function
    fetchBtn.addEventListener('click', fetchPosts);

});
