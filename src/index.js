import React from 'react';
import {render} from 'react-dom';
import {PortalTipContainer} from "./Component/PortalTipContainer";
import {PortalTipContent} from "./Component/PortalTipContent";

const App = () => (
    <main>
        <PortalTipContainer>
            <PortalTipContent>Just simple text in tooltip.</PortalTipContent>

            <div className="demo-box">1</div>
        </PortalTipContainer>

        <PortalTipContainer>
            <PortalTipContent>Just simple text in tooltip.</PortalTipContent>

            <div className="demo-box">1</div>
        </PortalTipContainer>

        <PortalTipContainer>
            <PortalTipContent>Just simple text in tooltip.</PortalTipContent>
            <div className="demo-box">1</div>
        </PortalTipContainer>
    </main>
);

render(<App />, document.getElementById('app'));


