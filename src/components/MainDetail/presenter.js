import React from 'react';
import './style.scss';
import Modal from '../Modal';

const MainDetail = (props) => {
    
    return (
        <div className="mainDetail_wrapper">
            <Modal />
            <div className="content">
                <div className="l_content">
                    <div className="pic"></div>
                    <div className="cnt">
                        <span className="tit">역전할머니 맥주</span>
                        <div className="tagBox">#여기 존맛탱</div>
                    </div>
                </div>
                <div className="r_content">
                    <div className="my_profile_box">
                        <div className="my_profile">
                            <div className="my_pic">
                                <img/>
                            </div>
                            <div className="my_info">
                                <span className="my_id">sooooo.an</span>
                                <span className="my_location">배곶cgv</span>
                            </div>
                        </div>
                        <div className="more"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path d="M6 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"/></svg></div>
                    </div>
                    <div className="registered_comments">
                        <div className="comments">
                            <div className="comment my_comment">
                                <div className="pic">
                                    <img/>
                                </div>
                                <div className="info">
                                    <div className="cnt_box">
                                        <span className="id">sooooo.an</span>
                                        <span className="cnt">데이투우</span>
                                    </div>
                                    <div className="sub_box">
                                        <span className="day">1일</span>
                                    </div>
                                </div>
                            </div>
                            <div className="comment">
                                <div className="pic">
                                    <img/>
                                </div>
                                <div className="info">
                                    <div className="cnt_box">
                                        <span className="id">sooooo.an</span>
                                        <span className="cnt tag">#daily #movie #cgv #yesterday #yesterdaymovie #데이트 #데이트코스 #영화추천 #영화 #심야영화 #배곧 #배곧신도시</span>
                                    </div>
                                    <div className="sub_box">
                                        <span className="day">1일</span>
                                        <span className="reply">답글 달기</span>
                                    </div>
                                </div>
                                <div className="heart"><span>♡</span></div>
                            </div>
                            <div className="comment">
                                <div className="pic">
                                    <img/>
                                </div>
                                <div className="info">
                                    <div className="cnt_box">
                                        <span className="id">932.5</span>
                                        <span className="cnt">보기조아여</span>
                                    </div>
                                    <div className="sub_box">
                                        <span className="day">1일</span>
                                        <span className="reply">답글 달기</span>
                                    </div>
                                </div>
                                <div className="heart"><span>♡</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="condition">
                        <div className="btn_box">
                            <span className="btn heart_btn"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"/></svg></span>
                            <span className="btn message_btn"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M12 3c5.514 0 10 3.592 10 8.007 0 4.917-5.144 7.961-9.91 7.961-1.937 0-3.384-.397-4.394-.644-1 .613-1.594 1.037-4.272 1.82.535-1.373.722-2.748.601-4.265-.837-1-2.025-2.4-2.025-4.872 0-4.415 4.486-8.007 10-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.417.345 2.774.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006z"/></svg></span>
                            <span className="btn share_btn"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M5 9c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.762 0-5 2.239-5 5s2.238 5 5 5 5-2.239 5-5-2.238-5-5-5zm15 9c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.944 1.764l5.488 2.927c-.072.301-.121.611-.121.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-22c-2.209 0-4 1.791-4 4 0 .324.049.634.121.935l-5.488 2.927c.395.536.713 1.128.944 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4s-1.791-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"/></svg></span>
                        </div>
                        <div className="how_many_hearts">
                            <p className="how_many_likes"><span className="who">jeyeomy</span>님 <strong>외 <span className="how_many">50</span>명</strong>이 좋아합니다</p>
                            <span className="how_many_days">1일 전</span>
                        </div>
                    </div>
                    <div className="post_comment">
                        <input type="text" placeholder="댓글 달기..."/>
                        <button class="btn" type="button">게시</button>
                    </div>
                </div>
            </div>
        </div>
        
    )

}

export default MainDetail;