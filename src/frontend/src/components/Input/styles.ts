import { styled } from "@stitches/react";

export const InputContainer = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: "8px",

  '@media print': {
    visibility: 'hidden',
  }
});

export const Label = styled("label", {
  fontWeight: 'bold',
  fontSize: "0.9375rem",
  color: "$light-black",
});

export const TheInput = styled("input", {
  width: "100%",
  height: "42px",
  fontSize: "1rem",
  color: "$light-black",
  padding: "12px 14px",
  borderRadius: "5px",
  border: '1px solid $black',
  backgroundColor: "$white",
  boxShadow:' 0px 4px 10px rgba(0, 0, 0, 0.25)',
  
  "&::placeholder": {
    color: "$light-black",
    fontSize: "0.875rem",
  },
  "&[type=number]::-webkit-inner-spin-button, &[type=number]::-webkit-outer-spin-button": {
    WebkitAppearance: "none",
    margin: 0,
  },
});


