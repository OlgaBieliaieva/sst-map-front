import InputArchive from "./components/InputArchive/InputArchive";
import Info from "./components/Info/Info";
import style from "./App.module.css";

const App: React.FC = () => {
  return (
    <section className={style.mainSection}>
      <div className={style.sectionContainer}>
        <h1 className={style.title}>
          Welcome to Sea Surface Temperature{" "}
          <span className={style.logo}>DataHub</span>
        </h1>
        <InputArchive />
        <Info />
      </div>
    </section>
  );
};

export default App;
