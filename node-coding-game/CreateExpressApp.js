const express = require('express');

function createExpressApp() {
    const app = express();

    // Middleware to handle the GET requests
    app.get('/*', (req, res) => {
        const expression = req.path.slice(1); // Extract the expression from the URL path
        
        // Validate the expression: only allow digits and mathematical operators
        if (!/^[\d+\-*/.() ]+$/.test(expression)) {
            return res.status(500).json({ error: "VALIDATION_ERROR" });
        }

        try {
            // Evaluate the expression safely
            const result = eval(expression); // Note: eval can be dangerous, use with caution
            return res.status(200).json({ result });
        } catch (error) {
            return res.status(500).json({ error: "VALIDATION_ERROR" });
        }
    });

    return app;
}

// Example usage:
const app = createExpressApp();
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
