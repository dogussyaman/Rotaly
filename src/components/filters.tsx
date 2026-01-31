"use client";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Rating, RatingButton } from "./ui/shadcn-io/rating";
import { Slider } from "@/components/ui/slider";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  setCategories,
  setRatings,
  setPriceRange,
  setFeatures,
  clearFilters,
} from "@/store/filter/filter-slice";
import { MinusIcon } from "lucide-react";

export const filterOrder = [
  // RoomFeature
  "WIFI",
  "AIR_CONDITIONER",
  "TV",
  "MINIBAR",
  "SAFE_BOX",
  "BALCONY",
  "ROOM_SERVICE",
  "BATH_TUB",
  "HAIR_DRYER",
  // HotelFeatures
  "POOL",
  "SPA",
  "PARKING",
  "GYM",
  "PET_FRIENDLY",
  "RESTAURANT",
  "BREAKFAST_INCLUDED",
  "CANCEL_POLICY",
];

export const categories = [
  { id: "HOTEL", label: "Otel", piece: 100 },
  { id: "APARTMENT", label: "Daire", piece: 100 },
  { id: "VILLA", label: "Villa", piece: 100 },
  { id: "BUNGALOW", label: "Bungalov", piece: 100 },
  { id: "HOSTEL", label: "Hostel", piece: 10 },
  { id: "ROOM", label: "Oda", piece: 10 },
  { id: "RESORT", label: "Resort", piece: 15 },
  { id: "CAMP", label: "Kamp", piece: 5 },
] as const;
export const ratings = [
  { id: "5", label: "5", piece: 100 },
  { id: "4", label: "4", piece: 100 },
  { id: "3", label: "3", piece: 100 },
  { id: "2", label: "2", piece: 100 },
  { id: "1", label: "1", piece: 100 },
] as const;

const FormSchema = z.object({
  categories: z.array(z.string()).optional(),
});

export function Filters() {
  const dispatch = useDispatch();
  const filterState = useSelector((state: RootState) => state.filter);
  
  const [minPrice, maxPrice] = filterState.priceRange;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      categories: [],
    },
  });

  const onSubmit = () => {
    console.log("Seçilen kategoriler:", filterState.categories);
    console.log("Seçilen değerlendirme:", filterState.ratings);
    console.log("Seçilen fiyat:", filterState.priceRange);
    console.log("Seçilen diğer:", filterState.features);

    const filterScroll = document.querySelector(".category-page");
    if (filterScroll) {
      filterScroll.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePriceRangeChange = (newRange: number[]) => {
    dispatch(setPriceRange(newRange as [number, number]));
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 50;
    const newRange: [number, number] = [Math.min(value, maxPrice - 1), maxPrice];
    dispatch(setPriceRange(newRange));
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 40000;
    const newRange: [number, number] = [minPrice, Math.max(value, minPrice + 1)];
    dispatch(setPriceRange(newRange));
  };

  return (
    <div className="lg:col-span-1 hidden lg:block">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-foreground">Filtreler</h2>
        <Button 
          variant="outline" 
          size="sm" 
          className="rounded-full"
          onClick={() => dispatch(clearFilters())}
        >
          Temizle
        </Button>
      </div>

      <div className="bg-card rounded-lg shadow-sm border border-border p-6 space-y-4">
        <Accordion
          type="multiple"
          defaultValue={["Kategori", "Değerlendirme", "Fiyat", "other"]}
        >
          <AccordionItem value="Kategori">
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
                                    checked={filterState.categories.includes(
                                      cat.id
                                    )}
                                    className="data-[state=checked]:bg-blue-500 data-[state=checked]:text-white"
                                    onCheckedChange={(checked) => {
                                      const newCategories = checked
                                        ? [...filterState.categories, cat.id]
                                        : filterState.categories.filter((v) => v !== cat.id);
                                      dispatch(setCategories(newCategories));
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

          <AccordionItem value="Değerlendirme">
            <AccordionTrigger>Değerlendirme</AccordionTrigger>
            <AccordionContent>
              <Form {...form}>
                <form onSubmit={onSubmit} className="space-y-4">
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
                                    checked={filterState.ratings.includes(
                                      rating.id
                                    )}
                                    className="data-[state=checked]:bg-blue-500 data-[state=checked]:text-white"
                                    onCheckedChange={(checked) => {
                                      const newRatings = checked
                                        ? [...filterState.ratings, rating.id]
                                        : filterState.ratings.filter((v) => v !== rating.id);
                                      dispatch(setRatings(newRatings));
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
                                          <RatingButton key={index} size={10} />
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

          <AccordionItem value="Fiyat">
            <AccordionTrigger>Fiyat</AccordionTrigger>
            <AccordionContent>
              <div className="w-full">
                <div className="w-full flex items-center justify-between gap-2 mb-2">
                  <div className="w-full flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm text-muted-foreground">50₺</span>
                      <span className="text-sm text-muted-foreground">
                        100.000₺
                      </span>
                    </div>
                    <Slider
                      value={filterState.priceRange}
                      onValueChange={handlePriceRangeChange}
                      max={100000}
                      min={50}
                      defaultValue={[50, 100000]}
                      step={1}
                      color="blue"
                      className="[&_[role=slider]]:bg-blue-500 [&_[role=slider]]:border-blue-500 [&_[role=slider]]:focus:ring-blue-500 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 mt-4 w-full">
                <div className="flex flex-col gap-2 w-full items-center">
                  <Label className="text-sm text-muted-foreground text-center">
                    Min.fiyat
                  </Label>
                  <Input
                    value={filterState.priceRange[0]}
                    onChange={handleMinPriceChange}
                    placeholder="50 ₺"
                    size={20}
                    min={50}
                    max={maxPrice - 1}
                    className="w-3/4 px-1 text-center"
                    inputMode="numeric"
                  />
                </div>
                <div className="flex items-center justify-center h-full pt-6">
                  <MinusIcon className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex flex-col gap-2 w-full items-center">
                  <Label className="text-sm text-muted-foreground text-center">
                    Max.fiyat
                  </Label>
                  <Input
                    value={filterState.priceRange[1]}
                    onChange={handleMaxPriceChange}
                    placeholder="100.000 ₺"
                    min={minPrice + 1}
                    max={100000}
                    className="w-3/4 px-1 text-center"
                    inputMode="numeric"
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="other">
            <AccordionTrigger>Diğer</AccordionTrigger>
            <AccordionContent>
              <div className="">
                {filterOrder.map((item) => (
                  <Button
                    key={item}
                    variant="outline"
                    size="sm"
                    className={`rounded-full mx-2 my-1 px-4 ${
                      filterState.features.includes(item)
                        ? "bg-blue-500 hover:bg-blue-600 text-white hover:text-white"
                        : "bg-background text-foreground hover:bg-background hover:text-foreground"
                    }`}
                    onClick={() => {
                      const newFeatures = filterState.features.includes(item)
                        ? filterState.features.filter((v) => v !== item)
                        : [...filterState.features, item];
                      dispatch(setFeatures(newFeatures));
                    }}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Button variant="outline" className="w-full" onClick={onSubmit}>
          Filtrele
        </Button>
      </div>
    </div>
  );
}
