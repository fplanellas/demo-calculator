import React from "react";
import { Button } from "@mui/material";

const OperationButtons = ({ calculate }) => {
    return (
        <div className="button-group">
            <Button
                className="button-group__button"
                variant="outlined"
                onClick={() => calculate("+")}
            >
                +
            </Button>
            <Button
                className="button-group__button"
                variant="outlined"
                onClick={() => calculate("-")}
            >
                -
            </Button>
            <Button
                className="button-group__button"
                variant="outlined"
                onClick={() => calculate("*")}
            >
                *
            </Button>
            <Button
                className="button-group__button"
                variant="outlined"
                onClick={() => calculate("/")}
            >
                /
            </Button>
        </div>
    );
};

export default OperationButtons;
