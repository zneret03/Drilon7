import { useEffect } from "react";
import { JobTypes } from "@lib/types";
import styled from "styled-components";
import AosInit from "@components/utils/aos";

const StyledWorkExperience = styled.section`
  transition: var(--transition);

  .sub-title {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    color: var(--green);

    &:after {
      bottom: 0.1em;
    }
  }

  .card {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 40px;

    @media (max-width: 780px) {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-gap: 5px;
    }

    figure {
      margin: 50px 0 0;
      outline: none;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 320px;
      height: 500px;
      border-radius: 10px;
      box-shadow: 0 1px 3px rgba(2, 12, 27, 0.12),
        0 1px 2px rgba(2, 12, 27, 0.24);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      overflow: hidden;

      @media (max-width: 1080px) {
        width: 345px;
      }

      @media (max-width: 780px) {
        width: 100%;
      }

      &:hover {
        box-shadow: 0 14px 28px rgba(2, 12, 27, 0.25),
          0 10px 10px rgba(2, 12, 27, 0.22);

        img {
          transform: scale(1.25);
          -webkit-filter: var(--webkit-filter-colored); /* Safari 6.0 - 9.0 */
          filter: var(--filter-colored);
        }

        figcaption {
          bottom: 0;
        }
      }

      h1 {
        position: absolute;
        top: 50px;
        left: 20px;
        margin: 0;
        padding: 0;
        color: var(--green);
        font-size: 60px;
        font-weight: 100;
        line-height: 1;
      }

      img {
        height: 100%;
        transition: 0.25s;
        -webkit-filter: var(--webkit-filter);
        filter: grayscale(100%) contrast(1) brightness(90%);
      }

      figcaption {
        position: absolute;
        bottom: -38%;
        left: 0;
        right: 0;
        //height: 50%;
        margin: 0;
        padding: 20px 20px;
        background-color: var(--light-navy);
        box-shadow: 0 0 20px rgba(black, 0.4);
        color: white;
        line-height: 1;
        transition: 0.25s;

        @media (max-width: 1080px) {
          bottom: -33%;
        }

        @media (max-width: 780px) {
          bottom: -38%;
        }

        @media (max-width: 500px) {
          bottom: -33%;
        }

        @media (max-width: 390px) {
          bottom: -38%;
        }

        .title {
          margin: 0 0 20px;
          color: var(--green);
          font-weight: 400;

          span {
            font-size: var(--fz-xs);
            font-family: var(--font-mono);
          }

          h3 {
            font-size: var(--fz-xl);
            padding: 0;
            margin: 0;
          }
        }

        .job-description {
          font-size: var(--fz-sm);
          line-height: 1.75;
          color: var(--green);
        }
      }
    }
  }
`;

export default function WorkExperience({ jobs }: JobTypes): JSX.Element {
  useEffect(AosInit, []);

  return (
    <StyledWorkExperience data-aos="fade-up">
      <h2 className="numbered-heading">Work Experience</h2>
      <span className="sub-title">Software Companies</span>
      <div className="card">
        {jobs.map((type) => (
          <figure className="image-block">
            <img src={type.imageSource} alt="" />
            <figcaption>
              <div className="title">
                <h3>{type.title}</h3>
                <span>
                  {type.startDate} - {type.endDate}
                </span>
              </div>
              <div
                className="job-description"
                dangerouslySetInnerHTML={{ __html: type.description }}
              />
              {/* <p>
               Pellentesque habitant morbi tristique senectus et netus et
               malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
               vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
               amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
               placerat eleifend leo.
             </p> */}
            </figcaption>
          </figure>
        ))}
      </div>
    </StyledWorkExperience>
  );
}