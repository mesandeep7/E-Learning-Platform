import React, { useEffect } from 'react';
import './ClickedCarousel.css';
import img1 from './choose-us-image-01.png';
import img2 from './choose-us-image-02.png';
import img3 from './choose-us-image-03.png';

export default function MyClickedComponent() {
    useEffect(() => {
        const tabs = document.querySelectorAll("#tabs ul li a");
        const articles = document.querySelectorAll(".tabs-content article");

        tabs.forEach(tab => {
            tab.addEventListener("click", event => {
                event.preventDefault();
                const target = event.target.getAttribute("href");

                articles.forEach(article => {
                    article.style.display = "none";
                });

                document.querySelector(target).style.display = "block";
            });
        });
    }, []);

    return (
        
                <section className="section why-us" data-section="section2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="tabs" className="ui-tabs ui-widget ui-widget-content ui-corner-all">
                                    <ul
                                        className="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
                                        role="tablist"
                                    >
                                        <li
                                            className="ui-state-default ui-corner-top ui-tabs-active ui-state-active"
                                            role="tab"
                                            tabIndex="0"
                                            aria-controls="tabs-1"
                                            aria-labelledby="ui-id-1"
                                            aria-selected="true"
                                            aria-expanded="true"
                                        >
                                            <a
                                                href="#tabs-1"
                                                className="ui-tabs-anchor"
                                                role="presentation"
                                                tabIndex="-1"
                                                id="ui-id-1"
                                            >
                                                Best Education
                                            </a>
                                        </li>
                                        <li
                                            className="ui-state-default ui-corner-top"
                                            role="tab"
                                            tabIndex="-1"
                                            aria-controls="tabs-2"
                                            aria-labelledby="ui-id-2"
                                            aria-selected="false"
                                            aria-expanded="false"
                                        >
                                            <a
                                                href="#tabs-2"
                                                className="ui-tabs-anchor"
                                                role="presentation"
                                                tabIndex="-1"
                                                id="ui-id-2"
                                            >
                                                Top Management
                                            </a>
                                        </li>
                                        <li
                                            className="ui-state-default ui-corner-top"
                                            role="tab"
                                            tabIndex="-1"
                                            aria-controls="tabs-3"
                                            aria-labelledby="ui-id-3"
                                            aria-selected="false"
                                            aria-expanded="false"
                                        >
                                            <a
                                                href="#tabs-3"
                                                className="ui-tabs-anchor"
                                                role="presentation"
                                                tabIndex="-1"
                                                id="ui-id-3"
                                            >
                                                Quality Meeting
                                            </a>
                                        </li>
                                    </ul>
                                    <section className="tabs-content">
                                        <article
                                            id="tabs-1"
                                            aria-labelledby="ui-id-1"
                                            className="ui-tabs-panel ui-widget-content ui-corner-bottom"
                                            role="tabpanel"
                                            aria-hidden="false"
                                        >
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <img src={img1} alt="" />
                                                </div>
                                                <div className="col-md-6">
                                                    <h4>Best Education</h4>
                                                    <p>
                                                        Grad School is free educational HTML template with Bootstrap 4.5.2
                                                        CSS layout. Feel free to use it for educational or commercial purposes.
                                                        You may want to make{' '}
                                                        <a href="https://paypal.me/templatemo" target="_parent" rel="sponsored">
                                                            a little donation
                                                        </a>{' '}
                                                        to TemplateMo. Please tell your friends about us. Thank you.
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                        <article
                                            id="tabs-2"
                                            aria-labelledby="ui-id-2"
                                            className="ui-tabs-panel ui-widget-content ui-corner-bottom"
                                            role="tabpanel"
                                            aria-hidden="true"
                                            style={{ display: 'none' }}
                                        >
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <img src={img2} alt="" />
                                                </div>
                                                <div className="col-md-6">
                                                    <h4>Top Level</h4>
                                                    <p>
                                                        You can modify this HTML layout by editing contents and adding more
                                                        pages as you needed. Since this template has options to add dropdown
                                                        menus, you can put many HTML pages.
                                                    </p>
                                                    <p>
                                                        Suspendisse tincidunt, magna ut finibus rutrum, libero dolor euismod
                                                        odio, nec interdum quam felis non ante.
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                        <article
                                            id="tabs-3"
                                            aria-labelledby="ui-id-3"
                                            className="ui-tabs-panel ui-widget-content ui-corner-bottom"
                                            role="tabpanel"
                                            aria-hidden="true"
                                            style={{ display: 'none' }}
                                        >
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <img src={img3} alt="" />
                                                </div>
                                                <div className="col-md-6">
                                                    <h4>Quality Meeting</h4>
                                                    <p>
                                                        You are NOT allowed to redistribute this template ZIP file on any
                                                        template collection website. However, you can use this template to
                                                        convert into a specific theme for any kind of CMS platform such as
                                                        WordPress. For more information, you shall{' '}
                                                        <a rel="nofollow" href="https://templatemo.com/contact" target="_parent">
                                                            contactTemplateMo
                                                        </a>{' '}
                                                        now.
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            
    );
}
