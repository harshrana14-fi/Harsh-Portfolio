"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink, Code2 } from "lucide-react";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  html_url: string;
  topics: string[];
  pushed_at: string;
};

type UserStats = {
  public_repos: number;
  followers: number;
  following: number;
};

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f0db4f",
  Python: "#3572A5",
  Dart: "#00B4AB",
  "C++": "#f34b7d",
  C: "#555555",
  Java: "#b07219",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Ruby: "#701516",
  Go: "#00ADD8",
  Rust: "#dea584",
  Shell: "#89e051",
};

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

function ContributionChart() {
  const [svgHtml, setSvgHtml] = useState<string>("");

  useEffect(() => {
    fetch("https://ghchart.rshah.org/39d353/harshrana14-fi")
      .then((res) => res.text())
      .then((data) => {
        // Transform inline fill styles into theme-aware classes with rich GitHub greens
        let cleaned = data.replace(
          /style="[^\"]*"\s+(data-score="(\d+)")/gi,
          (_match, p1, p2) => {
            const score = parseInt(p2, 10);
            let cls = "";
            if (score === 0) {
              cls = "fill-neutral-200 dark:fill-neutral-800/60";
            } else if (score === 1) {
              cls = "fill-[#9be9a8] dark:fill-[#0e4429]";
            } else if (score === 2) {
              cls = "fill-[#40c463] dark:fill-[#006d32]";
            } else if (score === 3) {
              cls = "fill-[#30a14e] dark:fill-[#26a641]";
            } else {
              cls = "fill-[#216e39] dark:fill-[#39d353]";
            }
            return `class="${cls}" ${p1}`;
          }
        );

        // Update text labels
        cleaned = cleaned.replace(
          /fill:#767676/gi,
          'class="fill-neutral-500 dark:fill-neutral-400"'
        );

        setSvgHtml(cleaned);
      })
      .catch(() => {});
  }, []);

  if (!svgHtml) {
    return (
      <div className="overflow-x-auto">
        <img
          src="https://ghchart.rshah.org/39d353/harshrana14-fi"
          alt="GitHub Contribution Chart"
          className="h-28 w-full object-contain"
          style={{ minWidth: 500 }}
        />
      </div>
    );
  }

  return (
    <div
      className="overflow-x-auto [&_svg]:w-full [&_svg]:h-28 [&_svg]:max-w-none"
      style={{ minWidth: 500 }}
      dangerouslySetInnerHTML={{ __html: svgHtml }}
    />
  );
}

export default function GitHubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [stats, setStats] = useState<UserStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const username = "harshrana14-fi";

    Promise.all([
      fetch(`https://api.github.com/users/${username}`).then((r) => r.json()),
      fetch(
        `https://api.github.com/users/${username}/repos?sort=pushed&per_page=30`
      ).then((r) => r.json()),
    ])
      .then(([userData, repoData]) => {
        if (!Array.isArray(repoData)) {
          setError(true);
          return;
        }
        setStats({
          public_repos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
        });
        const sorted = repoData
          .filter((r: Repo) => !r.name.startsWith(".") && r.description)
          .sort(
            (a: Repo, b: Repo) =>
              b.stargazers_count - a.stargazers_count ||
              new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
          )
          .slice(0, 6);
        setRepos(sorted);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {/* Stats row */}
      <div className="flex flex-wrap gap-4 mb-6">
        {[
          { label: "Public Repos", value: stats?.public_repos ?? "—" },
          { label: "Followers", value: stats?.followers ?? "—" },
          { label: "Following", value: stats?.following ?? "—" },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-3 dark:border-neutral-800 dark:bg-neutral-900 min-w-[90px]"
          >
            <span className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50">
              {loading ? (
                <span className="inline-block w-8 h-6 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse" />
              ) : (
                value
              )}
            </span>
            <span className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5 uppercase tracking-widest">
              {label}
            </span>
          </div>
        ))}

        <a
          href="https://github.com/harshrana14-fi"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto flex items-center gap-1.5 self-center rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs font-medium text-neutral-700 shadow-sm transition-all hover:bg-neutral-50 hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-3.5 w-3.5 shrink-0"
          >
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          View profile
          <ExternalLink size={10} />
        </a>
      </div>

      {/* Contribution chart */}
      <div className="mb-6 rounded-xl border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900 overflow-hidden">
        <p className="text-[10px] font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-3">
          Contribution Activity
        </p>
        <ContributionChart />
      </div>

      {/* Repos grid */}
      {error ? (
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Couldn&apos;t load GitHub repos. Visit{" "}
          <a
            href="https://github.com/harshrana14-fi"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          directly.
        </p>
      ) : loading ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-28 rounded-xl border border-neutral-200 bg-neutral-100 animate-pulse dark:border-neutral-800 dark:bg-neutral-900"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group flex flex-col gap-2 rounded-xl border border-neutral-200 bg-white p-4 transition-all duration-200 hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-neutral-700"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-1.5 min-w-0">
                  <Code2
                    size={13}
                    className="shrink-0 text-neutral-400 dark:text-neutral-500"
                  />
                  <span className="truncate text-sm font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
                    {repo.name}
                  </span>
                </div>
                <ExternalLink
                  size={12}
                  className="shrink-0 text-neutral-300 group-hover:text-neutral-600 dark:text-neutral-700 dark:group-hover:text-neutral-400 transition-colors mt-0.5"
                />
              </div>
              <p className="line-clamp-2 text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {repo.description}
              </p>
              <div className="flex items-center gap-3 mt-auto pt-1">
                {repo.language && (
                  <span className="flex items-center gap-1 text-[11px] text-neutral-500 dark:text-neutral-400">
                    <span
                      className="h-2 w-2 rounded-full flex-shrink-0"
                      style={{
                        backgroundColor:
                          LANG_COLORS[repo.language] ?? "#888",
                      }}
                    />
                    {repo.language}
                  </span>
                )}
                {repo.stargazers_count > 0 && (
                  <span className="flex items-center gap-0.5 text-[11px] text-neutral-500 dark:text-neutral-400">
                    <Star size={11} className="text-amber-400" />
                    {repo.stargazers_count}
                  </span>
                )}
                {repo.forks_count > 0 && (
                  <span className="flex items-center gap-0.5 text-[11px] text-neutral-500 dark:text-neutral-400">
                    <GitFork size={11} />
                    {repo.forks_count}
                  </span>
                )}
                <span className="ml-auto text-[10px] text-neutral-400 dark:text-neutral-600">
                  {timeAgo(repo.pushed_at)}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </div>
  );
}
