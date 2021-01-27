import React, { useReducer } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DeleteQuestion from "./DeleteQuestion";
import EditQuestion from "./EditQuestion";
import Answer from "../Answer/Answer";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import NewAnswer from "../Answer/NewAnswer";
import styles from "../../styles/question.styles";
import css from "./Question.module.css";

const Question = (props) => {
  const useStyles = makeStyles((theme) => styles(theme));

  const classes = useStyles();

  const reducer = (state, action) => {
    return {
      ...state,
      [action.type]: action.payload,
    };
  };

  const [state, setState] = useReducer(reducer, {
    deleteModal: false,
    editModal: false,
  });

  const { questionIdx, query, answers, image } = props;
  const { deleteModal, editModal } = state;

  const openModal = (type) => {
    setState({
      type: type,
      payload: true,
    });
  };

  const closeModal = (type) => {
    setState({
      type: type,
      payload: false,
    });
  };
  return (
    <>
      <li className={css.li}>
        <div className={css.wrapper}>
          <div className={css.queryHeader}>
            {query}
            <span className={css.actions}>
              <IconButton
                className={classes.edit}
                size="small"
                edge="start"
                onClick={() => openModal("editModal")}
              >
                <EditIcon />
              </IconButton>
              <span className={css.btnSpacer}></span>
              <IconButton
                className={classes.delete}
                size="small"
                edge="start"
                onClick={() => openModal("deleteModal")}
              >
                <DeleteIcon />
              </IconButton>
            </span>
          </div>
          {image.url && (
            <img
              className={css.img}
              src={image.url}
              alt="additional information"
            />
          )}
        </div>
      </li>
      <ol type="a" className={css.li}>
        {answers.map((answer, index) => {
          return (
            <Answer
              key={index}
              answerIdx={index}
              questionIdx={questionIdx}
              text={answer.text}
              points={answer.points}
              answers={answers}
            />
          );
        })}
      </ol>
      <NewAnswer idx={questionIdx} />
      <DeleteQuestion
        open={deleteModal}
        handleClose={() => closeModal("deleteModal")}
        idx={questionIdx}
      />
      <EditQuestion
        open={editModal}
        closeModal={() => closeModal("editModal")}
        idx={questionIdx}
      />
    </>
  );
};
export default Question;
