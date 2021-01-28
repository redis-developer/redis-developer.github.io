import React from 'react';

import useBaseUrl from '@docusaurus/useBaseUrl';

import SvgRectangles from '@site/src/svg/Rectangles';
import SvgJava from '@site/src/svg/Java';
import SvgPython from '@site/src/svg/Python';
import SvgNode from '@site/src/svg/Node';
import SvgCSharp from '@site/src/svg/CSharp';
import SvgGo from '@site/src/svg/Go';

function Languages() {
  return <section className="rds-languages" id="languages">
    <SvgRectangles className="shape" />
    
    <div className="container">

      <h2 className="section-title">Resources by Languages</h2>
      <h3 className="section-description">Find documentation, sample code ad tools to develop with your favorite language.</h3>

      <ul className="languages-list">
        <li>
          <a href={useBaseUrl('/develop/java')}>
            <SvgJava />
            <span className="btn">Java</span>
          </a>
        </li>

        <li>
        <a href={useBaseUrl('/develop/python')}>
            <SvgPython />
            <span className="btn">Python</span>
          </a>
        </li>

        <li>
        <a href={useBaseUrl('/develop/node')}>
            <SvgNode />
            <span className="btn">Node.js</span>
          </a>
        </li>

        {/* <li>
          <a href="#">
            <SvgCSharp />
            <span className="btn">C#/.Net</span>
          </a>
        </li> */}

        <li>
        <a href={useBaseUrl('/develop/golang')}>
            <SvgGo />
            <span className="btn">Golang</span>
          </a>
        </li>
      </ul>

    </div>
  </section>;
}
 
export default Languages;
