<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Smecube Dashboard</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Sidebar -->
  <aside class="sidebar">
    <h2 class="logo">🧩 Smecube</h2>
    <ul class="menu">
      <li class="active"><i class="fas fa-home"></i> Dashboard</li>
      <li><i class="fas fa-briefcase"></i> Projects</li>
      <li><i class="fas fa-chart-line"></i> Analytics</li>
      <li><i class="fas fa-cog"></i> Settings</li>
    </ul>
  </aside>

  <!-- Main Content -->
  <div class="main-content">
    <header>
      <h1>Dashboard Overview</h1>
      <div class="user">
        <img src="https://i.pravatar.cc/40" alt="User">
        <span>Admin</span>
      </div>
    </header>

    <section class="cards">
      <div class="card">
        <h3>Total Clients</h3>
        <p id="clientsCount">0</p>
      </div>
      <div class="card">
        <h3>Projects</h3>
        <p id="projectsCount">0</p>
      </div>
      <div class="card">
        <h3>Revenue</h3>
        <p id="revenue">$0</p>
      </div>
    </section>

    <section class="chart">
      <h2>Monthly Growth</h2>
      <canvas id="growthChart"></canvas>
    </section>
  </div>

  <script src="https://kit.fontawesome.com/a2e0b45a6b.js" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script src="script.js"></script>
</body>
</html>
