import { FC } from "react";
import styles from "./Home.module.scss";
import Layout from "@/components/Layout/Layout";


const Home: FC = () => {
    return (
        <Layout>
            {/* Применяем стили из загруженного шрифта */}
            <h1>Hello my first NEXT.JS</h1>
        </Layout>
    );
};

export default Home;
