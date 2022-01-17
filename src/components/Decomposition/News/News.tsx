/**
 * ССЫЛКИ НА НОВОСТИ
 */

const News = ({ arrayOfNews = [], children }: any) => {
  return <span>{children(arrayOfNews)}</span>
}

export default News
