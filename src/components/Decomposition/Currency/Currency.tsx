interface IProps {
  eur: string
  usd: string
  oil: string
}

/**
 * КУРСЫ ВАЛЮТ
 */

const Currency = ({ eur, usd, oil }: IProps) => {
  return <span>{`${eur} -  ${usd} - ${oil}`}</span>
}

export default Currency
