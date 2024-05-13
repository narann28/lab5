import React, { useState } from 'react';
import ArticleCard from './ArticleCard';
import Pagination from './Pagination';

const Articles = ({ articles }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(6);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          {currentArticles
            .filter((_, index) => index % 2 === 0)
            .map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
        </div>
        <div className="col-md-6">
          {currentArticles
            .filter((_, index) => index % 2 !== 0)
            .map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
        </div>
      </div>
      <Pagination
        articlesPerPage={articlesPerPage}
        totalArticles={articles.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Articles;