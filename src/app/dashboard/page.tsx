import { Button } from "@/components/ui/button";
import { Copy, Plus, Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Status from "@/components/Status";

const Dashboard = () => {
  return (
    <main className="pt-18">
      {/* <form action="/auth/signout" method="post">
        <button className="button block" type="submit">
          Sign out
        </button>
      </form> */}
      <div className="max-w-280 mx-auto px-6 md:flex items-center justify-between py-6">
        <div className="mb-4 md:mb-0">
          <h1 className="text-foreground text-[1.75rem] font-bold mb-0.5">
            Dashboard
          </h1>
          <p className="text-base font-normal text-mutedCS">
            Kelola tiket dan acara favoritmu di
            <br className="md:hidden" /> satu tempat.
          </p>
        </div>
        <div className="md:flex gap-4">
          <Button className="flex mb-4 md:mb-0 gap-2 justify-center items-center w-full md:w-auto">
            <Plus /> Buat Tiket
          </Button>
          <Button
            className="flex gap-2 justify-center items-center w-full md:w-auto"
            variant="outline"
          >
            <Search />
            Cari Tiket
          </Button>
        </div>
      </div>

      {/* <Tabs defaultValue="Tiket Dibeli" className="w-100"> */}
      <Tabs defaultValue="Tiket Dibeli" className="max-w-280 mx-auto px-6">
        <TabsList variant="line">
          <TabsTrigger value="Tiket Dibeli">Tiket Dibeli</TabsTrigger>
          <TabsTrigger value="Tiket Dibuat">Tiket Dibuat</TabsTrigger>
        </TabsList>
        <TabsContent
          value="Tiket Dibeli"
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <Card className="hover:shadow-md/10">
            <CardHeader className="">
              <CardTitle className="mb-0">
                <div className="flex items-center justify-between">
                  <p className="text-foreground text-base font-semibold">
                    Judul tiket
                  </p>
                  <p className="text-mutedCS text-sm font-normal">
                    15 Mar 2026
                  </p>
                </div>
              </CardTitle>
            </CardHeader>
            <Table className="px-6">
              <TableBody>
                <TableRow className="hover:bg-transparent border-0">
                  <TableCell className="pl-5 w-1/3 text-mutedCS">
                    Lokasi
                  </TableCell>
                  <TableCell className="pr-5 w-2/3 font-medium">
                    JIExpo Kemayoran, Jakarta
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-transparent border-0">
                  <TableCell className="pl-5 w-1/3 text-mutedCS">
                    Type
                  </TableCell>
                  <TableCell className="pr-5 w-2/3 font-medium">
                    Offline
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-transparent border-0">
                  <TableCell className="pl-5 w-1/3 text-mutedCS">
                    Status
                  </TableCell>
                  <TableCell className="pr-5 w-2/3 font-normal">
                    <Status status="expired" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <hr />
            <div className="px-5 flex justify-end">
              <Button
                className="w-auto flex gap-2"
                variant="outline"
                size="small"
              >
                <Copy />
                Copy Link
              </Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent
          value="Tiket Dibuat"
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <Card className="hover:shadow-md/10">
            <CardHeader className="">
              <CardTitle className="mb-0">
                <div className="flex items-center justify-between">
                  <p className="text-foreground text-base font-semibold">
                    Judul tiket
                  </p>
                  <p className="text-mutedCS text-sm font-normal">
                    15 Mar 2026
                  </p>
                </div>
              </CardTitle>
            </CardHeader>
            <Table className="px-6">
              <TableBody>
                <TableRow className="hover:bg-transparent border-0">
                  <TableCell className="pl-5 w-1/3 text-mutedCS">
                    Lokasi
                  </TableCell>
                  <TableCell className="pr-5 w-2/3 font-medium">
                    JIExpo Kemayoran, Jakarta
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-transparent border-0">
                  <TableCell className="pl-5 w-1/3 text-mutedCS">
                    Type
                  </TableCell>
                  <TableCell className="pr-5 w-2/3 font-medium">
                    Offline
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-transparent border-0">
                  <TableCell className="pl-5 w-1/3 text-mutedCS">
                    Status
                  </TableCell>
                  <TableCell className="pr-5 w-2/3 font-normal">
                    <Status status="expired" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <hr />
            <div className="px-5 flex justify-end">
              <Button
                className="w-auto flex gap-2"
                variant="outline"
                size="small"
              >
                <Copy />
                Copy Link
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default Dashboard;
