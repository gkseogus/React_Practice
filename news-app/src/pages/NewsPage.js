import React from 'react';
import Categories from '../components/categories';
import NewsList from '../components/NewsList';

const NewsPage = ( { match }) => {

    // 카테고리가 선택되지 않으면 기본값 all 사용
    const category = match.params.category || 'all';

    return (
        <div>
            <Categories />
            <NewsList category={category} />        
        </div>
    );
};

export default NewsPage;