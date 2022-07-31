import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <AppFooter className='appFooter'>
      <div className='footer__copyright'>
        &copy; 2022 Made with ❤️ by{' '}
        <a
          className='footer__copyright--link'
          href='https://github.com/EliasAfara'
        >
          {' '}
          Elias Afara
        </a>
      </div>
    </AppFooter>
  );
};

const AppFooter = styled.footer`
  margin-top: 30px;
  padding-top: 35px;
  padding-bottom: 25px;
  grid-column: 1 / 13;
  text-align: center;

  .footer__copyright {
    color: #fff;
    font-size: 16px;

    .footer__copyright--link {
      text-decoration: none;
      color: $color-red-2;
      transition: all 0.3s;
    }

    .footer__copyright--link:hover {
      color: orange;
    }
  }
`;

export default Footer;
