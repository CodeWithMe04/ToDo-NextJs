// import { requestAsyncStorage } from "next/dist/client/components/request-async-storage.external";
import { NextResponse } from "next/server";
export async function GET(request) {
    console.log(request)
    return NextResponse.json({a:"hey"})
}
 
export async function HEAD(request) {}
 
export async function POST(request) {
    console.log(request)
    return NextResponse.json({a:"hey post"})
}
 
export async function PUT(request) {}
 
export async function DELETE(request) {}
 
export async function PATCH(request) {}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request) {}