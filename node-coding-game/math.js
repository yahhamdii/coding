const express = require("express");

/**
 * 
 * @returns {express.Application}
 */
const createExpressApp=()=>{
    const app = express();
    try{
        app.get(":/expression", (req, res)=>{
            const expression = req.params.expression;
            res.send(expression); 
        })
    }catch(e){
        console.error("VALIDATION_ERROR", e.message);
    }
    return app;
}
const expressApp = createExpressApp();

expressApp.listen(3000, ()=>{
    console.log("listning")
})