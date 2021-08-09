import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { mediaQueries } from "../utils/MediaQuerie";
import { motion, AnimatePresence } from "framer-motion";
const SiteRoot = styled.div`
  margin: 120px 0px 0px 0px;
  overflow: hidden;
  ${mediaQueries.lessThan("tablet")`
margin: 120px 0;

`}
`;

const Layout = ({ children, location }) => {

  return (
    <SiteRoot id="top">
      <Helmet
        htmlAttributes={{
          lang: "de",
        }}
      >
        <link rel="preconnect" href="https://datocms-assets.com" />
      </Helmet>
      <Navigation location={location} />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          transition={{
            mass: 0.35,
            stiffness: 75,
            duration: 0.8,
          }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </SiteRoot>
  );
};

export default Layout;
