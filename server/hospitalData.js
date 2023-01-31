const axios = require("axios");
const { JSDOM } = require("jsdom");

async function getHospitalData() {
  const { data: html } = await axios.post(
    "https://dashboard.covid19.ap.gov.in/ims/hospbed_reports/process.php",
    "hospdata=1&district=505&status=",
    {
      credentials: "omit",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0",
        Accept: "text/html, */*; q=0.01",
        "Accept-Language": "en-US,en;q=0.5",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "Sec-GPC": "1",
      },
    }
  );

  const {
    window: { document },
  } = new JSDOM(html);
  const table = document.getElementById("dataTable");
  const headings = table.querySelectorAll("thead > tr:nth-child(1) td");
  const headingsArray = [];
  const hospitals = [];

  headings.forEach((headingElement, index) => {
    if (index === 0) return;
    headingsArray.push(headingElement.textContent);
  });
  const tc = (el) => el.textContent;
  const tableData = table.querySelector("tbody:nth-child(2)");
  const rows = tableData.querySelectorAll("tr");
  rows.forEach((row) => {
    const columns = row.querySelectorAll("td");
    const hospital = {};
    hospital["name"] = tc(columns[1]);
    hospital["phone"] = tc(columns[2]);
    hospital["officerPhone"] = tc(columns[3]);
    hospital["status"] = tc(columns[4]);
    hospital["icu-beds"] = [tc(columns[5]), tc(columns[6]), tc(columns[7])];
    hospital["02-beds"] = [tc(columns[8]), tc(columns[9]), tc(columns[10])];
    hospital["general-beds"] = [
      tc(columns[11]),
      tc(columns[12]),
      tc(columns[13]),
    ];
    hospital["ventilator"] = [
      tc(columns[14]),
      tc(columns[15]),
      tc(columns[16]),
    ];
    hospitals.push(hospital);
  });

  return hospitals;
}

module.exports = getHospitalData;
