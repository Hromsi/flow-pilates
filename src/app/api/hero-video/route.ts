import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const vkEmbedUrl =
  "https://vk.com/video_ext.php?oid=72587992&id=456239758&hash=771ed801340d7f02&hd=2";

function extractVideoUrl(markup: string) {
  const filesMatch = markup.match(/"files":\{(.+?)\},"timeline_thumbs"/);
  const filesBlock = filesMatch?.[1];

  if (!filesBlock) {
    return null;
  }

  const candidates = ["mp4_720", "mp4_480", "mp4_360", "hls"];

  for (const key of candidates) {
    const match = filesBlock.match(
      new RegExp(`"${key}":"(https:\\\\/\\\\/[^"]+)"`),
    );

    if (match?.[1]) {
      return match[1].replaceAll("\\/", "/");
    }
  }

  return null;
}

export async function GET() {
  try {
    const response = await fetch(vkEmbedUrl, {
      cache: "no-store",
      headers: {
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Unable to fetch hero video config" },
        { status: 502 },
      );
    }

    const markup = await response.text();
    const videoUrl = extractVideoUrl(markup);

    if (!videoUrl) {
      return NextResponse.json(
        { error: "Unable to extract hero video URL" },
        { status: 502 },
      );
    }

    return NextResponse.redirect(videoUrl, {
      headers: {
        "cache-control": "no-store, no-cache, must-revalidate",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to serve hero video" },
      { status: 502 },
    );
  }
}
