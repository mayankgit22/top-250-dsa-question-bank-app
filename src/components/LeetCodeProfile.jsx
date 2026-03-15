import { useState, useEffect, useCallback, useRef } from "react";

const API_BASE = "https://alfa-leetcode-api.onrender.com";
const STORAGE_KEY = "dsa-leetcode-username";
const FETCH_TIMEOUT_MS = 30000;
const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 3000;

function loadUsername() {
  try {
    return localStorage.getItem(STORAGE_KEY) || "";
  } catch {
    return "";
  }
}

function fetchWithTimeout(url, timeoutMs, signal) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  if (signal) {
    signal.addEventListener("abort", () => controller.abort());
  }

  return fetch(url, { signal: controller.signal }).finally(() =>
    clearTimeout(timeoutId)
  );
}

async function fetchWithRetry(url, { timeoutMs, retries, retryDelayMs, signal }) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fetchWithTimeout(url, timeoutMs, signal);
    } catch (err) {
      if (signal && signal.aborted) throw err;
      if (attempt === retries) throw err;
      await new Promise((r) => setTimeout(r, retryDelayMs));
    }
  }
}

function LeetCodeProfile() {
  const [username, setUsername] = useState(loadUsername);
  const [inputValue, setInputValue] = useState(loadUsername);
  const [profile, setProfile] = useState(null);
  const [solved, setSolved] = useState(null);
  const [badges, setBadges] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const abortRef = useRef(null);

  const fetchProfile = useCallback(async (user) => {
    if (!user) return;

    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError("");
    try {
      const fetchOpts = {
        timeoutMs: FETCH_TIMEOUT_MS,
        retries: MAX_RETRIES,
        retryDelayMs: RETRY_DELAY_MS,
        signal: controller.signal,
      };

      const [profileRes, solvedRes, badgesRes] = await Promise.all([
        fetchWithRetry(`${API_BASE}/${user}`, fetchOpts),
        fetchWithRetry(`${API_BASE}/${user}/solved`, fetchOpts),
        fetchWithRetry(`${API_BASE}/${user}/badges`, fetchOpts),
      ]);

      if (!profileRes.ok) {
        throw new Error("User not found");
      }
      if (!solvedRes.ok || !badgesRes.ok) {
        throw new Error("Failed to fetch complete profile data");
      }

      const profileData = await profileRes.json();
      const solvedData = await solvedRes.json();
      const badgesData = await badgesRes.json();

      if (profileData.errors || profileData.error) {
        throw new Error("User not found");
      }

      setProfile(profileData);
      setSolved(solvedData);
      setBadges(badgesData);
    } catch (err) {
      if (controller.signal.aborted && err.name === "AbortError") return;
      let message = err.message || "Failed to fetch profile";
      if (err.name === "AbortError") {
        message =
          "Request timed out. The API server may be waking up — please try again in a moment.";
      }
      setError(message);
      setProfile(null);
      setSolved(null);
      setBadges(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (username) {
      fetchProfile(username);
    }
  }, [username, fetchProfile]);

  useEffect(() => {
    return () => {
      if (abortRef.current) abortRef.current.abort();
    };
  }, []);

  const handleConnect = (e) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    localStorage.setItem(STORAGE_KEY, trimmed);
    setUsername(trimmed);
  };

  const handleDisconnect = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUsername("");
    setInputValue("");
    setProfile(null);
    setSolved(null);
    setBadges(null);
    setError("");
  };

  return (
    <div className="leetcode-profile">
      <h3 className="leetcode-title">🏆 LeetCode Profile</h3>

      {!username ? (
        <form className="leetcode-form" onSubmit={handleConnect}>
          <input
            type="text"
            className="leetcode-input"
            placeholder="Enter LeetCode username"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            aria-label="LeetCode username"
          />
          <button type="submit" className="leetcode-connect-btn">
            Connect
          </button>
        </form>
      ) : (
        <div className="leetcode-connected">
          {loading && (
            <div className="leetcode-loading">
              Loading profile…
              <span className="leetcode-loading-hint">
                This may take a moment if the API server is waking up.
              </span>
            </div>
          )}

          {error && (
            <div className="leetcode-error">
              <span>⚠️ {error}</span>
              <button className="leetcode-retry-btn" onClick={() => fetchProfile(username)}>
                Retry
              </button>
            </div>
          )}

          {profile && !loading && (
            <div className="leetcode-data">
              <div className="leetcode-user-info">
                {profile.avatar && (
                  <img
                    src={profile.avatar}
                    alt={`${username}'s avatar`}
                    className="leetcode-avatar"
                  />
                )}
                <div className="leetcode-user-details">
                  <span className="leetcode-name">
                    {profile.name || username}
                  </span>
                  {profile.ranking != null && (
                    <span className="leetcode-ranking">
                      Rank #{profile.ranking.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>

              {solved && (
                <div className="leetcode-stats">
                  <div className="leetcode-stat-row total">
                    <span>Total Solved</span>
                    <span className="stat-value">{solved.solvedProblem ?? "—"}</span>
                  </div>
                  <div className="leetcode-stat-row easy">
                    <span>Easy</span>
                    <span className="stat-value">{solved.easySolved ?? "—"}</span>
                  </div>
                  <div className="leetcode-stat-row medium">
                    <span>Medium</span>
                    <span className="stat-value">{solved.mediumSolved ?? "—"}</span>
                  </div>
                  <div className="leetcode-stat-row hard">
                    <span>Hard</span>
                    <span className="stat-value">{solved.hardSolved ?? "—"}</span>
                  </div>
                </div>
              )}

              {badges && badges.badges && badges.badges.length > 0 && (
                <div className="leetcode-badges">
                  <h4 className="badges-title">Badges</h4>
                  <div className="badges-list">
                    {badges.badges.map((badge, i) => (
                      <div key={i} className="badge-item" title={badge.displayName}>
                        {badge.icon && (
                          <img
                            src={badge.icon}
                            alt={badge.displayName}
                            className="badge-icon"
                          />
                        )}
                        <span className="badge-name">{badge.displayName}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <a
                href={`https://leetcode.com/u/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="leetcode-profile-link"
              >
                View Full Profile ↗
              </a>
            </div>
          )}

          <button className="leetcode-disconnect-btn" onClick={handleDisconnect}>
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
}

export default LeetCodeProfile;
