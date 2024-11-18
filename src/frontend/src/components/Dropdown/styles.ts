import { styled } from "@stitches/react";

export const Container = styled("div", {
  position: "relative",

  height: "36px",
  width: "100%",
  maxWidth: "170px",
  padding: "8px 16px",
  borderRadius: "8px",
  border: "none",

  fontFamily: "Roboto",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "0.875rem",

  backgroundColor: "$blue-button",
  color: "#fff",
});

export const DropdownButton = styled("button", {
  fontSize: "0.875rem",
  color: "#fff",
  width: "100%",

  background: "transparent",
  border: "none",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  "> svg": {
    fontWeight: "bold",
  },
});

export const DropdownContent = styled("ul", {
  borderRadius: '5px',

  variants: {
    isOpen: {
      true: {
        maxHeight: "200px",
        opacity: 1,
        transform: "translateY(0)",
      },
      false: {
        maxHeight: "0",
        opacity: 0,
        transform: "translateY(-10px)",
      },
    },
  },
  transition: "max-height 0.1s, opacity 0.1s, transform 0.1s",
  overflow: "hidden",

  position: "absolute",
  top: '36px',
  left: '0px',
  zIndex: 999,
  width: '100%',
  background: "transparent",
  listStyle: "none",

  borderBottomLeftRadius: "8px",
  borderBottomRightRadius: "8px",

});

export const DropdownItem = styled("li", {
  borderBottom: "1px solid white",

  display: "flex",
  alignItems: "center",
  gap: "8px",

  padding: "8px 16px",


  variants: {
    selected: {
      true: {
        backgroundColor: "$blue-button",
      },
      false: {
        backgroundColor: "#11314F",
      },
    },
  },
});

export const StatusOrderContainer = styled("div", {
  display: "flex",
  gap: "8px",
  alignItems: "center",
});

