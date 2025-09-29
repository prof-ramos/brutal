### 1. DOM-based Cross-Site Scripting (XSS)

**Vulnerability:** DOM-based Cross-Site Scripting (XSS)
**Severity:** High
**Location:** `src/pages/mapa-astral.astro`
**Line Content:** `svgResult.appendChild(sanitizedSvg);`
**Description:** The application is vulnerable to DOM-based XSS because it parses and appends SVG data from an API response to the DOM without sufficient sanitization. The current sanitization only removes `<script>` tags, but does not prevent other XSS vectors in SVGs, such as event handlers (e.g., `onload`) or malicious `href` attributes. An attacker who can control the SVG content returned by the API could execute arbitrary JavaScript in the user's browser.
**Recommendation:** Use a robust and well-maintained library to sanitize the SVG content before appending it to the DOM. Libraries like `DOMPurify` are designed for this purpose and can be configured to allow safe SVG tags and attributes while removing malicious content.
