import { useState, useEffect, useMemo, useCallback } from "react";
import questions from "./data/questions";
import QuestionCard from "./components/QuestionCard";
import ProgressBar from "./components/ProgressBar";
import FilterBar from "./components/FilterBar";
import Sidebar from "./components/Sidebar";
import "./App.css";

const STORAGE_KEY = "dsa-completed-questions";
const FAVORITES_KEY = "dsa-favorite-questions";

function loadCompleted() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function loadFavorites() {
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

function App() {
  const [completed, setCompleted] = useState(loadCompleted);
  const [favorites, setFavorites] = useState(loadFavorites);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedCompany, setSelectedCompany] = useState("All");
  const [showCompleted, setShowCompleted] = useState("All");
  const [showFavorites, setShowFavorites] = useState("All");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
  }, [completed]);

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const topics = useMemo(() => {
    const set = new Set(questions.map((q) => q.topic));
    return ["All", ...Array.from(set).sort()];
  }, []);

  const companies = useMemo(() => {
    const set = new Set(questions.flatMap((q) => q.companies));
    return ["All", ...Array.from(set).sort()];
  }, []);

  const difficulties = ["All", "Easy", "Medium", "Hard"];

  const toggleItem = (setter) => (id) => {
    setter((prev) => {
      const next = { ...prev };
      if (next[id]) {
        delete next[id];
      } else {
        next[id] = true;
      }
      return next;
    });
  };

  const toggleComplete = toggleItem(setCompleted);
  const toggleFavorite = toggleItem(setFavorites);

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      if (
        searchTerm &&
        !q.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
        return false;
      if (selectedTopic !== "All" && q.topic !== selectedTopic) return false;
      if (
        selectedDifficulty !== "All" &&
        q.difficulty !== selectedDifficulty
      )
        return false;
      if (
        selectedCompany !== "All" &&
        !q.companies.includes(selectedCompany)
      )
        return false;
      if (showCompleted === "Completed" && !completed[q.id]) return false;
      if (showCompleted === "Pending" && completed[q.id]) return false;
      if (showFavorites === "Favorites" && !favorites[q.id]) return false;
      if (showFavorites === "Not Favorites" && favorites[q.id]) return false;
      return true;
    });
  }, [searchTerm, selectedTopic, selectedDifficulty, selectedCompany, showCompleted, showFavorites, completed, favorites]);

  const completedCount = Object.keys(completed).length;

  return (
    <div className="app">
      <Sidebar />
      <header className="app-header">
        <h1>🧠 Top 250 DSA Question Bank</h1>
        <p className="subtitle">
          Master your Data Structures &amp; Algorithms — track your progress, filter
          by topic, and crush your next interview!
        </p>
      </header>

      <ProgressBar completed={completedCount} total={questions.length} />

      <FilterBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedTopic={selectedTopic}
        setSelectedTopic={setSelectedTopic}
        topics={topics}
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
        difficulties={difficulties}
        selectedCompany={selectedCompany}
        setSelectedCompany={setSelectedCompany}
        companies={companies}
        showCompleted={showCompleted}
        setShowCompleted={setShowCompleted}
        showFavorites={showFavorites}
        setShowFavorites={setShowFavorites}
      />

      <div className="questions-count">
        Showing {filteredQuestions.length} of {questions.length} questions
      </div>

      <div className="questions-grid">
        {filteredQuestions.map((q) => (
          <QuestionCard
            key={q.id}
            question={q}
            isCompleted={!!completed[q.id]}
            isFavorite={!!favorites[q.id]}
            onToggle={() => toggleComplete(q.id)}
            onToggleFavorite={() => toggleFavorite(q.id)}
          />
        ))}
      </div>

      {filteredQuestions.length === 0 && (
        <div className="no-results">
          <p>No questions match your filters. Try adjusting your search criteria.</p>
        </div>
      )}

      {showScrollTop && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
