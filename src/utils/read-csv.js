export const writeRecords = (data) => {
  try {
    const csvRows = [];

    const headers = ["Tartib raqami", "F.I.O", "Nomeri", "Ish joyi"];

    csvRows.push(headers.join(","));

    for (const d of data) {
      const values = Object.values(d).join(",");
      console.log(values, "values");
      csvRows.push(values);
    }

    return csvRows.join("\n");
  } catch (error) {
    console.log(error);
  }
};

export const download = function (data) {

  const blob = new Blob([data], { type: "text/csv" });

  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");

  a.setAttribute("href", url);

  a.setAttribute("download", "users.csv");

  a.click();
};
