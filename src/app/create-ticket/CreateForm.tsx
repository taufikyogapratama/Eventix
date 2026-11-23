"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon } from "lucide-react";
import React from "react";

function formatDate(date: Date | undefined) {
  if (!date) {
    return "";
  }
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
function isValidDate(date: Date | undefined) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

type props = {
  activation: boolean;
};

const CreateForm = (props: props) => {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [month, setMonth] = React.useState<Date | undefined>(date);
  const [value, setValue] = React.useState(formatDate(date));
  return (
    <Field>
      <FieldLabel htmlFor="event_name">
        Nama Acara<span className="text-destructive">*</span>
      </FieldLabel>
      <Input
        id="event_name"
        type="text"
        placeholder="Masukkan nama acara"
        required
      />
      <div className="flex gap-4 flex-wrap">
        <div className="w-full sm:flex-2">
          <FieldLabel htmlFor="event_date">
            Tanggal Acara<span className="text-destructive">*</span>
          </FieldLabel>
          <InputGroup>
            <InputGroupInput
              id="event_date"
              value={value}
              // placeholder="June 01, 2025"
              required
              onChange={(e) => {
                const date = new Date(e.target.value);
                setValue(e.target.value);
                if (isValidDate(date)) {
                  setDate(date);
                  setMonth(date);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setOpen(true);
                }
              }}
            />
            <InputGroupAddon align="inline-end">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger
                  render={
                    <InputGroupButton
                      id="date-picker"
                      variant="ghost"
                      size="icon-xs"
                      aria-label="Select date"
                    >
                      <CalendarIcon />
                      <span className="sr-only">Select date</span>
                    </InputGroupButton>
                  }
                />
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="end"
                  alignOffset={-8}
                  sideOffset={10}
                >
                  <Calendar
                    mode="single"
                    selected={date}
                    month={month}
                    onMonthChange={setMonth}
                    disabled={{ before: new Date() }}
                    onSelect={(date) => {
                      setDate(date);
                      setValue(formatDate(date));
                      setOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div className="flex w-full sm:w-auto sm:flex-2 gap-4">
          <div className="flex-1">
            <FieldLabel htmlFor="start_time">
              Waktu Mulai<span className="text-destructive">*</span>
            </FieldLabel>
            <Input
              type="time"
              id="start_time"
              step="1"
              required
              // defaultValue=""
              className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
            />
          </div>

          <div className="flex-1">
            <FieldLabel htmlFor="end_time">Waktu Selesai</FieldLabel>
            <Input
              type="time"
              id="end_time"
              step="1"
              // defaultValue=""
              className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
            />
          </div>
        </div>
      </div>

      <FieldLabel htmlFor="description">Deskripsi Acara</FieldLabel>
      <Textarea
        id="description"
        placeholder="Jelaskan detail acara, agenda, pembicara, dll."
        rows={4}
      />
      <FieldDescription>Opsional. Maksimal 2000 karakter.</FieldDescription>

      <div className="flex w-full sm:w-auto sm:flex-2 gap-4">
        <div className="flex-1">
          <FieldLabel htmlFor="quota">Kuota Tiket</FieldLabel>
          <Input id="quota" type="number" placeholder="Contoh: 100" />
        </div>

        <div className="flex-1">
          <FieldLabel htmlFor="price">
            Harga Tiket (Rp)<span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            id="price"
            type="number"
            placeholder={props.activation ? "example: 25000" : "Gratis"}
            disabled={!props.activation}
            required
          />
          <FieldDescription className={props.activation ? "hidden" : ""}>
            Aktifkan pencairan dana di Pengaturan untuk mengatur harga.
          </FieldDescription>
        </div>
      </div>
      <Button type="submit" className="w-full mt-12">
        Buat Tiket
      </Button>
    </Field>
  );
};

export default CreateForm;
