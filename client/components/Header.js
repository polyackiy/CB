import {Menu} from "semantic-ui-react";
import Link from "next/link";

const Header = () => {
    return (
        <Menu style={{marginTop: "20px"}}>
            <Link href="/">
                <Menu.Item
                    name='main'
                >
                    Главная
                </Menu.Item>
            </Link>
            <Link href="/addContact">
                <Menu.Item
                    name='save'
                >
                    Записать контакт
                </Menu.Item>
            </Link>
            <Link href="/showContact">
                <Menu.Item
                    name='openContact'
                >
                    Посмотреть контакт
                </Menu.Item>
            </Link>
        </Menu>
    );
};

export default Header;
