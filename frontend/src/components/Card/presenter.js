import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from "./style.module.scss";

const Card = props => {
    const { data } = props;
    return (
        <div className={styles.cardWrap}>
            {data.map(data => <CardUi {...data} key={data.id} />)}
        </div>
    );
};

const CardUi = props => {

    return (
        <div className = {
            props.type === "vertical" ?
            classNames(styles.card, styles.vertical) : classNames(styles.card, styles.horizontal)
        }>
            <div className={styles.photo}>
                <img 
                    src={props.image.file && (
                        require("images/img_card.png")
                    )}
                    alt={props.image.caption} 
                />
            </div>
            <div className={styles.cont}>
                <div className={styles.column}>
                    {props.type === "vertical" && <p className={styles.label}>{props.label}</p> }
                    <strong className={styles.title}>{props.title}</strong>
                    {props.type === "vertical" &&
                        <div className={styles.hilight}>
                            <strong>hilight</strong>
                            <div className={styles.options}><span>green out</span></div>
                        </div>
                    }
                    {props.type === "horizontal" && <p className={styles.text}>{props.content}</p>}
                </div>
                {props.grade && 
                    <div className={classNames(styles.column, styles.bottom)}>
                    <div className={styles.grade}>
                        {props.grade.map((grade, idx) => <Ratings grade={grade} key={idx} />)}
                    </div>
                    {props.content && props.type === "vertical" && <p className={styles.text}>{props.content}</p>}
                </div>}
            </div>
        </div>
    );
};

const Ratings = props => {
    if (props.grade) {
        return <span className={styles.active}>&nbsp;</span>
    }else{
        return <span>&nbsp;</span>
    }
};

Card.protoTypes = {
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.arrayOf(
        PropTypes.shape({
            file: PropTypes.string.isRequired,
            caption: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    grade: PropTypes.array.isRequired,
    content: PropTypes.string.isRequired
};

export default Card;