import React from 'react';

import { Header, Main } from '@components';
import GlobalStyle from '@styles/globalStyles';

const Home: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <Main />
        </>
    );
};
export default Home;
