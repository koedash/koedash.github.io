<!DOCTYPE html>
<html>
<head>
  <title>Library Helper</title>
  <style>
    :root {
      --bg-color: #f0f8ff;  /* Customizable BG */
      --button-bg: rgba(255, 255, 255, 0.7);  /* Transparent buttons */
    }
    body {
      font-family: Arial;
      margin: 0;
      padding: 20px;
      background: var(--bg-color);
    }
    button, .card {
      background: var(--button-bg);
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 10px;
      margin: 5px;
      backdrop-filter: blur(5px);
    }
    #rentalInterface {
      display: none;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      z-index: 1000;
    }
    .scanner-input {
      margin: 10px 0;
      padding: 8px;
      width: 200px;
    }
  </style>
</head>
<body>
  <h1>Library Helper</h1>
  <button onclick="toggleRentalInterface()">Manage Rentals</button>

  <!-- Rental Interface (Hidden by Default) -->
  <div id="rentalInterface">
    <h2>Rental Tracker</h2>
    <button onclick="filterRentals('day')">Today</button>
    <button onclick="filterRentals('week')">This Week</button>
    <button onclick="filterRentals('month')">This Month</button>
    
    <div id="rentalList"></div>
    
    <h3>Scan Book/Student</h3>
    <input type="text" id="bookId" class="scanner-input" placeholder="Scan Book ID">
    <input type="text" id="studentId" class="scanner-input" placeholder="Scan Student ID">
    <button onclick="processRental()">Finish</button>
    <button onclick="toggleRentalInterface()">Close</button>
  </div>

  <script src="app.js"></script>
</body>
</html>
