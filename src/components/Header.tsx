type HeaderProps = {
  title: string
}

const Header = ({title}: HeaderProps) => {
  return (
    <div className="mt-10 flex justify-center items-center mb-10">
      <h1 className="md:text-3xl font-bold text-lg text-light">{title}</h1>
    </div>
  )
}

export default Header