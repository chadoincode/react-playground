import { Link } from "react-router"

type CardProps = {
  title: string
  description: string
  to: string
}

const MenuCard = ({title, description, to}: CardProps) => {
  return(
    <Link to={to}>
      <div className="flex bg-light p-5 rounded-2xl cursor-pointer hover:bg-light/80 transition-all duration-300 ease-in-out flex-col gap-3 items-center justify-center">
        <h2 className="font-bold">{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  )
}

export default MenuCard