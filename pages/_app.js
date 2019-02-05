import App, { Container } from 'next/app';
import styled from 'styled-components'
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '../src/Store'


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

class MyApp extends App {

    render() {

        const { Component } = this.props
        return (
            <Container>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta charSet="utf-8" />
                    <title>Full Stack App</title>
                    <link rel="shortcut icon" href="http://www.tracysu.com/wp-content/uploads/2015/01/faviconapple.png" />
                </Head>
                <style jsx global>{`
                body { 
                    margin:0;
                    background-color:#f2f2f2;
                }
                `}</style>
                <AppContainer>
                    <Provider store={store}>
                        <Component />
                    </Provider>
                </AppContainer>

            </Container>
        );
    }
}

export default MyApp;