/**
 * ОДНА ССЫЛКА НА НОВОСТЬ
 */

const NewsItem = ({ children }: any) => {
  return <span>{`${children.icon} ${children.title} ${children.link}`}</span>
}

export default NewsItem
