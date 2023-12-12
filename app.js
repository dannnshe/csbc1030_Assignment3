const fs = require("fs").promises;

async function processNumbers() {
  try {
    // Read the input file
    const rawData = await fs.readFile(
      "samples/sample_input_numbers.json",
      "utf8"
    );
    const data = JSON.parse(rawData);

    // Access the array from the 'number' key in the JSON object
    const numbers = data.number;

    // Check if 'numbers' is an array
    if (!Array.isArray(numbers)) {
      throw new Error('The "number" key does not contain an array');
    }

    // Multiply each number by two
    const processedNumbers = numbers.map((number) => number * 2);

    // Write to a new file with formatted JSON
    await fs.writeFile(
      "samples/sample_output_numbers.json",
      JSON.stringify(processedNumbers, null, 4)
    );

    console.log(
      "Processing completed. Output written to sample_output_numbers.json"
    );
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

processNumbers();
