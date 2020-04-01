/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import { graphql } from 'gatsby';
import MainBlock from 'components/mainBlock';
import Instruction from 'components/instruction';
import AppFeatures from 'components/appFeatures';
import Versions from 'components/versions';
import Footer from 'components/footer';

const Index = ({ data }) => (
    <Layout>
        <MainBlock data={data.stack} />
        <Instruction />
        <AppFeatures />
        <Versions />
        <Footer />
    </Layout>
);

Index.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
    query {
        stack: file(relativePath: { eq: "images/phone.png" }) {
            childImageSharp {
                fluid(maxHeight: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;
