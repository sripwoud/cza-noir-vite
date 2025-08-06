export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function titleCase(str: string) {
  // Handle various naming conventions: kebab-case, snake_case, camelCase, PascalCase
  return str
    .replace(/[-_]/g, ' ') // Replace dashes and underscores with spaces
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space between camelCase/PascalCase
    .split(' ')
    .filter(word => word.length > 0) // Remove empty strings
    .map((word) => capitalize(word.toLowerCase()))
    .join(' ')
}
