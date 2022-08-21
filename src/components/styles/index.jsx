import styled from 'styled-components';

export const Wrapper = styled.div``;

export const HeaderWrapper = styled.header`
  background-color: #000;
  display: flex;
  padding: 1rem 3.125rem;
  gap: 30px;
  .logo-text {
    margin-top: -2px;
    text-align: center;
    line-height: 1;

    a {
      display: flex;
      flex-direction: column;
    }
    span:nth-child(1) {
      color: #fff;
      font-weight: 700;
      font-size: 3.125rem;
    }
    span:nth-child(2) {
      color: #f5c518;
      font-weight: 500;
      line-height: 0;
      font-size: 1rem;
      padding-top: 6px;
    }
  }
  .search-form {
    position: relative;
    align-self: center;
    max-width: 500px;
    width: 100%;
    margin-left: 5%;

    input {
      width: 100%;
      border-radius: 5px;
      height: 35px;
      border: none;
      appearance: none;
      padding: 0.375em 0px 0.375rem 0.5rem;
      background: #fff;
      outline: none;
    }
    button {
      position: absolute;
      right: 0.35rem;
      top: 0.6rem;
      min-width: 2rem;
      background: transparent;
      border: none;
      font-size: 1rem;
      cursor: pointer;
    }
  }
`;
export const HomeWrapper = styled.div`
  padding: 1rem 3.125rem;
`;

export const CardWrapper = styled.section`
  margin-block: 4rem;

  header {
    position: relative;
    line-height: 1.3;
    padding-left: 1.3rem;
    margin-block: 4rem 2rem;

    &:before {
      content: '';
      position: absolute;
      top: 1px;
      left: 0;
      width: 6px;
      height: 100%;
      background: #f5c518;
    }

    h2 {
      font-size: 1.625rem;
      font-weight: 700;
    }
    h4 {
      font-size: 0.9375rem;
      font-weight: 500;
      color: #606060;
    }
  }

  .splide {
    .splide__track {
      padding-block: 1rem;
    }
    .splide__list {
      padding-block: 2rem;
      padding-inline: 0;

      .media-card,
      .splide__slide {
        background-color: #fff;
        transition: all 0.3s ease-out;

        a {
          display: block;
          width: 100%;
          height: 100%;

          padding: 15px 15px 25px 15px;
        }

        &:hover {
          box-shadow: 1px 0px 19px rgba(0, 0, 0, 0.19);
          transition: all 0.3s ease-in;
        }

        .image-cover {
          overflow: hidden;
          min-height: 290px;
          max-height: 290px;
          background-color: rgba(0, 0, 0, 0.1);

          img {
            object-fit: cover;
          }
        }
        h2 {
          font-size: 0.95rem;
          font-weight: 500;
          line-height: 1.2;
        }
        .rating {
          margin-block: 0.6rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }
        span {
          display: flex;
          align-items: center;
          line-height: 0;
          font-size: 14px;
          font-weight: 500;
          color: #606060;

          svg {
            fill: #f5c518;
            stroke: none;
            width: 1.55rem;
            height: 1.55rem;
            margin-right: 5px;
            margin-top: -3px;
          }
          &:nth-child(1) svg {
            width: 1.3rem;
            height: 1.3rem;
          }
          &:nth-child(3) svg {
            width: 1.3rem;
            height: 1.3rem;
          }
        }
      }
    }
  }
`;
export const DetailWrapper = styled.section`
  .hero {
    background-size: cover;
    width: 100%;
    min-height: 500px;
    max-height: 500px;
    background-position: bottom;
    padding-block: 20%;
  }
  .page-content {
    padding: 1rem 3.125rem;

    svg {
      fill: #f5c518;
      stroke: none;
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;
export const FooterWrapper = styled.footer`
  background: #000;
  padding-block: 1rem;
  color: #fff;

  span {
    display: flex;
    justify-content: center;
    align-content: center;

    svg {
      font-size: 1.5rem;
      margin-right: 0.3rem;
    }
  }
`;
export const MediaDetailsWrapper = styled.section`
display: flex;
align-content: center;
min-height: calc(100vh - 60px);
gap: 4rem;
padding: 1rem 3.125rem;
margin-top: 2rem;

.cover-image {
  max-width: 300px;
}
.genres {
  display: flex;
  gap: 1rem;

  span {
     border-radius: 4px;
    border: 1px gray solid;
    display: inline-block;
    padding: 0.1rem 1rem;
  }
}
  .media-content {
    flex-basis: 50%;

    h2 {
      font-size: 1.5625rem;
      font-weight: 700;
      line-height: 1;
    padding-block-end: 0.3rem;
    }
    h5 {
      font-size: 1.0625rem;
      font-weight: 500;
    }
    .genres {
      margin-block: 1.5rem;
    }
    .plot-text {
      max-width: 600px;
    }


  }
  aside {
    margin-left: auto;
    flex:1;

    svg {
            fill: #f5c518;
            stroke: none;
            width: 1.55rem;
            height: 1.55rem;
            margin-right: 5px;
            margin-top: -3px;
          }
          &:nth-child(1) svg {
            width: 1.3rem;
            height: 1.3rem;
          }
          article {
            margin-block: 2rem;

            h6 {
              font-size: 1rem;
            }
            p {
              font-size: .9rem;
            }
          }
  }
`;

export const MediaListWrapper = styled.section`
padding: 1rem 3.125rem;
margin-top: 2rem;

.list-row {
  display: flex;
  background: #fff;
  margin-block-end:2rem;
  gap: 1rem;
  align-items: center;

  .list-image {
    display: flex;
    height: 100px;
    width: 67px;

    img {
      object-fit: cover;
    }
  } 
  h4 {
    font-size: 15px;
    font-weight: 500;
  } 
}

`;


