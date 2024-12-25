import { Blog } from "@/types";

const blogs: Blog[] = [
  {
    id: 1,
    title: "The Future of Web Development",
    author: "Jane Doe",
    content: `Web development is evolving rapidly with new technologies like Web3, AI-driven tools, and serverless computing. In this article, we explore these trends and their potential impact on developers and users alike.`,
    tags: ["Web Development", "Technology", "Trends"],
    publishedAt: "2024-01-15",
    public: true,
    summary:
      "Exploring the latest trends shaping the future of web development.",
  },
  {
    id: 2,
    title: "Mastering TypeScript for Beginners",
    author: "John Smith",
    public: true,
    content: `TypeScript is a powerful tool for modern JavaScript developers. This beginner-friendly guide covers the essentials to help you get started and leverage TypeScript's benefits in your projects.`,
    tags: ["TypeScript", "JavaScript", "Programming"],
    publishedAt: "2023-12-01",
    summary:
      "A beginner's guide to understanding and using TypeScript effectively.",
  },
  {
    id: 3,
    public: false,
    title: "10 Tips for Writing Cleaner Code",
    author: "Alice Johnson",
    content: `Clean code is essential for maintainability and collaboration in software development. These 10 practical tips will help you write cleaner, more efficient code that your team will thank you for.`,
    tags: ["Coding", "Best Practices", "Clean Code"],
    publishedAt: "2023-11-20",
    summary:
      "Learn 10 actionable tips for improving code quality and maintainability.",
  },
  {
    id: 4,
    public: true,
    title: "Exploring AI in Everyday Life",
    author: "Emma Brown",
    content: `Artificial Intelligence is no longer confined to research labs. From virtual assistants to personalized recommendations, AI is shaping the way we live and work. Here's how AI is being used in everyday scenarios.`,
    tags: ["AI", "Technology", "Innovation"],
    publishedAt: "2023-10-05",
    summary:
      "Discover how AI technologies are influencing daily life in various ways.",
  },
  {
    id: 5,
    public: false,
    title: "Design Systems: A Guide for Beginners",
    author: "Michael Lee",
    content: `Design systems are a game-changer for creating cohesive and scalable interfaces. This guide introduces the basics of design systems and provides examples of how they can improve your workflow.`,
    tags: ["Design", "UX", "Design Systems"],
    publishedAt: "2023-09-12",
    summary:
      "An introductory guide to understanding and creating design systems for your projects.",
  },
];

export default blogs;
