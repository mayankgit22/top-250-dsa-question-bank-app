import { useState } from "react";
import LeetCodeProfile from "./LeetCodeProfile";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="sidebar-toggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
        title="LeetCode Profile"
      >
        {isOpen ? "✕" : "👤"}
      </button>

      {isOpen && (
        <div className="sidebar-overlay" onClick={() => setIsOpen(false)} />
      )}

      <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-content">
          <LeetCodeProfile />
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
