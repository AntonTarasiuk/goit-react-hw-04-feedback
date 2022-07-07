import { Feedbacks } from "./FeedbackStats/FeedbackStats";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        textAlign: 'left',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >
      <Feedbacks />
    </div>
  );
};
