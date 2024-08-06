
import { logger } from "."

logger(__filename, "   Intersection Observers: Basics")

console.log("Provides a way to asynchronously observe changes in the intersection of a target element with its parent or the viewport,")

console.log("in other words, an API to tell us if an element is on the screen or not")

console.log("\nCheck out '03.IntersectionObservers/AdTracking' folder to explore the code (.js)")

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         console.log("AD IS VISIBLE");
//       } else {
//         console.log("AD IS NOT VISIBLE");
//       }
//     });
//   },
//   { threshold: 0.5 } // 50%
// );


console.log("\n'threshold' ➜ trigger the callback when a % of the target is visible")