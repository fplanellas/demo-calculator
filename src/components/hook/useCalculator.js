import { useState } from "react";

const useCalculator = () => {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");
    const [error, setError] = useState("");

    const calculate = (operation) => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if (isNaN(n1) || isNaN(n2)) {
            setResult("");
            setError("Please enter two valid numbers");
            return;
        }

        setError(""); // reset error mess

        switch (operation) {
            case "+":
                setResult(n1 + n2);
                break;
            case "-":
                setResult(n1 - n2);
                break;
            case "*":
                setResult(n1 * n2);
                break;
            case "/":
                if (n2 !== 0) {
                    setResult(n1 / n2);
                } else {
                    setResult("");
                    setError("Cannot be divided by zero");
                }
                break;
            default:
                setResult("");
                setError("Operation not supported");
        }
    };

    return { num1, setNum1, num2, setNum2, result, error, calculate };
};

export default useCalculator;
