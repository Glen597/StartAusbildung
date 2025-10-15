"use client"

import Link from "next/link";
import { Button } from "@/Components/ui/button";
import Image from "next/image";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen gap-2">
            <div>
                <Image
                    src={"/alert.png"}
                    alt="page-not found"
                    height={300}
                    width={300}
                    className="animate-bounce"
                />
            </div>
            <div>
                <h1 className="text-8xl font-bold">Seite nicht <span className="text-blue-600">
                    Gefunden</span></h1>
            </div>
            <div>
                <p className="text-2xl">Die gesuchte Seite ist nicht verfügbar</p>
            </div>
            <div className="mt-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-500">
                    <Link href={"/"}>Back to Home</Link>
                </Button>
            </div>

        </div>
    );
}

export default NotFound;