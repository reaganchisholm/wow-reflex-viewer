import React from 'react';

import { SectionText } from './../components/SectionText';

import { ReactComponent as Clock } from './../icons/clock.svg';

export const GameLength = () => {
    // https://nivo.rocks/funnel/
    return (
        <SectionText>
            <SectionText.Icon>
                <Clock />
            </SectionText.Icon>
            <SectionText.Heading>
                Game Length
            </SectionText.Heading>
            <SectionText.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </SectionText.Body>
        </SectionText>
    );
}