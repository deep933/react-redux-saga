import './index.css'
const Header = (props) => {
    const topics = props.topics

    return (<nav><div className="btn-group">
        <button className={props.topic === topics.trump ? 'active' : 'inactive'} onClick={() => props.changeTopic(topics.trump)}>Donald Trump</button>
        <button className={props.topic === topics.hillary ? 'active' : 'inactive'} onClick={() => props.changeTopic(topics.hillary)}>Hillary Clinton</button>
    </div></nav>)
}

export default Header;