import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCampsite({campsite}) {
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

function RenderComments({comments}) {
        if (comments) {
            const commentsMarkup = comments.map(comment => {
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

function CampsiteInfo(props) {
        // const campsite = this.props.campsite;
        //can also do this.props.campsite in the if condition
        if (props.campsite) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderCampsite campsite={props.campsite} />
                        <RenderComments comments={props.campsite.comments} />
                    </div>
                </div>
            );
        }
        return (
            <div />
        );
    }


export default CampsiteInfo;