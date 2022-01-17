/**
 * ПОИСК
 */

const Input = ({ icon }: { icon?: string }) => {
  return (
    <span>
      {icon}
      <input type="text" />
    </span>
  )
}

export default Input
