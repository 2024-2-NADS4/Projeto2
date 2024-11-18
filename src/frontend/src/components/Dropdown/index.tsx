import React, { useState } from "react";
import { CaretDown, CaretUp } from "@phosphor-icons/react";

import {
  Container,
  DropdownButton,
  DropdownContent,
  DropdownItem,
  StatusOrderContainer,
} from "./styles";

interface DropdownProps {
  selectedOption: string;
  onSelectedOption: (item: string) => void;
  hasStatusOrder?: boolean;
  items: string[];
}

export function Dropdown({
  selectedOption,
  onSelectedOption,
  hasStatusOrder,
  items,
}: DropdownProps) {
  const [open, setOpen] = useState(false);

  function handleOpenContent() {
    setOpen((prevState) => !prevState);
  }

  return (
    <Container>
      <DropdownButton type="button" onClick={handleOpenContent}>
        {hasStatusOrder ? (
          <StatusOrderContainer>
            {selectedOption}
          </StatusOrderContainer>
        ) : (
          <span>{selectedOption}</span>
        )}

        {open ? <CaretUp size={20} /> : <CaretDown size={20} />}
      </DropdownButton>

      <DropdownContent isOpen={open}>
        {items.map((item) => (
          <DropdownItem
            selected={item === selectedOption}
            key={item}
            onClick={() => {
              onSelectedOption(item);
              setOpen(false);
            }}
          >   
            {item}
          </DropdownItem>
        ))}
      </DropdownContent>
    </Container>
  );
}
