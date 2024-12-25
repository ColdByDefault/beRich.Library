export function Step({ children }) {
  return <div className="steps-container">{children}</div>;
}

export function StepItem({ title, children, number }) {
  return (
    <div className="step-item">
      <div className="step-header">
        <div className="step-number">{number}</div>
        <h4 className="step-title">{title}</h4>
      </div>
      <div className="step-content">{children}</div>
    </div>
  );
}
