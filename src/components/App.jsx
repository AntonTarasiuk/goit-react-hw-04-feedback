import { Section } from "./Section/Section";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        textAlign: 'left',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >
      <Section />
    </div>
  );
};
