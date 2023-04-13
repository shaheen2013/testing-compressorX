import GradientTitle from "@/components/GradientTitle";
import Navigation from "@/components/Navbar";
import Topbar from "@/components/Topbar";
import React from "react";
import Accordion from "@/components/accordion/Accordion";
import Footer from "@/components/Footer";

const FAQPage = () => {
  const [activeTab, setActiveTab] = React.useState("category5");
  return (
    <div className="faq">
      <Topbar />
      <Navigation />
      <GradientTitle title={"FAQ"} />
      <div className="bg-gradient-to-br from-lightPink via-anakiwa to-lightPink py-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="category-div-btn overflow-x-auto md:overflow-y-auto">
              <div className="flex md:block w-11/12">
                <button
                  onClick={() => setActiveTab("category1")}
                  className={
                    activeTab === "category1"
                      ? "md:w-full rounded-lg py-2 px-4 border mb-3 font-mulish normal lg:text-x24 md:text-x20 text-x18 font-bold bg-lavender text-white border-minsk"
                      : "md:w-full rounded-lg py-2 px-4 border mb-3 font-mulish normal lg:text-x24 md:text-x20 text-x18 font-light border-minsk text-minsk"
                  }
                >
                  Category1
                </button>
                <button
                  onClick={() => setActiveTab("category2")}
                  className={
                    activeTab === "category2"
                      ? "md:w-full rounded-lg py-2 px-4 border mb-3 font-mulish normal lg:text-x24 md:text-x20 text-x18 font-bold bg-lavender text-white border-minsk"
                      : "md:w-full rounded-lg py-2 px-4 border mb-3 font-mulish normal lg:text-x24 md:text-x20 text-x18 font-light border-minsk text-minsk"
                  }
                >
                  Category2
                </button>
                <button
                  onClick={() => setActiveTab("category3")}
                  className={
                    activeTab === "category3"
                      ? "md:w-full rounded-lg py-2 px-4 border mb-3 font-mulish normal lg:text-x24 md:text-x20 text-x18 font-bold bg-lavender text-white border-minsk"
                      : "md:w-full rounded-lg py-2 px-4 border mb-3 font-mulish normal lg:text-x24 md:text-x20 text-x18 font-light border-minsk text-minsk"
                  }
                >
                  Category3
                </button>
                <button
                  onClick={() => setActiveTab("category4")}
                  className={
                    activeTab === "category4"
                      ? "md:w-full rounded-lg py-2 px-4 border mb-3 font-mulish normal lg:text-x24 md:text-x20 text-x18 font-bold bg-lavender text-white border-minsk"
                      : "md:w-full rounded-lg py-2 px-4 border mb-3 font-mulish normal lg:text-x24 md:text-x20 text-x18 font-light border-minsk text-minsk"
                  }
                >
                  Category4
                </button>
                <button
                  onClick={() => setActiveTab("category5")}
                  className={
                    activeTab === "category5"
                      ? "md:w-full py-2 px-4 rounded-lg border mb-3 font-mulish normal lg:text-x24 md:text-x20 text-x18 font-bold bg-lavender text-white border-minsk"
                      : "md:w-full py-2 px-4 rounded-lg border mb-3 font-mulish normal lg:text-x24 md:text-x20 text-x18 font-light border-minsk text-minsk"
                  }
                >
                  Category5
                </button>
                <button
                  onClick={() => setActiveTab("category6")}
                  className={
                    activeTab === "category6"
                      ? "md:w-full py-2 px-4 border mb-3 rounded-lg font-mulish normal lg:text-x24 md:text-x20 text-x18 font-bold bg-lavender text-white border-minsk"
                      : "md:w-full py-2 px-4 border mb-3 rounded-lg font-mulish normal lg:text-x24 md:text-x20 text-x18 font-light border-minsk text-minsk"
                  }
                >
                  Category6
                </button>
                <button
                  onClick={() => setActiveTab("category7")}
                  className={
                    activeTab === "category7"
                      ? "md:w-full py-2 px-4 border mb-3 font-mulish rounded-lg normal lg:text-x24 md:text-x20 text-x18 font-bold bg-lavender text-white border-minsk"
                      : "md:w-full py-2 px-4 border mb-3 font-mulish rounded-lg normal lg:text-x24 md:text-x20 text-x18 font-light border-minsk text-minsk"
                  }
                >
                  Category7
                </button>
                <button
                  onClick={() => setActiveTab("category8")}
                  className={
                    activeTab === "category8"
                      ? "md:w-full py-2 px-4 border mb-3 font-mulish normal rounded-lg lg:text-x24 md:text-x20 text-x18 font-bold bg-lavender text-white border-minsk"
                      : "md:w-full py-2 px-4 border mb-3 font-mulish normal rounded-lg lg:text-x24 md:text-x20 text-x18 font-light border-minsk text-minsk"
                  }
                >
                  Category8
                </button>
                <button
                  onClick={() => setActiveTab("category9")}
                  className={
                    activeTab === "category9"
                      ? "md:w-full py-2 px-4 border mb-3 font-mulish normal rounded-lg lg:text-x24 md:text-x20 text-x18 font-bold bg-lavender text-white border-minsk"
                      : "md:w-full py-2 px-4 border mb-3 font-mulish normal rounded-lg lg:text-x24 md:text-x20 text-x18 font-light border-minsk text-minsk"
                  }
                >
                  Category9
                </button>
                <button
                  onClick={() => setActiveTab("category10")}
                  className={
                    activeTab === "category10"
                      ? "md:w-full py-2 px-4 border mb-3 font-mulish normal rounded-lg lg:text-x24 md:text-x20 text-x18 font-bold bg-lavender text-white border-minsk"
                      : "md:w-full py-2 px-4 border mb-3 font-mulish normal rounded-lg lg:text-x24 md:text-x20 text-x18 font-light border-minsk text-minsk"
                  }
                >
                  Category10
                </button>
                <button
                  onClick={() => setActiveTab("category11")}
                  className={
                    activeTab === "category11"
                      ? "md:w-full py-2 px-4 border mb-3 font-mulish normal rounded-lg lg:text-x24 md:text-x20 text-x18 font-bold bg-lavender text-white border-minsk"
                      : "md:w-full py-2 px-4 border mb-3 font-mulish normal rounded-lg lg:text-x24 md:text-x20 text-x18 font-light border-minsk text-minsk"
                  }
                >
                  Category11
                </button>
                <button
                  onClick={() => setActiveTab("category12")}
                  className={
                    activeTab === "category12"
                      ? "md:w-full py-2 px-4 border mb-3 font-mulish normal rounded-lg lg:text-x24 md:text-x20 text-x18 font-bold bg-lavender text-white border-minsk"
                      : "md:w-full py-2 px-4 border mb-3 font-mulish normal rounded-lg lg:text-x24 md:text-x20 text-x18 font-light border-minsk text-minsk"
                  }
                >
                  Category12
                </button>
              </div>
            </div>
            {activeTab == "category1" ? (
              <div className="col-span-3 category-div overflow-y-auto">
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={true}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
              </div>
            ) : (
              <></>
            )}
            {activeTab == "category2" ? (
              <div className="col-span-3 category-div overflow-y-auto">
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={true}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
              </div>
            ) : (
              <></>
            )}
            {activeTab == "category3" ? (
              <div className="col-span-3 category-div overflow-y-auto">
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={true}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
              </div>
            ) : (
              <></>
            )}
            {activeTab == "category4" ? (
              <div className="col-span-3 category-div overflow-y-auto">
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={true}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
              </div>
            ) : (
              <></>
            )}
            {activeTab == "category5" ? (
              <div className="col-span-3 category-div overflow-y-auto">
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={true}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
              </div>
            ) : (
              <></>
            )}
            {activeTab == "category6" ? (
              <div className="col-span-3 category-div overflow-y-auto">
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={true}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
              </div>
            ) : (
              <></>
            )}
            {activeTab == "category7" ? (
              <div className="col-span-3 category-div overflow-y-auto">
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={true}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
              </div>
            ) : (
              <></>
            )}
            {activeTab == "category8" ? (
              <div className="col-span-3 category-div overflow-y-auto">
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={true}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
              </div>
            ) : (
              <></>
            )}
            {activeTab == "category9" ? (
              <div className="col-span-3 category-div overflow-y-auto">
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={true}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
              </div>
            ) : (
              <></>
            )}
            {activeTab == "category10" ? (
              <div className="col-span-3 category-div overflow-y-auto">
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={true}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
              </div>
            ) : (
              <></>
            )}
            {activeTab == "category11" ? (
              <div className="col-span-3 category-div overflow-y-auto">
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={true}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
              </div>
            ) : (
              <></>
            )}
            {activeTab == "category12" ? (
              <div className="col-span-3 category-div overflow-y-auto">
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={true}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
                <Accordion
                  isShowing={false}
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl enim turpis id nam duis id. Velit in eget velit vestibulum morbi. In penatibus pretium nulla neque, vel habitasse vel dignissim ultricies. Non bibendum est laoreet metus mi hendrerit mauris donec. Sem habitant nunc, et est ullamcorper nec. Eget aliquet bibendum amet, tincidunt donec morbi.<br/>
                                                                Egestas et id sed sed vel, blandit. Vel ut duis adipiscing facilisis faucibus nibh. Facilisis nisl adipiscing diam dui suspendisse etiam. Ut libero augue eget ut neque scelerisque tortor mollis. Dui amet sed integer morbi purus et non. Vestibulum, nulla maecenas quam eu lorem vel."
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default FAQPage;
