var posts=["posts/3357.html","posts/2700.html","posts/3290.html","posts/b26f.html","posts/df2a.html","posts/337a.html","posts/e981.html","posts/ab5b.html","posts/ba7e.html","posts/fb4c.html","posts/94a6.html","posts/eb01.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };