import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from '../Head/index';
import Header from '../Header/index';
import GlobalStyle from 'global.css.js';
import Footer from 'components/footer';

const Layout = ({ data, children }) => {
    
    return (
        <div>
            <GlobalStyle />
            <Head />
            <Header title={data.site.siteMetadata.siteTitle} />
            {children}
            <Footer />
        </div>
    );
}

if (typeof window !== 'undefined') {
    require('smooth-scroll')('a[href*="#"]');
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    data: PropTypes.object.isRequired,
};

const LayoutWithQuery = props => (
    <StaticQuery
        query={graphql`
            query LayoutQuery {
                site {
                    siteMetadata {
                        siteTitle
                    }
                }
            }
        `}
        render={data => <Layout data={data} {...props} />}
    />
);

LayoutWithQuery.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
