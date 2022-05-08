import Main from "./templates/Main";
import UserMenu from "./web-parts/UserMenu";

function Home() {
  return (
    <Main title="Home page">
      <div>salam</div>
      <UserMenu />
    </Main>
  );
}

export default Home;
