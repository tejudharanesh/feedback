import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../data";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  function deleteItem(id) {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  function updateFeedbackItems(id, upItem) {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...upItem, id} : item))
    );
  }

  function addFeedback(newFeedback) {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  }

  function editFeedback(item) {
    setFeedbackEdit({
      item,
      edit: true,
    });
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteItem,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedbackItems,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
