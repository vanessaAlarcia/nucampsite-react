import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class CampsiteInfo extends Component {
    renderCampsite(campsite) {
        return (
            <div className="col-md-5 m-2">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    renderComments() {
        if (this.props.campsite.comments) {
            const commentsMarkup = this.props.campsite.comments.map(comment => {
                return (
                    <div key={comment.id}>
                        <p>{comment.text}<br />--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </div>
                );
            })
            return (
                <div className="col-md-5 mt-3 mb-3">
                    <h4>Comments</h4>
                    {/* {comments.map(comment => {return (<div>{ comment.text} <br />--{comment.author}, {comment.date}</div>)})} */}
                    {commentsMarkup}
                </div>
            );
            
        }
        return (
            <div />
        );
    }

    render() {
        // const campsite = this.props.campsite;
        //can also do this.props.campsite in the if condition
        if (this.props.campsite) {
            return (
                <div className="row">
                    {this.renderCampsite(this.props.campsite)}
                    {this.renderComments()}
                </div>
            );
        }
        return (
            <div />
        );
    }
    }


export default CampsiteInfo;