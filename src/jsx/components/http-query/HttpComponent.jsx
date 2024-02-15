import { useState } from 'react';

import { TitleSection } from '../titlesection/TitleSection';
import { SearchForm } from './search-form/SearchForm';
import { ArticleList } from './articles-list/ArticlesList';

import { fetchArticles } from './api/fetch-articles';

import styles from './HttpComponent.module.css';
export const HttpComponent = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async topic => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticles(topic, 1);
      setArticles(data);
      console.log(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.section}>
      <TitleSection>Latest articles</TitleSection>
      <SearchForm onSearch={handleSearch}></SearchForm>
      {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticleList articles={articles} />}
    </div>
  );
};
