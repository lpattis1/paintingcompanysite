const map = L.map("map").setView([29.2969763, -94.8056725], 13);

// This tile layer is basically the appearance of the map. You can change it if you want, which we will (just google map appearances you want)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([29.2969763, -94.8056725])
  .addTo(map)
  .bindPopup("Find us on Broadway Street!")
  .openPopup();
