# devops-journey

Source of [reinhold.co](https://reinhold.co): tested platform-engineering runbooks (AWS, Terraform, Kubernetes) and a journey log. Built with [Astro Starlight](https://starlight.astro.build), deployed to GitHub Pages on every push to `master`.

```bash
npm ci
npm run dev        # http://localhost:4321 — drafts are visible here only
npm run build      # what CI runs; drafts are excluded
bash scripts/sanitise-check.sh
```

| Path | What |
|---|---|
| `src/content/docs/runbooks/` | learner editions, one `.mdx` per runbook |
| `src/content/docs/journey/` | journal entries |
| `src/components/Vars.astro` | "Your values" box: fills `<PLACEHOLDER>`s in code blocks and copy buttons |
| `src/components/Progress.astro` | tick boxes on every step + progress bar |
| `src/components/MyRun.astro` | collapsible "what I got" with a date |
| `templates/runbook.mdx` | starting point for a new runbook |

Content is published only after the runbook has been run end to end and passes `scripts/sanitise-check.sh`.
