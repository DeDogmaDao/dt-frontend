import '@testing-library/jest-dom/extend-expect';


global.IntersectionObserver = class IntersectionObserver {
    constructor() {}
  
    disconnect() {
      return null;
    }
  
    observe() {
      return null;
    }
  
    takeRecords() {
      return null;
    }
  
    unobserve() {
      return null;
    }
  };

