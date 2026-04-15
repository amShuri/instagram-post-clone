const postContainer = document.getElementById('post-container');
const posts = [
  {
    name: 'Vincent van Gogh',
    username: 'vincey1853',
    location: 'Zundert, Netherlands',
    avatar: 'images/avatar-vangogh.jpg',
    post: 'images/post-vangogh.jpg',
    comment: 'just took a few mushrooms lol',
    likes: 21,
  },
  {
    name: 'Gustave Courbet',
    username: 'gus1819',
    location: 'Ornans, France',
    avatar: 'images/avatar-courbet.jpg',
    post: 'images/post-courbet.jpg',
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: 'Joseph Ducreux',
    username: 'jd1735',
    location: 'Paris, France',
    avatar: 'images/avatar-ducreux.jpg',
    post: 'images/post-ducreux.jpg',
    comment:
      'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
    likes: 152,
  },
];

function renderPosts() {
  let html = '';

  for (let i = 0; i < posts.length; i++) {
    html += getPostHTML(posts[i]);
  }

  postContainer.innerHTML = html;
}

function getPostHTML(postObj) {
  return `
        <article class="post">
            <div class="post-content">
                <header class="post-header">
                    <img 
                        src="${postObj.avatar}" 
                        alt="Portrait of ${postObj.name}"
                        class="user-avatar">
                    <div>
                        <p class="post-author">${postObj.name}</p>
                        <p class="post-location">${postObj.location}</p>
                    </div>
                </header>
            </div>
            
            <img src="${postObj.post}" alt="${postObj.name}" class="post-img">
            
            <div class="post-content">
                <div class="post-icons">
                    <button type="button" aria-label="Like" class="post-btn">
                        <img src="images/icon-heart.png" alt="" class="post-icon">
                    </button>
                    <button type="button" aria-label="Comment" class="post-btn">
                        <img src="images/icon-comment.png" alt="" class="post-icon">
                    </button>
                    <button type="button" aria-label="Share" class="post-btn">
                        <img src="images/icon-dm.png" alt="" class="post-icon">
                    </button>
                </div>
                
                <p class="post-likes"><span class="likes-count">${postObj.likes}</span> likes</p>
                
                <p>
                    <span class="post-username">${postObj.username}</span> ${postObj.comment}
                </p>
            </div>
        </article>
    `;
}

function updateLikesCount(likesEl, isLiked) {
  const currentLikes = Number(likesEl.textContent);

  if (isLiked) {
    likesEl.textContent = currentLikes + 1;
  } else {
    likesEl.textContent = currentLikes - 1;
  }
}

function highlightIcon(iconEl, isLiked) {
  if (isLiked) {
    iconEl.src = 'images/icon-heart-active.png';
  } else {
    iconEl.src = 'images/icon-heart.png';
  }
}

function handleLike(e) {
  const isIcon = e.target.classList.contains('post-icon');
  if (!isIcon) return;

  const iconEl = e.target;
  const postEl = iconEl.closest('.post');
  const likesEl = postEl.querySelector('.likes-count');
  const isLiked = postEl.classList.toggle('liked');

  highlightIcon(iconEl, isLiked);
  updateLikesCount(likesEl, isLiked);
}

renderPosts();
postContainer.addEventListener('click', handleLike);
