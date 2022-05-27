import type { NextPage } from "next";
import { Layout } from "@/components/layout";
import { Hero } from "@/components/Hero/hero";
import { Services } from "@/components/Services/services";
import { Particle } from "@/components/particle";
import { Features } from "@/components/features/features";

const Home: NextPage = () => (
  <Layout>
    <Particle />
    <Hero />
    <Services />
    <Features />
  </Layout>
);

export default Home;
