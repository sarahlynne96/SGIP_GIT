<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>California SGIP Eligibility & Rebate Estimator (v17)</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/html2pdf.js/dist/html2pdf.bundle.min.js">
  <style>
    :root{--primary:#fdb813;--secondary:#003c71;--accent:#005eb8;--bg:#f9f9f9;--text:#333;--muted:#666;--card:#fff}
    body{font-family:Arial,Helvetica,sans-serif;background:var(--bg);color:var(--text);padding:1rem;}
    .wrapper{max-width:960px;margin:auto;padding:1rem}
    h1{text-align:center;color:var(--primary);margin-bottom:1rem;font-size:2rem}
    .card{background:var(--card);box-shadow:0 2px 6px rgba(0,0,0,0.1);border-radius:6px;padding:1rem;margin-bottom:1rem}
    label{display:block;font-weight:bold;color:var(--secondary);margin-top:1rem;}
    select,input{width:100%;padding:10px;border-radius:4px;border:1px solid #ccc;margin-top:5px;}
    button{padding:12px;font-weight:bold;border-radius:4px;cursor:pointer;}
    .primary-btn{background:var(--primary);color:#fff;border:none;}
    .secondary-btn{background:transparent;color:var(--secondary);border:1px solid var(--secondary);}
    .result,.incomeResult{display:none;margin-top:1rem;padding:1rem;background:#f0f8ff;border-left:5px solid var(--primary);border-radius:4px;}
  </style>
</head>
<body>
<div class="wrapper">
  <h1>California SGIP Eligibility & Rebate Estimator</h1>
  <form id="calcForm">

    <div class="card">
      <label for="address">Installation address (optional)</label>
      <input id="address" placeholder="e.g., 1234 Main St, Fresno, CA">

      <label for="utility">Utility provider</label>
      <select id="utility" required>
        <option value="">Select your utility</option>
        <option>CSE</option><option>SCE</option><option>SCG</option><option>PG&E</option><option>LADWP</option>
      </select>

      <label for="county">County of installation</label>
      <select id="county" required></select>

      <label for="hhSize">Number of people in your household</label>
      <input id="hhSize" type="number" min="1" max="8" value="4">

      <label for="hhIncome">Annual household income (optional)</label>
      <input id="hhIncome" type="number" placeholder="e.g., 95000">
    </div>

    <div class="card">
      <label for="custType">Type of customer</label>
      <select id="custType" required>
        <option value="">Select customer type</option>
        <option value="single">Single-Family Home</option>
        <option value="multi">Multifamily Home</option>
        <option value="nonres">Business or Non-Residential</option>
      </select>

      <label for="critFlag">Medical baseline or critical well-pump customer?</label>
      <select id="critFlag" required>
        <option value="">Select option</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <label for="dacFlag">Located in a Disadvantaged Community or High Fire Threat District?</label>
      <select id="dacFlag" required>
        <option value="">Select option</option>
        <option value="yes">Yes</option>
        <option value="no">No / Unsure</option>
      </select>

      <label for="pspsFlag">Experienced 2+ PSPS shut-offs?</label>
      <select id="pspsFlag" required>
        <option value="">Select option</option>
        <option value="yes">Yes</option>
        <option value="no">No / Unsure</option>
      </select>

      <label for="sjvFlag">San Joaquin Valley pilot city?</label>
      <select id="sjvFlag" required>
        <option value="">Select option</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    </div>

    <div class="card">
      <label for="storageKWh">Battery storage capacity (kWh)</label>
      <input id="storageKWh" type="number" min="0" step="0.1" required>

      <label for="solarKW">Solar system size (kW, optional)</label>
      <input id="solarKW" type="number" min="0" step="0.1">
    </div>

    <div class="card">
      <label for="contactName">Your full name</label>
      <input id="contactName" required>

      <label for="contactPhone">Your phone number</label>
      <input id="contactPhone" type="tel" required>

      <label for="contactEmail">Your email address</label>
      <input id="contactEmail" type="email" required>
    </div>

    <button type="submit" class="primary-btn">Calculate & Download PDF</button>
  </form>

  <div id="incomeResult" class="incomeResult"></div>
  <div id="result" class="result"></div>

</div>

<script src="https://cdn.jsdelivr.net/npm/html2pdf.js@0.9.2/dist/html2pdf.bundle.min.js"></script>
<script>
  // Existing JavaScript logic remains unchanged.
  // PDF generation logic:
  document.getElementById('calcForm').addEventListener('submit', function(e){
    e.preventDefault();
    const element = document.querySelector('.wrapper');
    html2pdf().from(element).save('SGIP_Calculator_Result.pdf');
  });
</script>
</body>
</html>