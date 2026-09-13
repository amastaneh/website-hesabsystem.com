# Project operating rules

## Agent synchronization

- Keep this file and the matching agent file synchronized; apply every rule change to both files in the same edit.

## Local-only workflow

- Treat the local workspace as the source of truth for this project.
- Read and inspect project files directly from the local filesystem. Do not use GitHub websites, GitHub APIs, connectors, or remote repository contents to inspect the codebase.
- Perform development, searches, edits, tests, builds, previews, and reviews entirely in the local workspace.
- Do not fetch, pull, clone, push, publish, deploy, upload, sync, or otherwise contact a remote unless the user explicitly requests the applicable operation.
- Local builds and localhost previews are allowed for validation. A successful build alone does not prove that the requested behavior or visual result is correct.

## Package manager and local development

- Use pnpm as the package manager for Next.js and JavaScript/TypeScript projects governed by this file. Do not use npm or Yarn for installs, scripts, lockfile updates, or routine project commands.
- Keep a working `dev` script in each applicable project's `package.json` and run the local development environment with `pnpm dev` (or the equivalent explicit form `pnpm run dev`).
- Preserve `pnpm-lock.yaml` as the dependency lockfile and do not create or update `package-lock.json` or `yarn.lock`.

## Versioning and validation

- Use `YY.MM.BUILD` in `package.json`: `YY` is the two-digit year, `MM` is `1` by default or `2` only when manually selected, and `BUILD` is the build count.
- A new project starts at `26.1.1`; each exact `push it` increments `BUILD` by one, such as `26.1.2`.
- Do not run tests, lint, typecheck, builds, previews, visual checks, status checks, diffs, or other validation unless the user explicitly asks for a check.
- Preserve existing user changes and avoid unrelated rewrites.
- Update the sitemap whenever routes are added, removed, or renamed.

## Fast Git workflow

- All work remains local unless the user explicitly asks to commit or push in the current conversation.
- When the user asks to commit and push, or says exactly `push it`, immediately stage the current changes, create a concise commit, and push to the current branch's existing upstream.
- Do not run tests, lint, typecheck, builds, previews, status checks, diffs, or other validation before committing or pushing unless the user explicitly asks for one.
- Do not check out, create, or switch branches. Do not use `STG` or `PROD` branch workflows.
- Do not create folders, copy code elsewhere, or prepare a separate staging or production workspace.
- Do not publish or deploy this project to any hosting or third-party destination.
- If there is no configured upstream for the current branch, ask the user for the remote and branch instead of choosing one.

## Styling preferences

- Prefer less code and fewer styling primitives whenever the result remains clear, maintainable, and visually correct.
- Preserve and extend the project's existing design system, brand tokens, spacing scale, typography, colour palette, breakpoints, and interaction language.
- Prefer the existing styling framework's standard utilities. When Tailwind CSS is present, prefer its standard utility classes and established project tokens.
- When Tailwind CSS is present, always reach for its standard, predefined utility classes first, and only fall back to arbitrary values (`w-[123px]`, `text-[#abc123]`) for genuine one-off, brand-specific, or computed requirements. Do not default to arbitrary values for things the standard scale already covers; if a value is only a few pixels off the nearest standard step, round to that standard step instead of hardcoding the exact number, unless the task explicitly calls for pixel-precise matching. Shared values that must stay identical everywhere, such as brand colours, fonts, and repeated spacing/radius tokens, belong in `:root` in `globals.css` and get referenced from utility classes; keep `globals.css` otherwise limited to resets and behaviour Tailwind genuinely can't express, such as pseudo-elements or masks.
- Reuse existing utilities, components, variants, and design-system primitives before creating new CSS classes or selectors.
- Avoid adding new CSS files, CSS Modules, component-specific stylesheets, `<style>` tags, or scattered style definitions unless the existing system cannot express the requirement cleanly.
- Keep global CSS limited to framework imports, resets, theme tokens, shared primitives, and behavior that cannot reasonably live in existing utilities or components.
- Do not use inline styles by default. Use them only for genuinely dynamic values that cannot be represented through the existing styling system.
- Prefer canonical framework utilities over arbitrary values when they are exactly equivalent.
- Use arbitrary values only for genuine brand-specific or computed requirements such as custom colours, percentages, `calc(...)`, masks, or `clip-path`.
- Treat responsive behavior, focus states, reduced motion, contrast, keyboard navigation, and readable touch targets as part of the design system rather than optional polish.
- Do not introduce a generic template aesthetic that conflicts with the project's business, audience, region, or established visual identity.

