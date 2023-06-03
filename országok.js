fetch("országok.json")
  .then((response) => response.json())
  .then((data) => {
    const orszagokDiv = document.getElementById("orszagok");
    const orszagok = data.orszagok;

    orszagok.forEach((orszag) => {
      const orszagDiv = document.createElement("div");
      orszagDiv.innerHTML = `
        <table><tr><th>Ország</th><th id="terulet">Terület</th><th id="nepesseg">Népesség</th><th id="gdp">GDP</th><th id="zaszlo">Zászló színei</th></tr>
        <tr><td><h2>${orszag.orszag}</h2></td>
        <td>${orszag.terulet} km²</td>
        <td>${orszag.nepesseg}</td>
        <td>${orszag.gdp}</td>
        <td>${orszag.zaszlo}</td>
        </tr>
        </table>
      `;
      orszagokDiv.appendChild(orszagDiv);
    });
  });
