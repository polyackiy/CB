import Layout from "../components/Layout";
import { Button } from "semantic-ui-react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  return (
    <Layout>
      <h1>
        На этом сайте можно оставить свои контакты или посмотреть другие по
        адресу
      </h1>
      <Button.Group>
        <Button onClick={() => router.push("/showContact")}>Посмотреть</Button>
        <Button onClick={() => router.push("/addContact")}>Добавить</Button>
      </Button.Group>
    </Layout>
  );
};

export default Index;
