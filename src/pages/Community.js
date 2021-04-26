import React from 'react'
import styled from 'styled-components'
import PostComp from '../communityTab/PostComp'
import AttachmentIcon from '@material-ui/icons/Attachment';

function Community() {
    return (
        <CommunityContainer>

            <CommunityPoster>
                <textarea placeholder="Whatcha got?" />
                <PosterBOT>
                    <AttachmentIcon/>
                    <button><b>Post!</b></button>
                </PosterBOT>
            </CommunityPoster>

            <PostComp />
            <PostComp />
            <PostComp />
        </CommunityContainer>
    )
}

export default Community

const CommunityContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 4rem
`
const PosterBOT = styled.div`
    display: flex;
    align-items: center;
    color: white;

`

const CommunityPoster = styled.div`
    width: 30rem;
    height 10rem;
    background-color: #262626;
    border-radius: 1.2rem;
    filter: drop-shadow(0px 10px 15px #3333);

    display: flex;
    flex-direction: column;
    align-items: center;

    textarea {
        margin: 1rem;
        width: 90%;
        height: 30%;
        border: none;
        font-size: 16px
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        padding: 9px;
        outline: none;
    }
    button {
        border: none;
        color: #262626;
        background-color: #F7F7F7;
        padding: 10px;
        margin: 9px 0px 0px 11px;
        border-radius: 7px;
        font-size: 15px;
        cursor: pointer;
    }
`
