import React from 'react';
import PropTypes from 'prop-types';
import styles from "./style.module.scss";

const Comment = props => {
    return (
        <div className={styles.commentArea}>
            {props.textState === "default" && 
                <div className={ props.comment.length > 0 ? styles.active : null}>
                    <div className={styles.textAreaForm}>
                        <textarea
                            className={styles.textArea}
                            placeholder="입력하세요"
                            value={props.comment}
                            maxLength={props.total}
                            onChange={props.handleInputChanage}
                            onKeyUp={props.handleMaxlength}
                        ></textarea>
                        <div className={styles.total}>{props.total - props.comment.length}</div>
                    </div>
                    <button className={styles.btnSave}>Save</button>
                </div>        
            }
            {props.textState === "disabled" && 
                <div>
                    <div className={styles.textAreaForm}>
                        <textarea
                            className={styles.textArea}
                            placeholder="입력하세요"
                            value="입력하세요"
                            maxLength={props.total}
                            onChange={props.handleInputChanage}
                            onKeyUp={props.handleMaxlength}
                            disabled={true}
                        ></textarea>
                        <div className={styles.total}>{props.total}</div>
                    </div>
                    <button className={styles.btnSave}>Save</button>
                </div>        
            }
            {props.textState === "readOnly" && 
                <div>
                    <div className={styles.textAreaForm}>
                        <textarea
                            className={styles.textArea}
                            placeholder="입력하세요"
                            value="읽기전용"
                            maxLength={props.total}
                            onChange={props.handleInputChanage}
                            onKeyUp={props.handleMaxlength}
                            readOnly={true}
                        ></textarea>
                        <div className={styles.total}>{props.total}</div>
                    </div>
                    <button className={styles.btnSave}>Save</button>
                </div>        
            }
        </div>
    );
};

Comment.protoTypes = {
    comment: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    handleInputChanage: PropTypes.func.isRequired,
    textState: PropTypes.string.isRequired
};

export default Comment;