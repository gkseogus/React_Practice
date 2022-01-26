import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom'; // 선택된 카테고리에 다른 스타일을 주는 기능

const categories = [
    {
        name: 'all',
        text: '전체보기'
    },
    {
        name: 'business',
        text: '비즈니스'
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트'
    },
    {
        name: 'health',
        text: '헬스'
    },
    {
        name: 'science',
        text: '과학'
    },
    {
        name: 'sports',
        text: '스포츠'
    },
    {
        name: 'technology',
        text: '기술'
    },
];

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;

const Category = styled(NavLink)`
    font-size: 1.125 rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25 rem;

    &:hover { 
        color: #495057;
    }

    &.active {
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;
        &:hover {
            color: #3bc9db;
        }
    }

    & + & {
        margin-left: 1rem;
    }
`;


// to 값은 /카테고리 이름
// 카테고리중 전체보기는 예외적으로 /all 대신 / 
// to 값이 / 를 카리킬때는 exact 값을 true로 설정해야 된다
// ㄴ 다른 카테고리가 선택되었을 때도 전체보기 링크에 active 스타일이 적용되는 오류 발생
const Categories = () => {
    return (
        <CategoriesBlock>
            {categories.map(c => (
                <Category key={c.name}
                    activeClassName='active'
                    exact={c.name === 'all'}
                    to={c.name === 'all' ? '/' : `/${c.name}`}
                 >
                    {c.text}</Category>
            ))}
        </CategoriesBlock>
    )
}
export default Categories;