"use client";
import { ComboboxOption } from "@/app/_components/ui/combobox";
import { Button } from "../../_components/ui/button";
import { Sheet, SheetTrigger } from "../../_components/ui/sheet";
import UpsertSheetContent from "../_components/upsert-sheet-content";
import { Product } from "@/app/generated/prisma";
import { useState } from "react";

interface CreateSaleButtonProps {
  products: Product[];
  productOptions: ComboboxOption[];
}

const CreateSaleButton = (props: CreateSaleButtonProps) => {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);
  return (
    <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
      <SheetTrigger asChild>
        <Button>Nova Venda</Button>
      </SheetTrigger>
      <UpsertSheetContent setSheetIsOpen={setSheetIsOpen} {...props} />
    </Sheet>
  );
};

export default CreateSaleButton;
