import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { showMenuState } from "../../components/Menu";
import S from './styles.module.css'
import { useRecoilState } from "recoil";

const Header = () => {
  let [showMenu, setShowMenu] = useRecoilState(showMenuState);

	return (
    <div clasName={S.header}>

      <FontAwesomeIcon
        className={S.icon}
        icon={faBars}
        onClick={() => setShowMenu(true)}
      />

      <img className={S.avatar} src="avatar.jpg" />

    </div>
  );
}

export default Header;