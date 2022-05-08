import userMenuBox from "./userMenuBox.svg";
import "./UserMenu.scss";

function UserMenu() {
  return (
    <div className="UserMenu">
      <img src={userMenuBox} alt="background" />
      <div>content</div>
    </div>
  );
}

export default UserMenu;
