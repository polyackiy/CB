import { Button, Menu } from "semantic-ui-react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [currentAccount, setCurrentAccount] = useState();

  const handleLoginClick = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      alert("Не найден WEB3 кошелек (например Metamask)");
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Menu style={{ marginTop: "20px" }}>
      <Link href="/">
        <Menu.Item name="main">Главная</Menu.Item>
      </Link>
      <Link href="/addContact">
        <Menu.Item name="save">Записать контакт</Menu.Item>
      </Link>
      <Link href="/showContact">
        <Menu.Item name="openContact">Посмотреть контакт</Menu.Item>
      </Link>
      <Menu.Item position="right">
        {!currentAccount ? (
          <Button primary onClick={handleLoginClick}>
            Вход
          </Button>
        ) : (
          <Link href="/user">
            <Button primary onClick={handleLoginClick}>
              {currentAccount}
            </Button>
          </Link>
        )}
      </Menu.Item>
    </Menu>
  );
};

export default Header;
