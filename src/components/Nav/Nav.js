import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faEye, faUser } from '@fortawesome/free-regular-svg-icons';

import SetClassCondition from '../customlib/SetClassCondition';

import NavHiddenMenu from './NavHiddenMenu';
import './Nav.scss';
import useToggleNav from '../../hooks/useToggleNav';

export default function Nav() {
  const [isShow, setIsShow] = useState(false);
  const { visibleValue } = useToggleNav();
  const navigate = useNavigate();

  const isValidUser = localStorage.getItem('user');

  const toggleHiddenMenu = () => {
    setIsShow(!isShow);
  };

  const logout = () => {
    localStorage.removeItem('user');
    alert('로그아웃 되었습니다!');
    navigate('/');
  };

  const goToCart = () => {
    navigate('/cart');
  };

  return (
    <>
      <header className={SetClassCondition('navHead', visibleValue, 'hide', 0)}>
        <section
          className={SetClassCondition('navUpper', visibleValue, 'hide', 0)}
        >
          <div className="navUpperFixedWidth">
            <div className="navUpperBtns">
              {!isValidUser ? (
                <>
                  <a href="/login">로그인</a>
                  <a href="/register" className="strong">
                    회원가입
                  </a>
                </>
              ) : (
                <>
                  <span className="strong">환영합니다!</span>
                  <span onClick={logout}>로그아웃</span>
                </>
              )}

              <a href="#!">매장찾기</a>
              <a href="#!">브랜드헤리티지</a>
              <a href="#!">고객센터</a>
            </div>
          </div>
        </section>
        <section
          className={SetClassCondition('navBottom', visibleValue, 'hide', 0)}
        >
          <div className="navBottomFixedWidth">
            <button
              type="button"
              className="navHamburgerBtn"
              onClick={toggleHiddenMenu}
            >
              <span className="hamburgerBtnLine" />
            </button>
            <div className="navLogo">
              <a href="/">
                <img src="/images/drheewon_logo.png" alt="닥터희원 로고" />
              </a>
            </div>
            <div className="beautifulMargin" />
            <div className="navInput">
              <div className="inputWrapper">
                <input placeholder="검색어를 입력해주세요" />
                <FontAwesomeIcon className="fontAwesomeIcon" icon={faSearch} />
              </div>
            </div>
            <FontAwesomeIcon className="fontAwesomeIcon" icon={faHeart} />
            <FontAwesomeIcon
              className="fontAwesomeIcon"
              icon={faShoppingBag}
              onClick={goToCart}
            />
            <FontAwesomeIcon className="fontAwesomeIcon" icon={faEye} />
            <FontAwesomeIcon className="fontAwesomeIcon" icon={faUser} />
          </div>
        </section>
      </header>
      {isShow ? (
        <NavHiddenMenu isShow={isShow} toggleHiddenMenu={toggleHiddenMenu} />
      ) : (
        ''
      )}
    </>
  );
}
