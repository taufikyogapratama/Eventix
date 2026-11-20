import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
          <Card>
            <CardHeader>
              <CardTitle className="mb-4">
                <div className="flex items-center justify-between">
                  <p className="text-foreground text-base font-semibold">
                    Tiket Dibeli
                  </p>
                  <p className="text-mutedCS text-sm font-normal">
                    15 Mar 2026
                  </p>
                </div>
              </CardTitle>
              <CardDescription>
                View your key metrics and recent project activity. Track
                progress across all your active projects.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              You have 12 active projects and 3 pending tasks.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="Tiket Dibuat">
          <Card>
            <CardHeader>
              <CardTitle>Tiket Dibuat</CardTitle>
              <CardDescription>
                Track performance and user engagement metrics. Monitor trends
                and identify growth opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Page views are up 25% compared to last month.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default Dashboard;
