import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "hibb2s",
  e2e: {
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
      chromeWebSecurity: false
    },
    env:{
      qaurl: "https://pathway.parallel-staging.com/",
    }
   
  },
  

});