## Formatting preferences

- Use spaces for indentation with an indentation width of 4 spaces in source and configuration files.
- Do not reformat unrelated files.
- Follow existing linting and formatting rules when they are stricter than these defaults.
- Keep components, functions, and configuration blocks readable without unnecessary comments or abstraction.
- When a utility-heavy `className` becomes unwieldy or makes the JSX difficult to read, extract the element or repeated interface region into a focused component and keep its Tailwind classes there; prefer a component over custom CSS when the problem is markup readability. Reuse that component for repeated patterns and add variants for meaningful visual differences.

## Icon system

- Use `lucide-react` or `react-icons` for React interface work, choosing the family that best matches the project's existing visual language and installed dependencies.
- Import icons directly by name so unused icons can be removed from the production bundle.
- Keep a visually related interface region consistent; do not mix icon families within the same control group or component without a clear design reason.
- Existing icons may be preserved or replaced with a suitable Lucide or React Icons equivalent when touched by the requested work.
- Keep icon size, colour, alignment, optical weight, and `strokeWidth` consistent through shared component variants or design tokens.
- Prefer an existing Lucide or React Icons icon before drawing or embedding a custom SVG interface icon.
- Custom SVG files are allowed only for brand marks, logos, unique decorative artwork, diagrams, masks, textures, or shapes with no suitable Lucide equivalent.
- Do not use emoji characters as interface icons because platform rendering is inconsistent.

## Component architecture

- Optimize source structure for human readability, reuse, testing, and maintenance.
- Prefix component names and filenames with a meaningful usage context, such as `HomeAboutSection`, `ProjectGallery`, or `SharedTestimonialsCarousel`.
- Extract distinct interface regions such as navigation, hero, service cards, project galleries, contact panels, and footer into focused components.
- For small projects, keep components in a clear, shallow `components` structure. Add nested folders only when the number of files makes the flat structure difficult to navigate.
- Keep route and page files concise and focused on composition, metadata, and page-level data flow.
- Separate reusable content, options, and configuration from rendering logic when it improves readability or makes editing safer.
- Avoid monolithic page components, but also avoid fragmenting trivial one-line elements into unnecessary files.
- Reuse shared components for repeated buttons, links, headings, cards, icons, containers, and interaction patterns instead of duplicating markup and behavior.

## Content architecture

- Treat site copy, links, services, projects, facts, clients, testimonials, navigation items, contact details, and other repeatable content as editable data.
- Keep substantial repeatable content in simple typed objects or arrays in the project's established data/content location; create a root `data` directory only when no convention already exists.
- Give every repeatable data record a stable, unique `id` so items can be added, removed, reordered, and referenced safely.
- Components should control structure and presentation; avoid burying large editable content tables inside component markup.
- Keep navigation and interface structure in components unless the task explicitly requires them to be data-driven.
- Preserve semantic HTML, useful alternative text, metadata, structured data, canonical URLs, and descriptive asset filenames as part of content quality.

## Linked project rule files

These AGENTS.md files form one linked policy set. When a shared operating rule changes, review the complete set so the projects remain consistent.

- [music-homelands-dawn rules](<C:/github/music-homelands-dawn/AGENTS.md>)
- [web-site rules](<C:/github/web-site/AGENTS.md>)
- [website-amin-shirazi rules](<C:/github/website-amin-shirazi/AGENTS.md>)
- [website-neshaan.studio rules](<C:/github/website-neshaan.studio/AGENTS.md>)
- [website-marchicarpentry.com rules](<C:/github/website-marchicarpentry.com/AGENTS.md>)
- [200-MarchiCarpentry workspace rules](<C:/google/amastaneh/Projects/200-MarchiCarpentry/AGENTS.md>)
