import { neon } from '@neondatabase/serverless';


export async function POST(request: Request) {

    try {
        const sql = neon(`${process.env.DATABASE_URL}`);
        const { email, name, clerkId } = await request.json();
        if (!email || !name || !clerkId) {
            return Response.json({ error: "Invalid Request" }, { status: 400 });
        }
        const response = await sql`
        INSERT INTO users (name,email,clerk_id) VALUES (${name},${email},${clerkId})`;

        return new Response(JSON.stringify({data:response}), { status: 201 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error:error }), {
            status: 500
        });

    }    
}