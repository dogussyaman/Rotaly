import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Checkbox } from "./ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Rating, RatingButton } from "./ui/shadcn-io/rating";
import { categories, ratings, filterOrder } from "./filters";

const FormSchema = z.object({
  categories: z.array(z.string()).optional(),
});

const MobileFilter = () => {
  const [open, setOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([50, 100000]);
  const [minPrice, maxPrice] = priceRange;
  const [filters, setFilters] = useState({
    categories: [] as string[],
    ratings: [] as string[],
    priceRange: [50, 100000] as number[],
    other: [] as string[],
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      categories: [],
    },
  });

  const onSubmit = () => {
    console.log("Seçilen kategoriler:", filters.categories);
    console.log("Seçilen değerlendirmeler:", filters.ratings);
    console.log("Seçilen fiyat aralığı:", filters.priceRange);
    console.log("Diğer filtreler:", filters.other);

    setOpen(false);
  };

  const handlePriceRangeChange = (newRange: number[]) => {
    setPriceRange(newRange);
    setFilters({
      ...filters,
      priceRange: newRange,
    });
  };

  const handleClear = () => {
    setFilters({
      categories: [],
      ratings: [],
      priceRange: [50, 100000],
      other: [],
    });
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 50;
    const newRange = [Math.min(value, maxPrice - 1), maxPrice];
    setPriceRange(newRange);

    setFilters({
      ...filters,
      priceRange: newRange,
    });
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 100000;
    const newRange = [minPrice, Math.max(value, minPrice + 1)];
    setPriceRange(newRange);

    setFilters({
      ...filters,
      priceRange: newRange,
    });
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="lg:hidden mb-4">
          Filtrele
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-full max-w-full bg-background">
        <div className="mx-auto w-full">
          <div className="flex justify-between items-center px-4">
            <DrawerTitle>Filtrele</DrawerTitle>
            <DrawerClose asChild>
              <Button variant="outline" onClick={handleClear}>Temizle</Button>
            </DrawerClose>
          </div>
          <DrawerHeader className="mt-0">
            <DrawerTitle>Filteleme seçenekleri</DrawerTitle>
            <DrawerDescription>Filtrele</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0 space-y-6 max-h-[55vh] overflow-y-auto">
            <Accordion
              type="multiple"
              defaultValue={["Kategori", "Değerlendirme", "Fiyat", "other"]}
            >

              <div className="flex flex-col md:flex-row gap-4 w-full">
                <AccordionItem value="Kategori" className="flex-1 md:flex-1">
                <AccordionTrigger>Kategori</AccordionTrigger>
                <AccordionContent>
                  <Form {...form}>
                    <form onSubmit={onSubmit} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="categories"
                        render={() => (
                          <FormItem className="flex flex-col gap-2">
                            {categories.map((cat) => (
                              <FormField
                                key={cat.id}
                                control={form.control}
                                name="categories"
                                render={() => (
                                  <FormItem className="flex items-center space-x-2">
                                    <FormControl>
                                      <Checkbox
                                        checked={filters.categories.includes(
                                          cat.id
                                        )}
                                        className="data-[state=checked]:bg-blue-500 data-[state=checked]:text-white"
                                        onCheckedChange={(checked) => {
                                          setFilters({
                                            ...filters,
                                            categories: checked
                                              ? [
                                                  ...(filters.categories || []),
                                                  cat.id,
                                                ]
                                              : filters.categories?.filter(
                                                  (v) => v !== cat.id
                                                ),
                                          });
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="text-sm flex items-center justify-between gap-2 w-full">
                                      <p>{cat.label}</p>
                                      <p className="text-muted-foreground text-sm">
                                        {`(${cat.piece})`}
                                      </p>
                                    </FormLabel>
                                  </FormItem>
                                )}
                              />
                            ))}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </form>
                  </Form>
                </AccordionContent>
              </AccordionItem>

                <AccordionItem value="Değerlendirme" className="flex-1 md:flex-1">
                <AccordionTrigger>Değerlendirme</AccordionTrigger>
                <AccordionContent>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-4"
                    >
                      <FormField
                        control={form.control}
                        name="categories"
                        render={() => (
                          <FormItem className="flex flex-col gap-2">
                            {ratings.map((rating) => (
                              <FormField
                                key={rating.id}
                                control={form.control}
                                name="categories"
                                render={() => (
                                  <FormItem className="flex items-center space-x-2">
                                    <FormControl>
                                      <Checkbox
                                        checked={filters.ratings.includes(
                                          rating.id
                                        )}
                                        className="data-[state=checked]:bg-blue-500 data-[state=checked]:text-white"
                                        onCheckedChange={(checked) => {
                                          setFilters({
                                            ...filters,
                                            ratings: checked
                                              ? [
                                                  ...(filters.ratings || []),
                                                  rating.id,
                                                ]
                                              : filters.ratings?.filter(
                                                  (v) => v !== rating.id
                                                ),
                                          });
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="text-sm flex items-center justify-between gap-2 w-full">
                                      <div className="flex items-center gap-2">
                                        <p>{rating.label}</p>
                                        <Rating
                                          defaultValue={Number(rating.id)}
                                          readOnly
                                          className="text-yellow-500"
                                        >
                                          {Array.from({ length: 5 }).map(
                                            (_, index) => (
                                              <RatingButton
                                                key={index}
                                                size={10}
                                              />
                                            )
                                          )}
                                        </Rating>
                                      </div>
                                      <p className="text-muted-foreground text-sm">
                                        {`(${rating.piece})`}
                                      </p>
                                    </FormLabel>
                                  </FormItem>
                                )}
                              />
                            ))}
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </form>
                  </Form>
                </AccordionContent>
              </AccordionItem>
              </div>
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <AccordionItem value="Fiyat" className="flex-1 md:flex-1">
                <AccordionTrigger>Fiyat</AccordionTrigger>
                <AccordionContent>
                  <div className="w-full">
                    <div className="w-full flex items-center justify-between gap-2 mb-2">
                      <span className="text-sm text-muted-foreground">50₺</span>
                      <Slider
                        value={filters.priceRange}
                        onValueChange={handlePriceRangeChange}
                        max={40000}
                        min={50}
                        defaultValue={[50, 100000]}
                        step={1}
                        color="blue"
                        className="[&_[role=slider]]:bg-blue-500 [&_[role=slider]]:border-blue-500 [&_[role=slider]]:focus:ring-blue-500 cursor-pointer"
                      />
                      <span className="text-sm text-muted-foreground">
                        100.000₺
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-4 w-full">
                    <div className="flex flex-col gap-2 w-full">
                      <Label className="text-sm text-muted-foreground text-center">
                        Min.fiyat
                      </Label>
                      <Input
                        value={filters.priceRange[0]}
                        onChange={handleMinPriceChange}
                        type="number"
                        placeholder="50 ₺"
                        min={50}
                        max={maxPrice - 1}
                        className="w-full px-1"
                      />
                    </div>
                    <div className="flex items-end justify-center pb-1">
                      <span className="text-sm text-muted-foreground">-</span>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <Label className="text-sm text-muted-foreground text-center">
                        Max.fiyat
                      </Label>
                      <Input
                        value={filters.priceRange[1]}
                        onChange={handleMaxPriceChange}
                        type="number"
                        placeholder="40000 ₺"
                        min={minPrice + 1}
                        max={40000}
                        className="w-full px-1"
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

                <AccordionItem value="other" className="flex-1 md:flex-1">
                <AccordionTrigger>Diğer</AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {filterOrder.map((item) => (
                      <Button
                        key={item}
                        variant="outline"
                        size="sm"
                        className={`rounded-full mx-2 my-1 px-4 ${
                          filters.other.includes(item)
                            ? "bg-blue-500 hover:bg-blue-600 text-white hover:text-white"
                            : "bg-background text-foreground hover:bg-background hover:text-foreground"
                        }`}
                        onClick={() => {
                          setFilters({
                            ...filters,
                            other: filters.other.includes(item)
                              ? filters.other.filter((v) => v !== item)
                              : [...(filters.other || []), item],
                          });
                        }}
                      >
                        {item}
                      </Button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              </div>
            </Accordion>
          </div>
          <DrawerFooter className="bg-background pb-4">
            <Button
              className="w-full"
              onClick={() => form.handleSubmit(onSubmit)()}
            >
              Filtrele
            </Button>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileFilter;
