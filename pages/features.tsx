import { FunctionComponent } from 'react';
import Download from '../components/download';
import Hero from '../components/hero';
import Meta from '../components/meta';
import Newsletter from '../components/newsletter';
import Layout from '../layout/layout';

const featuresList = [
  {
    title: 'Unlimited mocking',
    description:
      'Mock an unlimited number of environments with unlimited number of routes and run them in parallel.'
  },
  {
    title: 'Import / export',
    description:
      'Environment import / export with Swagger/OpenAPI format support. <a href="/tutorial/import-export-environments-routes">Learn more</a>'
  },
  {
    title: 'Route regex',
    description:
      'Route regex supported (/.*, /[a-z]{3}, ...), based on ExpressJS syntax.'
  },
  {
    title: 'Multiple responses per route',
    description:
      'Serve multiple <a href="/tutorial/multiple-route-responses">rules-triggered responses</a> for each route with any headers body, or HTTP status codes.'
  },
  {
    title: 'CORS',
    description:
      'Automatically send CORS headers (<code>Access-Control-Allow-Origin</code>, etc.) for OPTIONS requests. <a href="/tutorial/automatic-handling-preflight-requests">Learn more</a>'
  },
  {
    title: 'HTTPS',
    description:
      'Serve your mock API over TLS with self-signed certificate. <a href="/tutorial/serve-mock-api-tls/">Learn more</a>'
  },
  {
    title: 'Response headers',
    description:
      'Add any response headers to your routes and environments. With auto-completion. <a href="/tutorial/define-response-headers">Learn more</a>'
  },
  {
    title: 'Latency',
    description: 'Add latency at environment or route level or even both.'
  },
  {
    title: 'Requests and responses logs',
    description:
      'All incoming requests and outgoing responses are logged for easier debugging. <a href="/tutorial/incoming-requests-logs">Learn more</a>'
  },
  {
    title: 'Proxy mode',
    description:
      "Redirect all non-defined routes to the specified host with Mockoon's proxy mode."
  },
  {
    title: 'File serving',
    description:
      'File serving with automatic mime type detection and templating support.'
  },
  {
    title: 'Rich text editor',
    description:
      'Rich text editor for body content supporting multiple languages (JSON, HTML, etc).'
  },
  {
    title: 'Templating',
    description:
      'Templating supported in body, file content and header, with many helpers: url params, query params, JSON body lookup, etc. <a href="/tutorial/dynamic-response-with-templating">Learn more</a>'
  },
  {
    title: 'Auto-save',
    description:
      'Real-time auto save as you type. Never worry again about saving!'
  },
  {
    title: 'Offline',
    description: 'No account, no sign-up, no cloud deployment required.'
  }
];

const Features: FunctionComponent = function () {
  const numberOfRows = Math.ceil(featuresList.length / 3);
  const featuresContent = [];

  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    featuresContent.push(
      <div key={'featureRow' + rowIndex} className='tile is-horizontal'>
        {featuresList
          .slice(rowIndex * 3, rowIndex * 3 + 3)
          .map((feature, featureIndex) => {
            return (
              <article
                key={'feature' + featureIndex}
                className='tile is-child notification'
              >
                <p className='title'>{feature.title}</p>
                <p
                  className='subtitle'
                  dangerouslySetInnerHTML={{ __html: feature.description }}
                ></p>
              </article>
            );
          })}
      </div>
    );
  }

  return (
    <Layout>
      <Meta
        title='Complete list of features'
        description='List of all features offered by Mockoon, the REST API mocking tool compatible with Windows, Mac and Linux.'
        ogType='article'
      />
      <Hero title='Complete list of features' />

      <Download />

      <section className='section'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>{featuresContent}</div>
        </div>
      </section>

      <Newsletter />
    </Layout>
  );
};

export default Features;
