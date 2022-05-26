import type { NextPage } from "next";
import { Layout } from "@/components/layout";
import { Hero } from "@/components/Hero/hero";

const Home: NextPage = () => (
  <Layout>
    <Hero />
  </Layout>
);

export default Home;
