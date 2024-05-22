// App.js
import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';
import { blogData } from '../data/blog'; // Assuming data is exported as 'blogData'

const App = () => {
  return (
    <div>
      <Header name="My Blog" />
      <About image="url_to_image" about="About My Blog..." />
      <ArticleList posts={blogData.posts} />
    </div>
  );
};

export default App;
