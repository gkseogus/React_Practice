import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
    display: flex;
    
    .thumbnail {
        margin-right: 1rem;

        img {
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }

    .contents{
        h2{
            margin: 0;
            a {
                color: black;
            }
        }

        p {
            margin: 0;
            line-height: 1.5;
            margin-top: 0.5rem;
            white-space: normal;
        }
    }

    & + & {
        margin-top: 3rem;
    }
`;

const NewsItem = ({ articles }) => {

    // 해당하는 필드를 리액트 컴포넌트에 넣어줌
    // NewsItem 컴포넌트는 article 객체를 props로 통째로 받아와 사용
    const { title, description, url, urlToImage } = articles; 
    return ( 
        <NewsItemBlock>
            {urlToImage && (
                <div classNmae="thumbnail">
                    {/* rel: 보안상 옵션 */}
                    <a href={url} target = "_blank" rel='noopener noreferrer'> 
                        <img src={urlToImage} alt='thumbnail' />
                    </a>
                </div>
            )}
            <div className='contents'>
                <h2>
                    <a href={url} target = "_blank" rel='noopener noreferrer'>
                     {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    );
}

export default NewsItem ;