import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import MainBlock from 'components/mainBlock';
import Instruction from 'components/instruction';
import AppFeatures from 'components/appFeatures';
import Versions from 'components/versions';

const Index = () => (
    <Layout>
        <MainBlock />
        <Instruction />
        <AppFeatures />
        <Versions />
    </Layout>
);

Index.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Index;
