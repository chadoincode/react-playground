import MenuCard from "../components/Card";
import { playgroundList } from "../data/playgrounds";

const HomePage = () => {
  return(
    <div>
      <div>
        {playgroundList.map((playground) => {
          return(
            <MenuCard
              title={playground.title}
              description={playground.description || ""}
              to={playground.to}
            />
          )
        })}
      </div>
    </div>
  )
}

export default HomePage