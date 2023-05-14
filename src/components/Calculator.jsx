import { Typography } from "@mui/material";
import InputFields from "./InputFields";
import OperationButtons from "./OperationButtons";
import useCalculator from "./hook/useCalculator";
import "../css/App.css";

const Calculator = () => {
    const { num1, setNum1, num2, setNum2, result, error, calculate } = useCalculator();

    return (
        <div className="container">
            <Typography variant="h1">Calculator</Typography>
            <InputFields num1={num1} setNum1={setNum1} num2={num2} setNum2={setNum2} />
            <OperationButtons calculate={calculate} />
            {error && (
                <Typography className="error" color="error">
                    Error: {error}
                </Typography>
            )}
            <Typography className="result">result: {result}</Typography>
        </div>
    );
};

export default Calculator;
