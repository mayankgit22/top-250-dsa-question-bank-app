import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor, cleanup } from "@testing-library/react";
import Sidebar from "../components/Sidebar";
import LeetCodeProfile from "../components/LeetCodeProfile";

let originalFetch;

beforeEach(() => {
  localStorage.clear();
  originalFetch = global.fetch;
});

afterEach(() => {
  global.fetch = originalFetch;
  cleanup();
});

describe("Sidebar", () => {
  it("renders the toggle button", () => {
    render(<Sidebar />);
    const toggleBtns = screen.getAllByLabelText("Open sidebar");
    expect(toggleBtns.length).toBeGreaterThan(0);
  });

  it("opens sidebar when toggle is clicked", () => {
    render(<Sidebar />);
    const toggleBtns = screen.getAllByLabelText("Open sidebar");
    fireEvent.click(toggleBtns[0]);
    const closeBtns = screen.getAllByLabelText("Close sidebar");
    expect(closeBtns.length).toBeGreaterThan(0);
    const titles = screen.getAllByText("🏆 LeetCode Profile");
    expect(titles.length).toBeGreaterThan(0);
  });

  it("closes sidebar when toggle is clicked again", () => {
    render(<Sidebar />);
    const toggleBtns = screen.getAllByLabelText("Open sidebar");
    fireEvent.click(toggleBtns[0]);
    const closeBtns = screen.getAllByLabelText("Close sidebar");
    fireEvent.click(closeBtns[0]);
    const openBtns = screen.getAllByLabelText("Open sidebar");
    expect(openBtns.length).toBeGreaterThan(0);
  });
});

describe("LeetCodeProfile", () => {
  it("renders the title", () => {
    render(<LeetCodeProfile />);
    const titles = screen.getAllByText("🏆 LeetCode Profile");
    expect(titles.length).toBeGreaterThan(0);
  });

  it("shows username input when not connected", () => {
    render(<LeetCodeProfile />);
    const inputs = screen.getAllByPlaceholderText("Enter LeetCode username");
    expect(inputs.length).toBeGreaterThan(0);
    const connectBtns = screen.getAllByText("Connect");
    expect(connectBtns.length).toBeGreaterThan(0);
  });

  it("saves username to localStorage on connect", () => {
    render(<LeetCodeProfile />);
    const inputs = screen.getAllByPlaceholderText("Enter LeetCode username");
    fireEvent.change(inputs[0], { target: { value: "testuser" } });
    const connectBtns = screen.getAllByText("Connect");
    fireEvent.click(connectBtns[0]);
    expect(localStorage.getItem("dsa-leetcode-username")).toBe("testuser");
  });

  it("shows disconnect button after connecting", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    );

    render(<LeetCodeProfile />);
    const inputs = screen.getAllByPlaceholderText("Enter LeetCode username");
    fireEvent.change(inputs[0], { target: { value: "testuser" } });
    const connectBtns = screen.getAllByText("Connect");
    fireEvent.click(connectBtns[0]);
    const disconnectBtns = screen.getAllByText("Disconnect");
    expect(disconnectBtns.length).toBeGreaterThan(0);
  });

  it("clears username on disconnect", async () => {
    localStorage.setItem("dsa-leetcode-username", "testuser");

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    );

    render(<LeetCodeProfile />);
    const disconnectBtns = screen.getAllByText("Disconnect");
    fireEvent.click(disconnectBtns[0]);
    expect(localStorage.getItem("dsa-leetcode-username")).toBeNull();
    const inputs = screen.getAllByPlaceholderText("Enter LeetCode username");
    expect(inputs.length).toBeGreaterThan(0);
  });

  it("retries on transient network failure before showing error", async () => {
    global.fetch = vi.fn(() => Promise.reject(new Error("network error")));

    render(<LeetCodeProfile />);
    const inputs = screen.getAllByPlaceholderText("Enter LeetCode username");
    fireEvent.change(inputs[0], { target: { value: "retryuser" } });
    const connectBtns = screen.getAllByText("Connect");
    fireEvent.click(connectBtns[0]);

    await waitFor(
      () => {
        const errorEl = screen.queryByText(/network error/i);
        expect(errorEl).not.toBeNull();
      },
      { timeout: 15000 }
    );

    // Each of the 3 endpoints is retried MAX_RETRIES(2) times = 3 attempts each = 9 total calls
    expect(global.fetch).toHaveBeenCalledTimes(9);
  }, 20000);

  it("shows error when solved endpoint returns non-ok", async () => {
    global.fetch = vi.fn((url) => {
      if (typeof url === "string" && url.includes("/solved")) {
        return Promise.resolve({
          ok: false,
          status: 500,
          json: () => Promise.resolve({}),
        });
      }
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ name: "Test" }),
      });
    });

    render(<LeetCodeProfile />);
    const inputs = screen.getAllByPlaceholderText("Enter LeetCode username");
    fireEvent.change(inputs[0], { target: { value: "baduser" } });
    const connectBtns = screen.getAllByText("Connect");
    fireEvent.click(connectBtns[0]);

    await waitFor(() => {
      const errorEl = screen.queryByText(/Failed to fetch complete profile data/i);
      expect(errorEl).not.toBeNull();
    });
  });

  it("shows loading hint about API server waking up", async () => {
    global.fetch = vi.fn(
      () => new Promise(() => {})
    );

    render(<LeetCodeProfile />);
    const inputs = screen.getAllByPlaceholderText("Enter LeetCode username");
    fireEvent.change(inputs[0], { target: { value: "loadinguser" } });
    const connectBtns = screen.getAllByText("Connect");
    fireEvent.click(connectBtns[0]);

    await waitFor(() => {
      const hint = screen.queryByText(/API server is waking up/i);
      expect(hint).not.toBeNull();
    });
  });
});
