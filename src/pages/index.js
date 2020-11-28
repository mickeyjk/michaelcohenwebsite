import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default ({ data }) => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
      </Helmet>
      <App data={data} />
    </>
  );
};

export const query = graphql`
  query {
    allDataJson {
      edges {
        node {
          data {
            about {
              img
              paragraphOne
              paragraphThree
              paragraphTwo
              resume
            }
            contact {
              btn
              cta
              email
            }
            footer {
              networks {
                id
                name
                url
              }
            }
            githubButtons {
              isEnabled
            }
            head {
              description
              lang
              title
            }
            projects {
              id
              img
              info
              info2
              repo
              title
              url
            }
            hero {
              cta
              name
              subtitle
              title
            }
          }
        }
      }
    }
  }
`;
