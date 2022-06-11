import Layout from "../components/Layout";
import {Button, Form, Message} from "semantic-ui-react";
import {useRef, useState} from "react";
import getContactByAddress from "../utils/getContactByAddress";

const showContact = () => {
    const [telegram, setTelegram] = useState("");
    const [discord, setDiscord] = useState("");
    const [desc, setDesc] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const addressRef = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const address = addressRef.current.value;
        console.log("address: ", address);
        setErrorMessage("");
        setTelegram("");
        setDiscord("");
        setDesc("");
        setIsLoading(true);
        if (!address) {
            setErrorMessage("Чтобы просмотреть контакт, надо ввести его адрес")
            return;
        }

        try {
            const contact = await getContactByAddress(address);
            setTelegram(contact.telegram);
            setDiscord(contact.discord);
            setDesc(contact.desc);
        } catch (error) {
            console.error(error);
            setErrorMessage(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return (<Layout>
        <Form warning={!!errorMessage} onSubmit={handleSubmit}>
            <Form.Field>
                <label>Введите адрес</label>
                <input ref={addressRef} placeholder='адрес'/>
            </Form.Field>
            <Button loading={isLoading} primary type='submit'>Посмотреть контакт</Button>
            <Message
                warning
                header='Что-то пошло не так'
                content={errorMessage}
            />
        </Form>
        {telegram && <h2>Telegram: {telegram}</h2>}
        {discord && <h2>Discord: {discord}</h2>}
        {desc && <h2>Description: {desc}</h2>}
    </Layout>);
};

export default showContact;
