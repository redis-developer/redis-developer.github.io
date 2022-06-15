import React from 'react';

import useBaseUrl from '@docusaurus/useBaseUrl';

import SvgRectangles from '@site/src/svg/Rectangles';
import SvgJava from '@site/src/svg/Java';
import SvgPython from '@site/src/svg/Python';
import SvgNode from '@site/src/svg/Node';
import SvgCSharp from '@site/src/svg/CSharp';
import SvgGo from '@site/src/svg/Go';
import SvgApple from '@site/src/svg/Apple';
import SvgCloudRun from '@site/src/svg/CloudRun';
import SvgPhp from '@site/src/svg/Php';
import SvgAzure from '@site/src/svg/Azure';
import SvgDocker from '@site/src/svg/Docker';
import SvgKubernetes from '@site/src/svg/Kubernetes';
import SvgNetlify from '@site/src/svg/Netlify';
import SvgVercel from '@site/src/svg/Vercel';
import SvgWindows from '@site/src/svg/Windows';
import SvgLinux from '@site/src/svg/Linux';
import SvgJenkins from '@site/src/svg/Jenkins';
import SvgAWS from '@site/src/svg/AWS';
import SvgGCP from '@site/src/svg/GCP';
import SvgDatadog from '@site/src/svg/Datadog';
import SvgGrafana from '@site/src/svg/Grafana';

function Languages() {
  return <section className="rds-languages" id="languages">
    <SvgRectangles className="shape" />

    <div className="container">

      <h2 className="section-title"></h2>
      <h3 className="section-description"></h3>

      <ul className="languages-list">
        <li>
          <a href={useBaseUrl('/develop/java/')}>
            <SvgJava />
            <span className="btn">Java</span>
          </a>
        </li>

        <li>
        <a href={useBaseUrl('/develop/python/')}>
            <SvgPython />
            <span className="btn">Python</span>
          </a>
        </li>

        <li>
        <a href={useBaseUrl('/develop/node/')}>
            <SvgNode />
            <span className="btn">Node.js</span>
          </a>
        </li>
        <li>
          <a href="/develop/dotnet">
            <SvgCSharp />
            <span className="btn">.NET</span>
          </a>
        </li>

        <li>
        <a href={useBaseUrl('/develop/golang/')}>
            <SvgGo />
            <span className="btn">Go</span>
          </a>
        </li>


        <li>
        <a href={useBaseUrl('/develop/php/')}>
            <SvgPhp />
            <span className="btn">Php</span>
          </a>
       </li>
     </ul>
   </div>

   <div className="container">
    <ul className="languages-list">
        <li>
        <a href={useBaseUrl('/create/aws/')}>
            <SvgAWS />
            <span className="btn">AWS</span>
          </a>
        </li>

      <li>
        <a href={useBaseUrl('/create/azure/')}>
            <SvgAzure />
            <span className="btn">Azure</span>
          </a>
       </li>

      <li>
        <a href={useBaseUrl('/create/gcp/')}>
            <SvgGCP />
            <span className="btn">GCP</span>
          </a>
       </li>

       <li>
        <a href={useBaseUrl('/create/docker/')}>
            <SvgDocker />
            <span className="btn">Docker</span>
          </a>
       </li>

       <li>
        <a href={useBaseUrl('/create/kubernetes/')}>
            <SvgKubernetes />
            <span className="btn">Kubernetes</span>
          </a>
       </li>


       <li>
        <a href={useBaseUrl('/create/from-source/')}>
            <SvgLinux />
            <span className="btn">Linux</span>
          </a>
       </li>
      </ul>
    </div>

      <div className="container">
      <ul className="languages-list">

      <li>
        <a href={useBaseUrl('/create/windows/')}>
            <SvgWindows />
            <span className="btn">Windows</span>
          </a>
       </li>

       <li>
        <a href={useBaseUrl('/create/homebrew/')}>
            <SvgApple />
            <span className="btn">Mac</span>
          </a>
        </li>


      <li>
        <a href={useBaseUrl('/create/netlify/getting-started-with-netlify')}>
            <SvgNetlify />
            <span className="btn">Netlify</span>
          </a>
       </li>

      <li>
        <a href={useBaseUrl('/create/vercel/')}>
            <SvgVercel />
            <span className="btn">Vercel</span>
          </a>
       </li>


     <li>
        <a href={useBaseUrl('/create/cloudrun/')}>
            <SvgCloudRun />
            <span className="btn">Cloudrun</span>
          </a>
       </li>

      <li>
        <a href={useBaseUrl('/create/jenkins/')}>
            <SvgJenkins />
            <span className="btn">Jenkins</span>
          </a>
       </li>



       </ul>
    </div>
  </section>;
}

export default Languages;
