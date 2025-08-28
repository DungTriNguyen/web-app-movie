import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

export default function FAQ() {
    const t = useTranslations('faq');
    return (
        <section className="md:p-20 bg-accent px-4">
            <div className="container mx-auto gap-12 flex flex-col items-center justify-center">
                <div className="text-center gap-12 flex flex-col items-center justify-center">
                    <h1 className="text-gray-100 text-3xl lg:text-5xl font-semibold font-['Inter'] uppercase leading-10 lg:leading-[67.20px] max-w-[600px]">
                        {t("title")}
                    </h1>
                    <p className="text-gray-100 text-sm font-medium font-['Inter'] leading-snug">
                        {t("description")}
                    </p>
                </div>

                <Accordion type="single" collapsible className="gap-2 flex flex-col w-full max-w-3xl transition-all duration-300" defaultValue="item-1">
                    <AccordionItem
                        value="item-1"
                        className="bg-accent rounded-lg border border-border data-[state=open]:bg-gray-700"
                    >
                        <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:no-underline">
                            {t("accordion.item-1.title")}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4 text-secondary-foreground">
                            {t("accordion.item-1.description")}
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-2"
                        className="bg-accent rounded-lg border border-border data-[state=open]:bg-gray-700"
                    >
                        <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:no-underline">
                            {t("accordion.item-2.title")}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4 text-secondary-foreground">
                            {t("accordion.item-2.description")}
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-3"
                        className="bg-accent rounded-lg border border-border data-[state=open]:bg-gray-700"
                    >
                        <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:no-underline">
                            {t("accordion.item-3.title")}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4 text-secondary-foreground">
                            {t("accordion.item-3.description")}
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-4"
                        className="bg-accent rounded-lg border border-border data-[state=open]:bg-gray-700"
                    >
                        <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:no-underline">
                            {t("accordion.item-4.title")}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4 text-secondary-foreground">
                            {t("accordion.item-4.description")}
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-5"
                        className="bg-accent rounded-lg border border-border data-[state=open]:bg-gray-700"
                    >
                        <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:no-underline">
                            {t("accordion.item-5.title")}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4 text-secondary-foreground">
                            {t("accordion.item-5.description")}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <div className="flex justify-center items-center text-sm text-gray-100 font-medium font-['Inter'] leading-snug ">
                    {t("support")}
                </div>
            </div>
        </section>
    );
}