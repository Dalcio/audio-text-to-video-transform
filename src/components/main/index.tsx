import { UploadAudio, VideoPlayer } from '@components';
import { ImagesFound } from '@components/images';
import React from 'react';

import { Col, MainWrapper } from './styled';

export const Main: React.FC = () => {
    return (
        <MainWrapper>
            <UploadAudio />
            <Col>
                <ImagesFound />
                <VideoPlayer />
            </Col>
        </MainWrapper>
    );
};
