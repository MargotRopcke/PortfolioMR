---
name: Cocktail Shaker
image: img/cocktailshake.png
categories: ["Development"]
madeWith: ["Figma", "Illustrator", "Photoshop"]
assignment: "Create a real-time web application where a smartphone acts as a remote controller for a desktop browser experience. The setup uses WebSockets for initial signaling and QR-code pairing, establishing a peer-to-peer WebRTC data channel for low-latency control."
---

I created Cocktail Mixer, an interactive multi-device web app where a smartphone acts as a physical shaker and glass. Users pair their mobile device to a desktop display via QR code and a WebRTC data channel. Using Node.js and Socket.io for signaling, the mobile interface streams real-time sensor data—using the accelerometer for shake mixing (with spill detection for over-shaking) and the gyroscope to simulate drinking—triggering dynamic visuals, recipes, and audio feedback on the desktop screen.