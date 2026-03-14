import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders the main heading", () => {
    render(<App />);
    expect(screen.getByText(/Top 250 DSA Question Bank/i)).toBeInTheDocument();
  });

  it("shows question count", () => {
    render(<App />);
    const counts = screen.getAllByText(/Showing 250 of 250 questions/);
    expect(counts.length).toBeGreaterThan(0);
  });

  it("renders question cards with topic and pattern tags", () => {
    render(<App />);
    const topicTags = screen.getAllByText(/📂/);
    const patternTags = screen.getAllByText(/🧩/);
    expect(topicTags.length).toBeGreaterThan(0);
    expect(patternTags.length).toBeGreaterThan(0);
  });

  it("renders company badges on question cards", () => {
    render(<App />);
    const amazonBadges = screen.getAllByText("Amazon");
    expect(amazonBadges.length).toBeGreaterThan(0);
  });

  it("filters questions by search term", () => {
    render(<App />);
    const searchInputs = screen.getAllByPlaceholderText(/Search questions/i);
    fireEvent.change(searchInputs[0], { target: { value: "Two Sum" } });
    const twoSumElements = screen.getAllByText(/Two Sum/);
    expect(twoSumElements.length).toBeGreaterThan(0);
  });

  it("toggles question completion", () => {
    render(<App />);
    const markBtns = screen.getAllByText("⬜ Mark Complete");
    fireEvent.click(markBtns[0]);
    const completedTexts = screen.getAllByText(/1 \/ 250 completed/);
    expect(completedTexts.length).toBeGreaterThan(0);
  });

  it("renders progress bar", () => {
    render(<App />);
    const progressBars = screen.getAllByRole("progressbar");
    expect(progressBars.length).toBeGreaterThan(0);
  });

  it("shows difficulty badges", () => {
    render(<App />);
    const easyBadges = screen.getAllByText("Easy");
    const mediumBadges = screen.getAllByText("Medium");
    expect(easyBadges.length).toBeGreaterThan(0);
    expect(mediumBadges.length).toBeGreaterThan(0);
  });

  it("shows scroll-to-top button when scrolled down", () => {
    const original = window.scrollY;
    Object.defineProperty(window, "scrollY", { value: 0, writable: true, configurable: true });

    render(<App />);
    expect(screen.queryByLabelText("Scroll to top")).not.toBeInTheDocument();

    Object.defineProperty(window, "scrollY", { value: 400, writable: true, configurable: true });
    fireEvent.scroll(window);

    const buttons = screen.getAllByLabelText("Scroll to top");
    expect(buttons.length).toBeGreaterThan(0);

    Object.defineProperty(window, "scrollY", { value: original, writable: true, configurable: true });
  });
});
