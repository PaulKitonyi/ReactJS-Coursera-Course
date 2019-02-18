import React, {Component} from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';


class DishDetail extends Component {
   
    renderDish(dish) {
        if(dish !== null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }else{
            return (
                <div></div>
            );
        }
    }

    renderComments(comments) {
        if(comments !== null) {
            const commentlist = comments.map(comment => {
                return (
                    <li key={comment.comment.id}>{comment.comment}<br/> <br/>-- {comment.author}, {comment.date}<br/> <br/></li>
                );
            })
            return (
                <div>
                    <h4>Comments</h4>
                    {commentlist}
                </div>
            );
        }else {
            return (
                <div></div>
            );
        }
    }

    render() {
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1 list-unstyled">
                    {this.renderComments(this.props.comments)}
                </div>
            </div>
        );
    }
}


export default DishDetail;