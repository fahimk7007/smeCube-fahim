document.addEventListener("DOMContentLoaded", () => {
  // Dashboard numbers animation
  const clients = document.getElementById("clientsCount");
  const projects = document.getElementById("projectsCount");
  const revenue = document.getElementById("revenue");

  let c = 0, p = 0, r = 0;
  const interval = setInterval(() => {
    if (c < 125) clients.textContent = ++c;
    if (p < 42) projects.textContent = ++p;
    if (r < 58000) {
      r += 1000;
      revenue.textContent = "$" + r.toLocaleString();
    }
    if (c >= 125 && p >= 42 && r >= 58000) clearInterval(interval);
  }, 50);

  // Chart.js example
  const ctx = document.getElementById("growthChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [{
        label: "Growth",
        data: [10, 20, 35, 50, 65, 80],
        borderColor: "#0056b3",
        fill: false,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, ticks: { stepSize: 5 } }
      }
    }
  });
});
