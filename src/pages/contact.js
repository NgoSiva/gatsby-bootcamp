import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <div>
            <Layout>
                <Head title="Contact" />
                <h1>Contact</h1>
                <p>The best way to reach me is via <a href="https://twitter.com/siva_ngo" rel="noopener noreferrer" target="_blank">@siva_ngo</a> in Twitter</p>
            </Layout>
        </div>
    )
}

export default ContactPage