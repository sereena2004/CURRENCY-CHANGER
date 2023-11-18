<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currency Converter</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
            text-align: center;
        }

        header {
            background-color: white;
            color: #003366;
            text-align: center;
            padding: 1em;
        }

        section {
            max-width: 400px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        label {
            display: block;
            margin-bottom: 5px;
        }

        input {
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
            margin-bottom: 10px;
        }

        select {
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
            margin-bottom: 20px;
        }

        button {
            background-color: #0077cc;
            color: #fff;
            padding: 10px;
            cursor: pointer;
            border: none;
            border-radius: 4px;
        }

        .result {
            font-weight: bold;
            margin-top: 10px;
        }
    </style>
</head>

<body>

    <header>
        <h1>Currency Converter</h1>
    </header>

    <section>
        <label for="amount">Amount:</label>
        <input type="number" id="amount" placeholder="Enter Amount">

        <label for="sourceCurrency">From Currency:</label>
        <select id="sourceCurrency">
            <!-- Add more currency options as needed -->
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="INR">INR</option>
            <option value="CAD">CAD</option>
            <option value="AUD">AUD</option>
            <option value="CHF">CHF</option>
       
        
    </select>

        <label for="targetCurrency">To Currency:</label>
        <select id="targetCurrency">
            <!-- Add more currency options as needed -->
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="INR">INR</option>
            <option value="CAD">CAD</option>
            <option value="AUD">AUD</option>
            <option value="CHF">CHF</option>
            <!-- Add more currencies as needed -->
        </select>

        <button onclick="convertCurrency()">Convert</button>
        <p class="result" id="result"></p>
    </section>

    <script>
        async function convertCurrency() {
            const amount = document.getElementById("amount").value;
            const sourceCurrency = document.getElementById("sourceCurrency").value;
            const targetCurrency = document.getElementById("targetCurrency").value;

            const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
            const apiUrl = `https://open.er-api.com/v6/latest/${sourceCurrency}?apikey=${apiKey}`;

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();

                if (data.result === "error") {
                    console.error("Error fetching exchange rates:", data["error-type"]);
                    return;
                }

                const exchangeRate = data.rates[targetCurrency];
                const convertedAmount = amount * exchangeRate;

                document.getElementById("result").innerHTML = `${amount} ${sourceCurrency} is equal to ${convertedAmount.toFixed(2)} ${targetCurrency}`;
            } catch (error) {
                console.error("Error fetching exchange rates:", error);
            }
        }
    </script>
</body>

</html>
