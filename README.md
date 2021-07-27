# What is this?
A simple package to clear away focus outline while making it visible only for keyboard navigation.

## Usage
```bash
npm i focus-handling
```

Then, simply add to your `index.js` the following:
```javascript
// Import focus-handling
import { focusHandling } from 'focus-handling';

document.addEventListener('DOMContentLoaded', () => {
  focusHandling('outline');
});
```
