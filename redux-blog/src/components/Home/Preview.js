import React from 'react';

class Preview extends React.Component {

    constructor(){
        this.handlerNav = this.handlerNav.bind(this);
    }

    handlerNav(e, id){
        e.preventDefault();
        this.props.push(`/detail/${id}`);
    }

    render () {
        const {id, title, date, description} = this.props;
        return (
            <article className="article-preview-item">
                <h2 className="title">
                    <a href={`/detail/${id}`} onClick={this.handlerNav({id})}>{title}</a>
                </h2>
                <span className="date">{date}</span>
                <span className="des">{description}</span>
            </article>
        )
    }
}

export default Preview;