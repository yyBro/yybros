import React, {useState, useRef} from 'react';

function Item({item}) {
    return (
        <div>
            <b>{item.id}</b>
            <span><b>{item.content}</b></span>
        </div>
    )
}
function ContentList(){

    const list = [
        {
            id : 1,
            content : 'React',
        },
        {
            id: 2,
            content: 'Spring',
        },
        {
            id: 3,
            content: 'Java',
        },
        {
            id: 4,
            content: 'Django',
        },
        {
            id: 5,
            content: 'Design Patten',
        },
    ];

    return (
        <div>
            {list.map(item => (<Item id={item.id} item={item.content}/>)

                )
            }
        </div>
    )

}

export default ContentList;
