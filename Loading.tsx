//  useEffect(() => {
//   const handleLoad = () => {
//     const entries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
//     if (entries.length > 0) {
//       const entry = entries[0];
//       console.log(`DOMContentLoaded Event Start: ${entry.domContentLoadedEventStart.toFixed(2)}ms`);
//       console.log(`DOMContentLoaded Event End: ${entry.domContentLoadedEventEnd.toFixed(2)}ms`);
//       const processingTime = entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart;
//       console.log(`✅ DOMContentLoaded Processing Time: ${processingTime.toFixed(2)}ms`);
//       setlodaingperfamnce(false);
//     }
//   };

//   if (document.readyState === "complete") {
   
//     handleLoad();
//   } else {
//     window.addEventListener("load", handleLoad);
//   }

//   return () => {
 
//     window.removeEventListener("load", handleLoad);
//   };
// }, []);
