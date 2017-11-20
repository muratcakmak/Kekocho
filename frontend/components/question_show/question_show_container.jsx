import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import QuestionShow from './question_show';
import { deleteQuestion, fetchQuestion } from '../../actions/question_actions';
import { createAnswer } from '../../actions/answer_actions';
import { showModal } from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  console.log(Object.keys(state.entities.questions));
  if( Object.keys(state.entities.questions).length !== 0){
    return {
      answers: state.entities.questions[ownProps.match.params.questionId].answerIds.map(id => state.entities.answers[id]),
      currentUser: state.session.currentUser,
      question: state.entities.questions[ownProps.match.params.questionId]
    };
  }
  return {
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchQuestion: (questionId) => dispatch(fetchQuestion(questionId)),
    createAnswer: (answer) => dispatch(createAnswer(answer)),
    showModal: (formType, questionId) => dispatch(showModal(formType, questionId)),
    deleteQuestion: (questionId) => dispatch(deleteQuestion(questionId)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionShow));
