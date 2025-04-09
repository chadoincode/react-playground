type HeaderProps = {
  title: string
}

const Header = ({title}: HeaderProps) => {
  return (
    <div className="top-0 flex justify-center items-center bg-light h-20 rounded-lg mb-4">
      <h1 className="text-2xl font-bold text-dark">{title}</h1>
    </div>
  )
}

export default Header