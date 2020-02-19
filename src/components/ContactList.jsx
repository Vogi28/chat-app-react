import React from 'react';
import Contact from './Contact';


const list = [
    {
        image :"https://www.pngitem.com/pimgs/m/532-5325667_chibi-iron-man-chibi-iron-man-cute-hd.png", 
    name :"CutIron"
    },
    {
        image : "https://i.pinimg.com/originals/5b/ca/cc/5bcacc2e312b5e929c8092cbfcb72858.jpg" ,
      name : "CutCaptain"
    },
    {
        image : "https://1.bp.blogspot.com/-Xj8pykSgDvU/V7c6N1paXtI/AAAAAAAAMu0/qftH8hn7OZUa4wMfjZiiFOjyV0MdgDv0ACLcB/s1600/chibi%2Bhulk.jpg" ,
      name : "CutHulk"
    },
    {
      image : "https://i.pinimg.com/originals/72/d5/c6/72d5c653aab4b7b43cfb5c38b80b4c1e.jpg",
      name : "CutSpider"   
    },
    {
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwE250Feqc44GtbFTfBuUnLQO2TmDOeVcCH90jb-SxaP1RJmB-",
        name : "CutBWidow"
    }

];

function contactList(props) {
    return (
        <div>
            {
                list.map(item => <Contact image={item.image} name={item.name} status={props.status} statusText={props.status ? 'online' : 'offline'} />)
            }
        </div>
    );
}

export default contactList;