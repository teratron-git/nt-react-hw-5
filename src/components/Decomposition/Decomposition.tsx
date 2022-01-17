import Currency from "./Currency"
import Input from "./Input"
import Links from "./Links"
import LinkItem from "./Links/LinkItem"
import News from "./News"
import NewsItem from "./News/NewsItem"
import Weather from "./Weather"

const arrayOfNews = [
  { icon: "newsIcon1", title: "newsTitle1", link: "newsLink1" },
  { icon: "newsIcon2", title: "newsTitle2", link: "newsLink2" },
]
const arrayOfLinks = [" link1 ", " link2 ", " link3 ", " link4 ", " link5 "]

const Decomposition = () => {
  return (
    <div className="container" style={{ flexDirection: "column" }}>
      <News arrayOfNews={arrayOfNews}>
        {(items: any) =>
          items.map((item: any) => (
            <>
              <NewsItem key={item.title}>{item}</NewsItem>
              <br />
            </>
          ))
        }
      </News>
      <br />

      <Currency eur="EUR" usd="USD" oil="OIL" />
      <br />
      <br />

      <Links arrayOfLinks={arrayOfLinks}>
        {(items: any) => items.map((item: any) => <LinkItem key={item}>{item}</LinkItem>)}
      </Links>
      <br />
      <br />

      <Input icon="yandexIcon" />
      <br />
      <br />

      <Weather city="Moskow" />
    </div>
  )
}

export default Decomposition
