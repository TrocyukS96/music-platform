'use client'
import { Button, Grid, TextField } from "@radix-ui/themes";
import { CiSearch } from "react-icons/ci";
import "@radix-ui/themes/styles.css";

const Header = () => {
  return (
    <header className="h-12 p-2 bg-slate-300" >
      <Grid columns="2" width="auto" className="grid-cols-header gap-2" >
        <TextField.Root className="px-1 rounded-md">
          <TextField.Slot>
            <CiSearch />
          </TextField.Slot>
          <TextField.Input placeholder="Поиск" radius="large" className=" rounded-md h-8"  />
        </TextField.Root>
        <Button variant="classic" color="indigo" className="rounded-md h-8">
          Войти
        </Button>
      </Grid>
    </header>
  );
};

export default Header;
