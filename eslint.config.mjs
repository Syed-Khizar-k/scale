import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },

  // --- ADD THIS OBJECT TO DISABLE/MODIFY RULES ---
  {
    rules: {
      // Example: Disables the 'no-console' rule
      "no-console": "off",
      
      // Example: Downgrades a rule to a warning instead of an error
      "react-hooks/exhaustive-deps": "warn", 

      // Example: Disables a specific Next.js rule
      "@next/next/no-img-element": "off",

      // Add any other rules you want to change here:
      // "rule-name-goes-here": "off",
    },
  },
  // -----------------------------------------------
];

export default eslintConfig;