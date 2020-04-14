import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
    return (
        <Layout>
            <Head title="Blog" />
            <h1>Page not found</h1>
            <p><Link to="/">Haed home</Link></p>
        </Layout>
    )
}

export default NotFound