import React from 'react';
import Table_Product from '../components/common/Table_Product';
import Layout from '../layout';

const Dashboard = () => {
    return (
        <Layout title="Products Manager">
            <Table_Product />
        </Layout>
    );
};

export default Dashboard;