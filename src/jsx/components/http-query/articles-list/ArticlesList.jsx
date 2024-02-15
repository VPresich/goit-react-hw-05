// import styles from './ArticlesList.module.css';

export const ArticleList = ({ articles }) => {
  return (
    <div>
      <h1>Latest articles</h1>
      {articles.length > 0 && (
        <ul>
          {articles.map(({ objectID, url, title }) => (
            <li key={objectID}>
              <a href={url} target="_blank" rel="noreferrer noopener">
                {title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
