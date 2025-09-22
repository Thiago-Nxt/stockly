"use client";
import { Button } from "@/app/_components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../_components/ui/dialog";
import { PlusIcon } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import { NumericFormat } from "react-number-format";

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "O nome do produto é obrigatório" }),
  price: z.number().min(0.1, { message: "O preço do produto é obrigatório" }),
  stock: z
    .number()
    .positive()
    .int()
    .min(0, { message: "A quantidade em estoque é obrigatória" }),
});

type FormSchema = z.infer<typeof formSchema>;

const AddProductButton = () => {
  const form = useForm<FormSchema>({
    shouldUnregister: true,
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: 0,
      stock: 1,
    },
  });

  function onSubmit(data: FormSchema) {
    console.log(data);
  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="gap-2">
            <PlusIcon size={20} />
            Novo produto
          </Button>
        </DialogTrigger>
        <DialogContent>
          <Form {...form}>
            <DialogHeader>
              <DialogTitle>Criar Produto</DialogTitle>
              <DialogDescription>
                Insira as informações abaixo
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome do produto</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite o nome do produto"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preço</FormLabel>
                    <FormControl>
                      <NumericFormat
                        thousandSeparator="."
                        decimalSeparator=","
                        fixedDecimalScale
                        decimalScale={2}
                        prefix="R$ "
                        allowNegative={false}
                        customInput={Input}
                        onValueChange={(values) => {
                          field.onChange(values.floatValue);
                        }}
                        {...field}
                        onChange={() => {}}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estoque</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="digite a quantidade do produto"
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button variant="outline" type="reset">
                Limpar
              </Button>
              <Button type="submit">Criar Produto</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddProductButton;
