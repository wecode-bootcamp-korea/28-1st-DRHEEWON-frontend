import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ContentHeader from '../../components/RegisterLogin/ContentHeader';

import './Cart.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  // 전체 상품 선택
  const checkedAllProduct = () => {};

  // 선택 삭제
  const deleteProductSelection = () => {};

  // 제품 수량 추가 및 삭제
  const handlerQuantity = () => {};

  // 상품 직접 클릭하여 삭제 (delete btn)
  const deleteProduct = () => {};

  // 구매하기 버튼
  const buyProduct = () => {};

  return (
    <div className="cartContainer">
      <ContentHeader pageInfo="장바구니" />
      <main>
        <section className="choiceHandlerWrap">
          <div className="choiceHandler">
            <label>
              <input type="checkbox" />
              <span onClick={checkedAllProduct}>전체 선택</span>
            </label>
            <button type="button">
              <FontAwesomeIcon
                icon={faTrashAlt}
                size="2x"
                className="trashAlt"
              />
              <span onClick={deleteProductSelection}>선택 삭제 (1)</span>
            </button>
          </div>
        </section>
        <div className="cartPriceListWrap">
          <ul className="cartListWrap">
            <li>
              <div className="productContent">
                <input type="checkbox" />
                <button onClick={deleteProduct} className="deleteProduct">
                  <FontAwesomeIcon
                    icon={faTimes}
                    size="2x"
                    className="delProductIcon"
                  />
                </button>
                <section className="productImg">
                  <img
                    alt="product1"
                    src="https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  />
                </section>
                <section className="productInfo">
                  <h4>1461 모노</h4>
                  <ul>
                    <li>컬러: 블랙</li>
                    <li>사이즈(mm): 240</li>
                  </ul>
                  <em className="productPriceNum">190,000</em>
                  <div className="countProduct">
                    <span>수량</span>
                    <em>1</em>
                    <button onClick={handlerQuantity}>
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <button onClick={handlerQuantity}>
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                  </div>
                </section>
              </div>
            </li>
          </ul>
          <aside className="orderPrice">
            <article>
              <header>
                <h3>주문 예정 금액</h3>
              </header>
              <dl>
                <dt>총 상품 금액</dt>
                <dd>0</dd>
                <dt>할인 금액</dt>
                <dd>(-)0</dd>
                <dt>총 결제 예정 금액</dt>
                <dd>0</dd>
              </dl>
            </article>
            <button onClick={buyProduct} className="buyProductBtn">
              구매하기
            </button>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Cart;
