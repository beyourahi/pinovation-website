import type { NextPage } from "next";
import { Layout } from "@/components/layout";
import { Hero } from "@/components/Hero/hero";
import { Services } from "@/components/Services/services";
import { About } from "@/components/About/about";
import { Particle } from "@/components/particle";

const Home: NextPage = () => (
  <Layout>
    <Particle />
    <Hero />
    <Services />
    <About />
  </Layout>
);

export default Home;
