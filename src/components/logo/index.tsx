import React from 'react';
import Image from 'next/image';
import { HeaderContainer, HeaderText } from './styled';

export const Logo: React.FC = () => {
    return (
        <HeaderContainer>
            <Image
                src="/icons/logo.svg"
                alt="speech to video transform"
                width="70"
                height="30"
            />
            <HeaderText>Speech to Video</HeaderText>
        </HeaderContainer>
    );
};
