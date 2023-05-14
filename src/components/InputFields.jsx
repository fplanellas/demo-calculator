import React from "react";
import { TextField } from "@mui/material";

const InputFields = ({ num1, setNum1, num2, setNum2 }) => {
    return (
        <div className="input-group">
            <TextField
                label="put a first number"
                className="input-group__input input-group__input--first"
                type="text"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <TextField
                label="put a second number"
                className="input-group__input"
                placeholder="Put a number"
                type="text"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
        </div>
    );
};

export default InputFields;
