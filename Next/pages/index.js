import Link from 'next/link'
import Layout from '../components/Layout'
import {Component} from 'react'
// import

export default () => (
    <Layout title={'Index'}>
        <div className='container'>
            <div className='nav'>money</div>
        </div>

        <style jsx>
            {`
                .container{
                    width:100%;
                    height:auto;
                }
                .nav{
                    width:100%;
                    height:90px;
                    background-color:rgba(0,0,0,0.7);
                    position:fixed;
                    top:0;
                    left:0;
                    text-align:center;
                    line-height:90px;
                    color:#fff;
                }
               
            `}
        </style>
    </Layout>
)