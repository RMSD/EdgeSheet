/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

// import Header from "./header"
import "./css/skeleton.css"
import "./css/normalize.css"
import NameplateStateWrapper from "./contexts/nameplate-context";
import CharacteristicStateWrapper from "./contexts/characteristic-context";
import SkillStateWrapper from "./contexts/skills-context";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
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
            © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
