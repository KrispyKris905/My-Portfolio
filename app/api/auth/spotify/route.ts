import { NextRequest, NextResponse } from 'next/server';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI || 'http://127.0.0.1:3000/api/auth/callback/spotify';

// Scopes needed for your app
const scopes = [
  'user-read-recently-played',
  'user-top-read',
  'user-read-currently-playing',
].join(' ');

export async function GET(request: NextRequest) {
  const params = new URLSearchParams({
    client_id: client_id!,
    response_type: 'code',
    redirect_uri: redirect_uri,
    scope: scopes,
  });

  const authUrl = `https://accounts.spotify.com/authorize?${params.toString()}`;
  
  return NextResponse.redirect(authUrl);
}
