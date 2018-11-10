import React from 'react';
import {render} from 'react-dom';
import {PortalTipContainer} from "./Component/PortalTipContainer";
import {PortalTipContent} from "./Component/PortalTipContent";

const App = () => (    
    <main>
        <section>
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
        </section>

        <section>
            <PortalTipContainer>
                <PortalTipContent position="right">Just simple text in tooltip.</PortalTipContent>

                <div className="demo-box">1</div>
            </PortalTipContainer>

            <PortalTipContainer>
                <PortalTipContent>Just simple text in tooltip.</PortalTipContent>

                <div className="demo-box">1</div>
            </PortalTipContainer>

            <PortalTipContainer>
                <PortalTipContent position="left">Just simple text in tooltip.</PortalTipContent>
                <div className="demo-box">1</div>
            </PortalTipContainer>
        </section>

    </main>    
);

render(<App />, document.getElementById('app'));


