import React from 'react'
import PropTypes from "prop-types"
import Details from 'components/Details'
import * as Style from './styles'

import getThemeColor from "utils/getThemeColor"

const PostItem = ({
    slug,
    tags,
    date,
    timeToRead,
    title,
    description,
    author,
    image,
}) => (
        <Style.PostItemLink to={slug}
            cover
            direction="right"
            bg={getThemeColor()}
            duration={0.6}>
            <Style.PostItemWrapper>
                {image && <Style.CardImage fluid={image.childImageSharp.fluid} />}
                {tags && (
                        <Details tags={tags} author={author} />
                    )}
                <Style.PostItemInfo>
                    <Style.PostItemDate>
                        {date} • {timeToRead} min de leitura
                    </Style.PostItemDate>
                    <Style.PostItemTitle>{title}</Style.PostItemTitle>
                    <Style.PostItemDescription>{description}</Style.PostItemDescription>
                    <Style.PostItemAuthor>por {author}</Style.PostItemAuthor>
                </Style.PostItemInfo>
            </Style.PostItemWrapper>
        </Style.PostItemLink>
    )

PostItem.propTypes = {
    slug: PropTypes.string.isRequired,
    background: PropTypes.string,
    category: PropTypes.array,
    tags: PropTypes.array,
    date: PropTypes.string.isRequired,
    timeToRead: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    image: PropTypes.object,
}

export default PostItem