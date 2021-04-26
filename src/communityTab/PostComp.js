import  styled  from 'styled-components'
import React from 'react'
import SendIcon from '@material-ui/icons/Send';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { DriveEtaOutlined } from '@material-ui/icons';

function PostComp() {
    return (
        <PostContainer>
            <CommunityPost>
                <CommunityPostTOP>

                </CommunityPostTOP>
                
                <CommunityPostBOT>
                    
                    <div>
                        <FavoriteBorderIcon />
                    </div>

                    <div>
                        <input />
                        <SendIcon/> 
                    </div>

                    <div>
                        <AccountBoxIcon />
                    </div>
                    
                </CommunityPostBOT>
            </CommunityPost>
        </PostContainer>
    )
}

export default PostComp

const PostContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 2rem;
`


const CommunityPostTOP = styled.div`
    width: 30rem;
    height 30rem;
    background-color: white;
    border-radius: 0px 0px 1.2rem 1.2rem;
    filter: drop-shadow(0px 10px 15px #3333);

`

const CommunityPostBOT = styled.div`
    display: flex;
    align-items: center;
    color: white;
    padding: 1rem;

    div {
        display: flex;
        align-items: center;
        padding: 0px 10px 0px 10px;

    }

    input {
        width: 20rem;
    }

`

const CommunityPost = styled.div`
    width: 30rem;
    height 25rem;
    background-color: #262626;
    border-radius: 0px 0px 1.2rem 1.2rem;
    filter: drop-shadow(0px 10px 15px #3333);

    display: flex;
    flex-direction: column;
    align-items: center;
`


