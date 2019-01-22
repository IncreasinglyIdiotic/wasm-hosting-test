// import("../crate/pkg").then(module => {
//   module.run();
// });

import("./index.js").catch(e =>
  console.error("Error importing 'index.js':", e)
);