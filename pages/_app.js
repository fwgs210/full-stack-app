import App, { Container } from 'next/app';
import Page from '../src/views/Page'
import { Provider } from 'react-redux';
import { store } from '../src/models/Store'


class MyApp extends App {

    render() {

        const { Component, router } = this.props
        return (
            <Container>
                <Provider store={store}>
                    <Page>
                        <Component { ...router } />
                    </Page>
                </Provider>
            </Container>
        );
    }
}

export default MyApp;