import React from "react";
import styled from "styled-components";
import Theme from "@css/CssVariables";

const CertificatesContainer = styled.section`
  line-height: 1.6rem;

  .card-certificates-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    margin-top: 30px;

    .card-certificates {
      ${Theme.boxShadow}
      border: 1px solid var(--lightest-navy);
      border-radius: var(--border-radius);
      padding: 20px;

      .certificate-subtitle {
        font-size: var(--fz-md);
        margin: 2px 0 0;
      }

      .redirect-btn {
        cursor: pointer;
        font-size: var(--fz-md);
        font-weight: 500;

        &::after {
          display: inline-block;
          content: "\\2192";
          padding: 0 10px;
          font-size: 16px;
          transition: var(--transition);
        }

        &:hover {
          color: var(--green);

          &::after {
            transform: translateX(10px);
          }
        }
      }

      h4 {
        margin: 0;
      }
    }
  }

  .subtitle {
    margin: 0;
  }
`;

export default function Certificates({ data }): JSX.Element {
  const { certificates, loading } = data;
  return (
    <CertificatesContainer>
      <h2 className="numbered-heading">My Certificates</h2>
      <span className="sub-title">some of my certificates</span>

      {loading ? (
        <div className="loading">Please Wait...</div>
      ) : (
        <div className="card-certificates-wrapper">
          {certificates.map((type: any) => {
            return (
              <div className="card-certificates">
                <h4>{type.title}</h4>
                <div className="certificate-subtitle">{type.subtitle}</div>
                <a
                  href={type.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="redirect-btn"
                >
                  <span>View Certificate</span>
                </a>
              </div>
            );
          })}
        </div>
      )}
    </CertificatesContainer>
  );
}
