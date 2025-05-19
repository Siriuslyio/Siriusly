import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8 grid gap-6">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Better World Fund</h1>
        <p className="text-lg mt-2 text-gray-600">
          Transparent giving. Real impact.
        </p>
      </header>

      <Card className="max-w-xl mx-auto">
        <CardContent className="grid gap-4">
          <h2 className="text-2xl font-semibold">Donate Now</h2>
          <Input placeholder="Your Name" />
          <Input placeholder="Email Address" type="email" />
          <Input placeholder="Donation Amount (USD)" type="number" />
          <Button className="w-full">Donate & Create Account</Button>
        </CardContent>
      </Card>

      <section className="grid gap-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center">Your Dashboard</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="grid gap-2">
              <h3 className="font-semibold">Your Balance</h3>
              <p className="text-3xl">$2,450.00</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="grid gap-2">
              <h3 className="font-semibold">Active Project</h3>
              <p>Clean Water in Ghana - $10,000 of $25,000 raised</p>
              <Button>View Details</Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="grid gap-3">
            <h3 className="font-semibold">Vote on the Next Project</h3>
            <Button>Vote Now</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="grid gap-3">
            <h3 className="font-semibold">Submit a Project Idea</h3>
            <Textarea placeholder="Describe your idea..." />
            <Button>Submit Idea</Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
