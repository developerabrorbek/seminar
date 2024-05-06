export const writeRecords = (data) => {
  try {
    // Empty array for storing the values
    const csvRows = [];

    // Headers is basically a keys of an object
    // which is id, name, and profession
    const headers = ["Tartib raqami", "F.I.O", "Nomeri", "Ish joyi"];

    // As for making csv format, headers must
    // be separated by comma and pushing it
    // into array
    csvRows.push(headers.join(","));

    // Pushing Object values into array
    // with comma separation
    for (const d of data) {
      const values = Object.values(d).join(",");
      console.log(values, "values");
      csvRows.push(values);
    }

    // Returning the array joining with new line
    return csvRows.join("\n");
  } catch (error) {
    console.log(error);
  }
};

export const download = function (data) {
  // Creating a Blob for having a csv file format
  // and passing the data with type
  const blob = new Blob([data], { type: "text/csv" });

  // Creating an object for downloading url
  const url = window.URL.createObjectURL(blob);

  // Creating an anchor(a) tag of HTML
  const a = document.createElement("a");

  // Passing the blob downloading url
  a.setAttribute("href", url);

  // Setting the anchor tag attribute for downloading
  // and passing the download file name
  a.setAttribute("download", "users.csv");

  // Performing a download with click
  a.click();
};
