import FaceIcon from "./icons/FaceIcon";
import InstaIcon from "./icons/InstaIcon";
import YoutubeIcon from "./icons/YoutubeIcon";

function Head() {
    return (
        <div className='head-wrapper'>
            <div className="head">
                <div className='sub-header-content'>
                    <div className='links'>
                        <ul className='sns'>
                            <FaceIcon className='sns-icon' />
                            <InstaIcon className='sns-icon' />
                            <YoutubeIcon className='sns-icon' />
                        </ul>
                    </div>
                    <div className='short-cut'>
                        <ul>
                            <li><a href='#'>HOME</a></li>
                            <li><a href='#'>SITE MAP</a></li>
                            <li><a href='#'>CONTACT US</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Head;