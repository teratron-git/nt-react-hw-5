/**
 * ССЫЛКИ НА ДРУГИЕ ПРИЛОЖЕНИЯ
 */

const Links = ({ arrayOfLinks = [], children }: any) => {
  return <span>{children(arrayOfLinks)}</span>
}

export default Links
