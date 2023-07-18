import React, { useEffect, useState } from 'react';
import './ClickedCarousel.css';
import img1 from './choose-us-image-01.png';
import img2 from './choose-us-image-02.png';
import img3 from './choose-us-image-03.png';

export default function MyClickedComponentDemo() {
    const [activeTab, setActiveTab] = useState('tabs-1');

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
                setActiveTab(target.substr(1));
            });
        });

        // Hide all articles except for the active tab
        articles.forEach(article => {
            const articleId = article.getAttribute("id");
            if (articleId !== activeTab) {
                article.style.display = "none";
            }
        });
    }, [activeTab]);


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
                                    className={`ui-state-default ui-corner-top ${activeTab === 'tabs-1' ? 'ui-tabs-active ui-state-active' : ''}`}
                                    role="tab"
                                    tabIndex="0"
                                    aria-controls="tabs-1"
                                    aria-labelledby="ui-id-1"
                                    aria-selected={activeTab === 'tabs-1' ? 'true' : 'false'}
                                    aria-expanded={activeTab === 'tabs-1' ? 'true' : 'false'}
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
                                    className={`ui-state-default ui-corner-top ${activeTab === 'tabs-2' ? 'ui-tabs-active ui-state-active' : ''}`}
                                    role="tab"
                                    tabIndex="-1"
                                    aria-controls="tabs-2"
                                    aria-labelledby="ui-id-2"
                                    aria-selected={activeTab === 'tabs-2' ? 'true' : 'false'}
                                    aria-expanded={activeTab === 'tabs-2' ? 'true' : 'false'}
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
                                    className={`ui-state-default ui-corner-top ${activeTab === 'tabs-3' ? 'ui-tabs-active ui-state-active' : ''}`}
                                    role="tab"
                                    tabIndex="-1"
                                    aria-controls="tabs-3"
                                    aria-labelledby="ui-id-3"
                                    aria-selected={activeTab === 'tabs-3' ? 'true' : 'false'}
                                    aria-expanded={activeTab === 'tabs-3' ? 'true' : 'false'}
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
                                    className={`ui-tabs-panel ui-widget-content ui-corner-bottom ${activeTab === 'tabs-1' ? 'ui-tabs-active ui-state-active' : ''}`}
                                    role="tabpanel"
                                    aria-labelledby="ui-id-1"
                                    aria-hidden={activeTab === 'tabs-1' ? 'false' : 'true'}
                                >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src={img1} alt="Best Education" className="img-responsive" />
                                        </div>
                                        <div className="col-md-6">
                                            <h3>Best Education</h3>
                                            <p>Content for Best Education tab goes here...
                                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non suscipit blanditiis, ipsa cum corrupti fuga atque eum nisi iste ducimus nemo provident aperiam voluptatibus incidunt nesciunt exercitationem eveniet porro voluptate.

                                            </p>
                                        </div>
                                    </div>
                                </article>
                                <article
                                    id="tabs-2"
                                    className={`ui-tabs-panel ui-widget-content ui-corner-bottom ${activeTab === 'tabs-2' ? 'ui-tabs-active ui-state-active' : ''}`}
                                    role="tabpanel"
                                    aria-labelledby="ui-id-2"
                                    aria-hidden={activeTab === 'tabs-2' ? 'false' : 'true'}
                                >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src={img2} alt="Top Management" className="img-responsive" />
                                        </div>
                                        <div className="col-md-6">
                                            <h3>Top Management</h3>
                                            <p>Content for Top Management tab goes Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ullam harum quis culpa eius eligendi, a mollitia natus quos sint reiciendis accusantium odio? Placeat, cumque suscipit. Similique nihil maxime maiores?</p>
                                        </div>
                                    </div>
                                </article>
                                <article
                                    id="tabs-3"
                                    className={`ui-tabs-panel ui-widget-content ui-corner-bottom ${activeTab === 'tabs-3' ? 'ui-tabs-active ui-state-active' : ''}`}
                                    role="tabpanel"
                                    aria-labelledby="ui-id-3"
                                    aria-hidden={activeTab === 'tabs-3' ? 'false' : 'true'}
                                >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src={img3} alt="Quality Meeting" className="img-responsive" />
                                        </div>
                                        <div className="col-md-6">
                                            <h3>Quality Meeting</h3>
                                            <p>Content for Quality Meeting tab goes here... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus vero assumenda quaerat, tempore quisquam voluptatum commodi, iste, nulla officia eveniet provident ipsum! Aut, sit officia quae ut hic alias pariatur.</p>
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


// import React, { useEffect, useState } from 'react';
// import './ClickedCarousel.css';
// import img1 from './choose-us-image-01.png';
// import img2 from './choose-us-image-02.png';
// import img3 from './choose-us-image-03.png';

// export default function MyClickedComponentDemo() {
//   const [activeTab, setActiveTab] = useState('tabs-1');

//   useEffect(() => {
//     const tabs = document.querySelectorAll("#tabs ul li a");
//     const articles = document.querySelectorAll(".tabs-content article");

//     tabs.forEach(tab => {
//       tab.addEventListener("click", event => {
//         event.preventDefault();
//         const target = event.target.getAttribute("href");

//         articles.forEach(article => {
//           article.style.display = "none";
//         });

//         document.querySelector(target).style.display = "block";

