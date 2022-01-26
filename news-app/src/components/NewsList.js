import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../node_modules/axios/index';
import NewsItem from './Newsltem';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem ;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = ({ category }) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);
    /*
    useEffect를 사용해 컴포넌트가 처음 렌더링하는 시점에서 api 요청
    useEffect에 등록하는 함수에는 async를 붙이면 안된다.
    useEffect가 반환해야 할 값은 뒷정리 함수이기 때문
    그래서 함수 내부에 async 의 함수를 또 만들어줘야 한다.
    */
    useEffect(() => {
        //async를 사용하는 함수 따로 선언
        const fetchData = async () => {
            setLoading(true);
            try {
                // 현재 props로 받아 온 카테고리에 따라 카테고리를 지정해 api 요청
                const query = category === 'all' ? '' : `&category=${category}`;
                const response = await axios.get(
                    // 현재 category 값이 무엇인지에 따라 요청할 주소가 동적으로 변경
                    `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=9e2ff15cee35424b9c9f97a66af6125f`,
                );
                setArticles(response.data.articles);
            } catch(e){
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, [category]); // category 값이 바뀔 때 마다 뉴스를 새로 불러와야 한다. (의존 배열 사용)

    // 대기 중일 때
    if (loading) {
        return < NewsListBlock > 대기 중...</NewsListBlock>;
    }

    // 아직 article 값이 설정되지 않았을 때
    if ( !articles ) {
        return null; 
    }

    // articles 값이 유효할 때
    // 해당 값이 현재 null 인지 확인하자
    // ㄴ 데이터가 없을 때 null에는 map 함수가 없기 때문에 렌더링 오류가 발생한다.
    return (
        <NewsListBlock>
            {articles.map(articles => (
                <NewsItem key={articles.url} articles={articles}/>
            ))}
        </NewsListBlock>
    );
};

export default NewsList;