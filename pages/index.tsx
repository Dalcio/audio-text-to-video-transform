import React from 'react';

import { Header, Main, Wrapper } from '@components';
import GlobalStyle from '@styles/globalStyles';

const Home: React.FC = () => {
    return (
        <Wrapper>
            <GlobalStyle />
            <Header />
            <Main />
        </Wrapper>
    );
};
export default Home;
