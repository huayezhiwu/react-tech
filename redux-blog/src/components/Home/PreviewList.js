import React from 'react';

import Preview from './Preview';

class PreviewList extends React.Component {

    componentDidMount(){
        this.props.loadArticles();
    }
    
    render(){
        const { loading, error, articleList, push } = this.props;
        
        if(error) {
            return <p className="message">Oops, something is wrong.</p>
        }

        if(loading){
            return <p className="message">Loading</p>
        }

        return (
            <div>
                { articleList.map(item => {
                    return <Preview {...item} key={item.id} push={push} ></Preview>
                } )}
            </div>
        )

    }
}

export default PreviewList;