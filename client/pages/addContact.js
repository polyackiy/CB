import Layout from "../components/Layout";
import { Button, Form, Input, Message } from "semantic-ui-react";
import { useState } from "react";
import provider from "../provider";
import contactFactory from "../contactFactory";

const AddContact = () => {
  const [telegram, setTelegram] = useState("");
  const [discord, setDiscord] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    const signer = provider.getSigner();
    const contactFactoryWithSigner = contactFactory.connect(signer);
    try {
      let response = await contactFactoryWithSigner.createContact(
        telegram,
        discord
      );
      console.log("response: ", response);
      setSuccessMessage("Хэш транзакции: " + response.hash);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <Layout>
      <Form
        success={!!successMessage}
        warning={!!errorMessage}
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            label="Telegram"
            value={telegram}
            onChange={(event) => setTelegram(event.target.value)}
            placeholder="Введите Telegram"
          />
          <Form.Field
            control={Input}
            label="Discord"
            value={discord}
            onChange={(event) => setDiscord(event.target.value)}
            placeholder="Введите Discord"
          />
        </Form.Group>
        <Button primary type="submit">
          Сохранить
        </Button>
        <Message
          style={{ wordBreak: "break-word" }}
          warning
          header="Что-то пошло не так"
          content={errorMessage}
        />
        <Message success header="Успех" content={successMessage} />
      </Form>
    </Layout>
  );
};

export default AddContact;
