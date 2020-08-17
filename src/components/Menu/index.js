import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Contact from './components/Contact'
import * as Style from './styles';

import getThemeColor from "../../utils/getThemeColor"

const Menu = () => {

    const { imageIcon } = useStaticQuery(
        graphql`
            query {
                imageIcon: file(relativePath: { eq: "gatsby-icon.png"}) {
                    childImageSharp {
                        fluid(maxWidth: 60) {
                            ...GatsbyImageSharpFluid_tracedSVG
                        }
                    }
                }
            }
        `
    )

    return (
        <Style.Menu>
            <AniLink to="/"
                cover
                direction="right"
                bg={getThemeColor()}
                duration={0.6}
                title="Voltar para Home">
                <Style.Icon fluid={imageIcon.childImageSharp.fluid} />
            </AniLink>
            <Contact />
        </Style.Menu>
    );
}

export default Menu;