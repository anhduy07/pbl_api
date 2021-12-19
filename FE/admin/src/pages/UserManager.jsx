import React from 'react';
import Table_User from '../components/common/Table_User';
import Layout from '../layout';

const Dashboard = () => {
    return (
        <Layout title="Users Manager">
            <Table_User />
        </Layout>
    );
};

export default Dashboard;