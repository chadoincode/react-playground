import MenuCard from "../components/Card";
import Header from "../components/Header";
import { playgroundList } from "../data/playgrounds";

const HomePage = () => {
  return(
    <div>
      <Header title="React Playground" />
      <div className="flex flex-col gap-5">
        {playgroundList.map((playground) => {
          return(
            <MenuCard
              key={playground.id}
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