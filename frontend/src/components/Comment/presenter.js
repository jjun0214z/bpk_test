import React from 'react';
import PropTypes from 'prop-types';
import styles from "./style.module.scss";

const Comment = props => {
    return (
        <div className={styles.commentArea}>
            {props.textState === "default" && 
                <form className={ props.comment.length > 0 ? styles.active : null}>
                    <div className={styles.textAreaForm}>
                        <textarea
                            className={styles.textArea}
                            placeholder="입력하세요"
                            value={props.comment}
                            onChange={props.handleInputChanage}
                            maxLength={props.total}
                        ></textarea>
                        <div className={styles.total}>{props.total - props.comment.length}</div>
                    </div>
                    <button className={styles.btnSave}>Save</button>
                </form>        
            }
            {props.textState === "disabled" && 
                <form>
                    <div className={styles.textAreaForm}>
                        <textarea
                            className={styles.textArea}
                            placeholder="입력하세요"
                            value="입력하세요"
                            onChange={props.handleInputChanage}
                            maxLength={props.total}
                            disabled={true}
                        ></textarea>
                        <div className={styles.total}>{props.total}</div>
                    </div>
                    <button className={styles.btnSave}>Save</button>
                </form>        
            }
            {props.textState === "readOnly" && 
                <form>
                    <div className={styles.textAreaForm}>
                        <textarea
                            className={styles.textArea}
                            placeholder="입력하세요"
                            value="읽기전용"
                            onChange={props.handleInputChanage}
                            maxLength={props.total}
                            readOnly={true}
                        ></textarea>
                        <div className={styles.total}>{props.total}</div>
                    </div>
                    <button className={styles.btnSave}>Save</button>
                </form>        
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