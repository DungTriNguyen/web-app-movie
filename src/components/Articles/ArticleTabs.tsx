import { useTranslations } from "next-intl";
import CardList from "../CardList";
import SearchBar from "../SearchBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export default function ArticleTabs() {
    const t = useTranslations("academy");
    return (
        <div className="w-full pt-12">
            <Tabs defaultValue="all" className="w-full gap-0 ">
                <div className="max-w-[1440px] mx-auto w-full flex flex-col-reverse md:flex-row items-start justify-between px-4 overflow-x-hidden">
                    <TabsList className="flex gap-4 rounded-none justify-start overflow-x-auto whitespace-nowrap scrollbar-hide w-full md:w-auto">
                        <TabsTrigger
                            value="all"
                            className="text-base font-medium border-b-2 data-[state=active]:border-b-white data-[state=active]:text-white  data-[state=active]:bg-accent transition-colors rounded-none"
                        >
                            {t("tabs.all")}
                        </TabsTrigger>
                        <TabsTrigger
                            value="trending"
                            className="text-base font-medium border-b-2 data-[state=active]:border-b-white data-[state=active]:text-white  data-[state=active]:bg-accent transition-colors rounded-none"
                        >
                            {t("tabs.trending")}
                        </TabsTrigger>
                        <TabsTrigger
                            value="on-chain"
                            className="text-base font-medium border-b-2 data-[state=active]:border-b-white data-[state=active]:text-white  data-[state=active]:bg-accent transition-colors rounded-none"
                        >
                            {t("tabs.on chain")}
                        </TabsTrigger>
                        <TabsTrigger
                            value="listing"
                            className="text-base font-medium border-b-2 data-[state=active]:border-b-white data-[state=active]:text-white  data-[state=active]:bg-accent transition-colors rounded-none"
                        >
                            {t("tabs.listing")}
                        </TabsTrigger>
                        <TabsTrigger
                            value="alert"
                            className="text-base font-medium border-b-2 data-[state=active]:border-b-white data-[state=active]:text-white  data-[state=active]:bg-accent transition-colors rounded-none"
                        >
                            {t("tabs.alert")}
                        </TabsTrigger>
                    </TabsList>
                    <SearchBar />
                </div>
                <TabsContent value="all" className="w-full">
                    <CardList />
                </TabsContent>
                <TabsContent value="trending">
                    <CardList />
                </TabsContent>
                <TabsContent value="on-chain">
                    <CardList />
                </TabsContent>
                <TabsContent value="listing">
                    <CardList />
                </TabsContent>
                <TabsContent value="alert">
                    <CardList />
                </TabsContent>
            </Tabs>
        </div>
    )
}