import React from 'react'
import styled from 'styled-components'
import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

// init fontAwesome
library.add(fas, far)

const AppContainer = styled.section.attrs({})`
  width: 100%;
  max-width: 800px;
  margin: 20px auto 80px;
  background: #fff;
  box-shadow: 0 20px 50px 0 rgba(34,43,55,.1);
  padding: 20px 40px;
  border-radius: 5px;
  font-family: Helvetica Neue,Helvetica,Arial,sans-serif; 
`;

const Page = props => (
  <AppContainer>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Full Stack App</title>
      <link rel="shortcut icon" href="http://www.tracysu.com/wp-content/uploads/2015/01/faviconapple.png" />
      <style jsx global>{`
                body { 
                    margin:0;
                    background-color:#f2f2f2;
                }
      `}</style>
    </Head>
    {props.children}
  </AppContainer>
)

export default Page