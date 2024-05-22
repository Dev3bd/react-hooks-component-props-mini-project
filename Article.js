// Article.js
import React from 'react';

const Article = ({ title, date, preview, minutes }) => {
  const formattedDate = date || "January 1, 1970";
  const emojis = minutes <= 30 ? '☕️'.repeat(Math.ceil(minutes / 5)) : '🍱'.repeat(Math.ceil(minutes / 10));

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
      <span>{emojis} {minutes} min read</span>
    </article>
  );
};

export default Article;
