"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Lock, User, Package, FileText, Heart, History, MessageSquare, BarChart3 } from "lucide-react";

export default function PortalPage() {
  const tNav = useTranslations("nav");
  const [loggedIn, setLoggedIn] = useState(false);

  const portalFeatures = [
    { icon: Package, label: "Order History" },
    { icon: FileText, label: "Invoices" },
    { icon: FileText, label: "Downloads" },
    { icon: Heart, label: "Favorite Products" },
    { icon: History, label: "Quotation History" },
    { icon: MessageSquare, label: "Support Tickets" },
    { icon: BarChart3, label: "Lubrication Reports" },
  ];

  if (!loggedIn) {
    return (
      <>
        <section className="pt-32 pb-12 bg-navy-900 text-white">
          <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: tNav("portal") }]} />
            <h1 className="heading-section text-white mt-4">{tNav("portal")}</h1>
            <p className="text-white/85 text-lg mt-4">Future-ready customer portal for MONVERA clients</p>
          </div>
        </section>
        <section className="section-padding">
          <div className="container-wide mx-auto max-w-md">
            <div className="card-premium p-8">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Lock className="w-8 h-8 text-accent" />
              </div>
              <h2 className="font-display font-bold text-xl text-center text-navy-900 mb-6">Customer Login</h2>
              <form onSubmit={(e) => { e.preventDefault(); setLoggedIn(true); }} className="space-y-4">
                <div>
                  <label className="label-field">Email</label>
                  <input type="email" required className="input-field" />
                </div>
                <div>
                  <label className="label-field">Password</label>
                  <input type="password" required className="input-field" />
                </div>
                <Button type="submit" className="w-full">Login</Button>
              </form>
              <p className="text-center text-navy-500 text-sm mt-6">
                Contact us to become a registered customer
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="pt-32 pb-8 bg-navy-900 text-white">
        <div className="container-wide mx-auto px-4 flex items-center justify-between">
          <div>
            <h1 className="font-display font-bold text-2xl">{tNav("portal")}</h1>
            <p className="text-white/80 text-sm mt-1">Welcome back</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-wide mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portalFeatures.map(({ icon: Icon, label }) => (
            <div key={label} className="card-premium p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <span className="font-semibold text-navy-900">{label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
