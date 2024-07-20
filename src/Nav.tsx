import BarIcon from "./icons/BarIcon";
import SearchIcon from "./icons/SearchIcon";

function Nav() {
    return (
        <div className='nav-wrapper'>
            <div className='sub-header-content'>
                <img height={88}
                    src='http://www.monami.com/images/common/logo.jpg'
                />
                <div className='nav'>
                    <ul>
                        <a href='#'><li>모나미소개</li></a>
                        <a href='#'><li>모나미 제품</li></a>
                        <a href='#'><li>NEWS & VIDEO</li></a>
                        <a href='#'><li>모나미 미술대회</li></a>
                        <a href='#'><li>고객지원</li></a>
                        <a href='#'><li>기업 구매 / 개발</li></a>

                    </ul>
                </div>
                <div className='sub-nav'>
                    <div className='nav_search'>
                        <SearchIcon className='icon' />
                    </div>
                    <div className='btn_all'>
                        <BarIcon className='icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;