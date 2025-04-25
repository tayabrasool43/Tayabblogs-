import React from 'react';
import BlogCard from './components/BlogCard';
import blogs from './data/blogs';

function App() {
  return (
    <div className="app">
      <h1>Tayab Blogs Spot TT</h1>
      <div className="blog-container">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
}

export default App;