//         setActiveTab(target); // Set the active tab
//       });
//     });
//   }, []);

//   return (
//     <section className="section why-us" data-section="section2">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
//             <div id="tabs" className="ui-tabs ui-widget ui-widget-content ui-corner-all">
//               <ul
//                 className="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
//                 role="tablist"
//               >
//                 <li
//                   className={`ui-state-default ui-corner-top ${activeTab === 'tabs-1' ? 'ui-tabs-active ui-state-active' : ''}`}
//                   role="tab"
//                   tabIndex="0"
//                   aria-controls="tabs-1"
//                   aria-labelledby="ui-id-1"
//                   aria-selected={activeTab === 'tabs-1' ? 'true' : 'false'}
//                   aria-expanded={activeTab === 'tabs-1' ? 'true' : 'false'}
//                 >
//                   <a
//                     href="#tabs-1"
//                     className="ui-tabs-anchor"
//                     role="presentation"
//                     tabIndex="-1"
//                     id="ui-id-1"
//                   >
//                     Best Education
//                   </a>
//                 </li>
//                 <li
//                   className={`ui-state-default ui-corner-top ${activeTab === 'tabs-2' ? 'ui-tabs-active' : ''}`}
//                   role="tab"
//                   tabIndex="-1"
//                   aria-controls="tabs-2"
//                   aria-labelledby="ui-id-2"
//                   aria-selected={activeTab === 'tabs-2' ? 'true' : 'false'}
//                   aria-expanded={activeTab === 'tabs-2' ? 'true' : 'false'}
//                 >
//                   <a
//                     href="#tabs-2"
//                     className="ui-tabs-anchor"
//                     role="presentation"
//                     tabIndex="-1"
//                     id="ui-id-2"
//                   >
//                     Top Management
//                   </a>
//                 </li>
//                 <li
//                   className={`ui-state-default ui-corner-top ${activeTab === 'tabs-3' ? 'ui-tabs-active' : ''}`}
//                   role="tab"
//                   tabIndex="-1"
//                   aria-controls="tabs-3"
//                   aria-labelledby="ui-id-3"
//                   aria-selected={activeTab === 'tabs-3' ? 'true' : 'false'}
//                   aria-expanded={activeTab === 'tabs-3' ? 'true' : 'false'}
//                 >
//                   <a
//                     href="#tabs-3"
//                     className="ui-tabs-anchor"
//                     role="presentation"
//                     tabIndex="-1"
//                     id="ui-id-3"
//                   >
//                     Quality Meeting
//                   </a>
//                 </li>
//               </ul>
//               <section className="tabs-content">
//                 <article
//                   id="tabs-1"
//                   className={`ui-tabs-panel ui-widget-content ui-corner-bottom ${activeTab === 'tabs-1' ? 'active' : ''}`}
//                   role="tabpanel"
//                   aria-labelledby="ui-id-1"
//                   aria-hidden={activeTab === 'tabs-1' ? 'false' : 'true'}
//                 >
//                   <div className="row">
//                     <div className="col-md-8">
//                       <img src={img1} alt="Best Education" />
//                     </div>
//                     <div className="col-md-4">
//                       <h3>Best Education</h3>
//                       <p>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus nulla ac bibendum
//                         consectetur. Mauris in pharetra eros. Cras efficitur magna at augue luctus, at bibendum orci
//                         ultrices. Vestibulum tincidunt lacinia arcu non iaculis.
//                       </p>
//                     </div>
//                   </div>
//                 </article>
//                 <article
//                   id="tabs-2"
//                   className={`ui-tabs-panel ui-widget-content ui-corner-bottom ${activeTab === 'tabs-2' ? 'active' : ''}`}
//                   role="tabpanel"
//                   aria-labelledby="ui-id-2"
//                   aria-hidden={activeTab === 'tabs-2' ? 'false' : 'true'}
//                 >
//                   <div className="row">
//                     <div className="col-md-8">
//                       <img src={img2} alt="Top Management" />
//                     </div>
//                     <div className="col-md-4">
//                       <h3>Top Management</h3>
//                       <p>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus nulla ac bibendum
//                         consectetur. Mauris in pharetra eros. Cras efficitur magna at augue luctus, at bibendum orci
//                         ultrices. Vestibulum tincidunt lacinia arcu non iaculis.
//                       </p>
//                     </div>
//                   </div>
//                 </article>
//                 <article
//                   id="tabs-3"
//                   className={`ui-tabs-panel ui-widget-content ui-corner-bottom ${activeTab === 'tabs-3' ? 'active' : ''}`}
//                   role="tabpanel"
//                   aria-labelledby="ui-id-3"
//                   aria-hidden={activeTab === 'tabs-3' ? 'false' : 'true'}
//                 >
//                   <div className="row">
//                     <div className="col-md-8">
//                       <img src={img3} alt="Quality Meeting" />
//                     </div>
//                     <div className="col-md-4">
//                       <h3>Quality Meeting</h3>
//                       <p>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus nulla ac bibendum
//                         consectetur. Mauris in pharetra eros. Cras efficitur magna at augue luctus, at bibendum orci
//                         ultrices. Vestibulum tincidunt lacinia arcu non iaculis.
//                       </p>
//                     </div>
//                   </div>
//                 </article>
//               </section>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
