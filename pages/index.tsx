import type { NextPage } from "next";
import { Layout } from "@/components/layout";
import { Hero } from "@/components/hero/hero";
import { Services } from "@/components/services/services";
import { Particle } from "@/components/particle";
import { Features } from "@/components/features/features";
import { Clients } from "@/components/clients/clients";

const Home: NextPage = () => (
  <Layout>
    <Particle />
    <Hero />
    <Services />
    <Features />
    <Clients />
  </Layout>
);

export default Home;
