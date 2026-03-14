function FilterBar({
  searchTerm,
  setSearchTerm,
  selectedTopic,
  setSelectedTopic,
  topics,
  selectedDifficulty,
  setSelectedDifficulty,
  difficulties,
  selectedCompany,
  setSelectedCompany,
  companies,
  showCompleted,
  setShowCompleted,
  showFavorites,
  setShowFavorites,
}) {
  return (
    <div className="filter-bar">
      <div className="filter-row">
        <input
          type="text"
          className="search-input"
          placeholder="🔍 Search questions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search questions"
        />
      </div>
      <div className="filter-row">
        <div className="filter-group">
          <label htmlFor="topic-filter">Topic</label>
          <select
            id="topic-filter"
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
          >
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="difficulty-filter">Difficulty</label>
          <select
            id="difficulty-filter"
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
          >
            {difficulties.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="company-filter">Company</label>
          <select
            id="company-filter"
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
          >
            {companies.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="status-filter">Status</label>
          <select
            id="status-filter"
            value={showCompleted}
            onChange={(e) => setShowCompleted(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="favorites-filter">Revisit</label>
          <select
            id="favorites-filter"
            value={showFavorites}
            onChange={(e) => setShowFavorites(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Favorites">Marked</option>
            <option value="Not Favorites">Not Marked</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
