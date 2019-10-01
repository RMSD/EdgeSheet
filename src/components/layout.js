/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import 'bulma/css/bulma.css'
import Header from "./header"
import NameplateStateWrapper from "./contexts/nameplate-context";
import CharacteristicStateWrapper from "./contexts/characteristic-context";
import SkillStateWrapper from "./contexts/skills-context";

const Layout = ({ children }) => (
  <>
    <Header siteTitle="ALPHA VERSION" />
    <NameplateStateWrapper>
      <CharacteristicStateWrapper>
        <SkillStateWrapper>
          <main>{children}</main>
        </SkillStateWrapper>
      </CharacteristicStateWrapper>
    </NameplateStateWrapper>
    <br />
    <div className="container">
      <footer>
        © {new Date().getFullYear()}. Questions? Find me <a href="https://twitter.com/Living_Target">@Living_Target</a>. Issue, requests, contibutions are tracked at <a href="https://github.com/RMSD/EdgeSheet">Github</a>. Built with <a href="https://www.gatsbyjs.org">Gatsby</a>.
      </footer>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
