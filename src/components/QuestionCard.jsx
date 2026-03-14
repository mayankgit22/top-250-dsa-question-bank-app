function QuestionCard({ question, isCompleted, onToggle }) {
  const { title, topic, pattern, difficulty, companies, link, id } = question;

  const difficultyClass = difficulty.toLowerCase();

  return (
    <div className={`question-card ${isCompleted ? "completed" : ""}`}>
      <div className="card-header">
        <span className="question-id">#{id}</span>
        <span className={`difficulty-badge ${difficultyClass}`}>
          {difficulty}
        </span>
      </div>

      <h3 className="question-title">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h3>

      <div className="card-tags">
        <span className="tag topic-tag" title="Topic">
          📂 {topic}
        </span>
        <span className="tag pattern-tag" title="Pattern">
          🧩 {pattern}
        </span>
      </div>

      <div className="companies-section">
        <span className="companies-label">🏢 Asked at:</span>
        <div className="companies-list">
          {companies.map((company) => (
            <span key={company} className="company-badge">
              {company}
            </span>
          ))}
        </div>
      </div>

      <div className="card-footer">
        <button
          className={`complete-btn ${isCompleted ? "completed" : ""}`}
          onClick={onToggle}
          aria-label={isCompleted ? "Mark as incomplete" : "Mark as complete"}
        >
          {isCompleted ? "✅ Completed" : "⬜ Mark Complete"}
        </button>
      </div>
    </div>
  );
}

export default QuestionCard;
