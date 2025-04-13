"use client"
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { FixturesList } from "@/components/fixtures-list";
import { MainNav } from "@/components/main-nav";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
        </div>
      </div>
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex flex-col items-start justify-between space-y-2 md:flex-row md:items-center md:space-y-0">
          <h2 className="text-3xl font-bold tracking-tight">Sports Fixtures</h2>
          <div className="flex items-center space-x-2">
            <CalendarDateRangePicker />
          </div>
        </div>
        <Tabs defaultValue="football" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4 md:w-auto">
            <TabsTrigger value="football">Football</TabsTrigger>
            <TabsTrigger value="basketball">Basketball</TabsTrigger>
            <TabsTrigger value="tennis">F1</TabsTrigger>
          </TabsList>
          <TabsContent value="football" className="space-y-4">
            <FixturesList sport="football" />
          </TabsContent>
          <TabsContent value="basketball" className="space-y-4">
            <FixturesList sport="basketball" />
          </TabsContent>
          <TabsContent value="f1" className="space-y-4">
            <FixturesList sport="F1" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
